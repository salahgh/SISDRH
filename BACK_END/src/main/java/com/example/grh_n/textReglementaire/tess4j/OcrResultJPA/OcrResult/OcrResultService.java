package com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult;

import com.example.grh_n.dbdsn.entities.dto.CountParDiplomeCivile;
import com.example.grh_n.security.user.User;
import com.example.grh_n.security.user.UserService;
import com.example.grh_n.textReglementaire.tess4j.ElasticSearch.ElasticEntity.OcrIndexElasticRepository;
import com.example.grh_n.textReglementaire.tess4j.ElasticSearch.ElasticEntity.OcrResultEntityElastic_2;
import com.example.grh_n.textReglementaire.tess4j.ElasticSearch.HOCRToJSON;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.ConfidentialiteCountDto;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.pageAsImage.OcrResultPageAsImage;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.pageAsImage.OcrResultPageAsImageEmbeddedId;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.pageAsImage.OcrResultPageAsImageRepository;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.QConfidentialiteCountDto;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.QTypeTextReglementaireCountDto;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.TypeTextReglementaireCountDto;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder.Folder;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder.FolderRepository;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import org.apache.commons.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@GraphQLApi
@Service
public class OcrResultService {

    private final OCRResultCrudRepository ocrResultRepository;
    private final OcrIndexElasticRepository ocrResultEntityElastic2 ;
    private final TypeTexteReglementaireRepository typeTexteReglementaireRepository;
    private final ConfidentialiteRepository confidentialiteRepository;
    private final UserService userService;

    // todo discuss security issues when using the userService ;
    OcrIndexElasticRepository ocrIndexElasticRepository;
    private final OcrResultPageAsImageRepository ocrResultPageAsImageRepository;
    static Logger logger = LoggerFactory.getLogger(HOCRToJSON.class);

    final EntityManager em;

    public OcrResultService
            (
                    OCRResultCrudRepository ocrResultRepository, OcrIndexElasticRepository ocrResultEntityElastic2,
                    TypeTexteReglementaireRepository typeTexteReglementaireRepository,
                    ConfidentialiteRepository confidentialiteRepository, UserService userService,
                    OcrIndexElasticRepository ocrIndexElasticRepository_,
                    OcrResultPageAsImageRepository ocrResultPageAsImageRepository, EntityManager em,
                    FolderRepository folderRepository) {
        this.ocrResultRepository = ocrResultRepository;
        this.ocrResultEntityElastic2 = ocrResultEntityElastic2;
        this.typeTexteReglementaireRepository = typeTexteReglementaireRepository;
        this.confidentialiteRepository = confidentialiteRepository;
        this.userService = userService;
        this.ocrIndexElasticRepository = ocrIndexElasticRepository_;
        this.ocrResultPageAsImageRepository = ocrResultPageAsImageRepository;
        this.em = em;
        this.folderRepository = folderRepository;
    }

    public Optional<OcrResultEntityJpa> doesFileExist(byte[] file) {
        String signature = generateSignature(file);
        return ocrResultRepository.findById(signature);
    }

    private static final String HASH_ALGORITHM = "SHA-256";
    private final FolderRepository folderRepository;

    public static String generateSignature(byte[] file) {
        MessageDigest digest = null;
        try {
            digest = MessageDigest.getInstance(HASH_ALGORITHM);
        } catch (NoSuchAlgorithmException ex) {
            ex.printStackTrace();
        }
        assert digest != null;
        digest.update(file);
        return bytesToHex(digest.digest());
    }

    private static String bytesToHex(byte[] bytes) {
        StringBuilder builder = new StringBuilder();
        for (byte b : bytes) {
            builder.append(String.format("%02x", b));
        }
        return builder.toString();
    }

    @GraphQLQuery(name = "ocrResultByid")
    public OcrResultEntityJpa findById(String fileSignatue) {
        return ocrResultRepository.findById(fileSignatue)
                .orElse(null);
    }

    @GraphQLQuery(name = "waitingForOcrAll")
    public Page<OcrResultEntityJpa> getWaitingPdfs(Pageable pageable) {
        return ocrResultRepository.getWaitingPdfs(pageable);
    }

    public OcrResultEntityElastic_2 save(OcrResultEntityElastic_2 ocrResultEntityElastic_2) {
        return ocrIndexElasticRepository.save(ocrResultEntityElastic_2);
    }

    public OcrResultEntityJpa save(OcrResultEntityJpa result) {
        return ocrResultRepository.save(result);
    }

    @GraphQLQuery
    public Page<OcrResultEntityJpa> findAllOcrResultsPaged(Pageable pageable) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return ocrResultRepository.findAll_(pageable);
    }

    @GraphQLMutation
    public void deletePdfFile(String id) {
        OcrResultEntityJpa ocrResultEntityJpa = ocrResultRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("ocr result with id " + id + " not found")
        ) ;
        ocrIndexElasticRepository.deleteById(id);
        ocrResultEntityJpa.setOcrDone("n");
        ocrResultRepository.save(ocrResultEntityJpa) ;
        List<Folder> folders = ocrResultEntityJpa.getFolders();
        for (Folder folder : folders) {
            List<OcrResultEntityJpa> folderOcrFiles = folder.getPdfFiles();
            folderOcrFiles.remove(ocrResultEntityJpa);
            folder.setPdfFiles(folderOcrFiles);
            folderRepository.save(folder);
        }
        ocrResultRepository.deleteById(id);
    }


    @GraphQLQuery
    public List<OcrResultEntityJpa> findAllOcrResultByIds(List<String> ids) {
        return ocrResultRepository.findAllByIdIn(ids);
    }

    @GraphQLQuery
    public List<TypeTexteReglementaire> getTypeTexteReglementaireByLib(String lib) {
        QTypeTexteReglementaire qTypeTexteReglementaire = QTypeTexteReglementaire.typeTexteReglementaire ;
        BooleanExpression expression = qTypeTexteReglementaire.libTypeTexteAr.like(lib).or(qTypeTexteReglementaire.libTypeTexteAr.like(lib));
        return (List<TypeTexteReglementaire>) typeTexteReglementaireRepository.findAll(expression);
    }

    @GraphQLQuery
    public List<TypeTexteReglementaire> getAllTypeTexteReglementaires() {
        return (List<TypeTexteReglementaire>) typeTexteReglementaireRepository.findAll();
    }

    // todo Security preAuthorize by Id
    @GraphQLQuery
    public String getOcrResultPdf(String ocrResultid) {
        if (Objects.equals(ocrResultid, "-1")) {
            throw new IllegalArgumentException("ocrResultPdf is not a valid ");
        }
        OcrResultEntityJpa ocrResultEntityJpa = ocrResultRepository.findById(ocrResultid).orElseThrow(
                () -> new EntityNotFoundException("ocr result with id " + ocrResultid + " does not exits ")
        );
        return Base64.encodeBase64String(ocrResultEntityJpa.getPdf());
    }

    @GraphQLQuery
    public String getOcrResultImagePrepared(String ocrResultid, Integer pageIndex, Integer size) {
        OcrResultPageAsImageEmbeddedId ocrResultPageAsImageEmbeddedId = new OcrResultPageAsImageEmbeddedId();
        ocrResultPageAsImageEmbeddedId.setOcrResultId(ocrResultid);
        ocrResultPageAsImageEmbeddedId.setPageIndex(pageIndex);
        ocrResultPageAsImageEmbeddedId.setSize(size);

        Optional<OcrResultPageAsImage> byId = ocrResultPageAsImageRepository.findById(
                ocrResultPageAsImageEmbeddedId
        );
        return byId.map(ocrResultPageAsImage -> new String(ocrResultPageAsImage.getBase64PngImage())).orElse("");
    }

    @GraphQLQuery
    public List<Confidentialite> getAllConfidentialites() {
        return StreamSupport.stream(confidentialiteRepository.findAll().spliterator(), false).collect(Collectors.toList());
    }

    @GraphQLQuery
    public Page<OcrResultEntityJpa> getAllOcrResultUsersGrantsPaged(Pageable pageable) {
        return ocrResultRepository.findByOcrResultUserGrantsIsNotEmpty(pageable);
    }

    @GraphQLQuery
    public List<OcrResultEntityJpa> getAllOcrResultConfidentialteNotDefined() {
        Confidentialite confidentialite = confidentialiteRepository.findById("5").orElseThrow(
                () -> new EntityNotFoundException("confidentialite not found")
        );
        return ocrResultRepository.findAllByConfidentialite(confidentialite);
    }

    @GraphQLMutation
    public void updateConfidentialite(String confidentailteId, String ocrResultId) {
        OcrResultEntityJpa ocrResultEntityJpa = this.findById(ocrResultId);
        Confidentialite confidentialite = confidentialiteRepository.findById(confidentailteId).orElseThrow(
                () -> new EntityNotFoundException("confidentialite not found")
        );
        ocrResultEntityJpa.setConfidentialite(confidentialite);
        ocrResultRepository.save(ocrResultEntityJpa);

        OcrResultEntityElastic_2 ocrResultEntityElastic_2 = ocrIndexElasticRepository.findById(ocrResultId)
                .orElseThrow(() -> new EntityNotFoundException("elastic search entitity with id " + ocrResultId + " not found"));
        ocrResultEntityElastic_2.setLibConfidentialiteFr(confidentialite.getLibConfidentialiteFr());
        ocrResultEntityElastic_2.setLibConfidentialiteAr(confidentialite.getLibConfidentialiteAr());
        ocrIndexElasticRepository.save(ocrResultEntityElastic_2);
    }

    @GraphQLQuery
    public OcrResultEntityElastic_2 findOcrResultEntityESbyId(String fileId) {
        return ocrIndexElasticRepository.findById(fileId).orElseThrow(() -> new EntityNotFoundException("file with id = " + fileId + " does not exist"));
    }

    public Page<OcrResultEntityJpa> findAllByOwner(User user , Pageable pageable){
        return ocrResultRepository.findAllByOwner(user,pageable);
    }

    public Page<OcrResultEntityJpa> findAll_(Pageable pageable){
        return ocrResultRepository.findAll_(pageable);
    }

    public Page<OcrResultEntityJpa> findAllPagedByFoldersContaining(Folder folder , Pageable pageable){
        return ocrResultRepository.findAllPagedByFoldersContaining(folder , pageable);
    }

    @GraphQLQuery
    public List<TypeTextReglementaireCountDto> typeTextReglementaireCount(){
        QTypeTexteReglementaire qTypeTexteReglementaire = QTypeTexteReglementaire.typeTexteReglementaire ;
        QOcrResultEntityJpa qOcrResultEntityJpa = QOcrResultEntityJpa.ocrResultEntityJpa ;
        JPAQuery<CountParDiplomeCivile> query = new JPAQuery<CountParDiplomeCivile>(em);
        return query.from(qOcrResultEntityJpa)
                .join(qTypeTexteReglementaire).on(qOcrResultEntityJpa.typeTexteReglementaire.id.eq(qTypeTexteReglementaire.id))
                .groupBy(qTypeTexteReglementaire.libTypeTexteAr , qTypeTexteReglementaire.libTypeTexteFr , qTypeTexteReglementaire.id)
                .orderBy(qTypeTexteReglementaire.id.asc())
                .select(
                        new QTypeTextReglementaireCountDto(
                                qTypeTexteReglementaire.id ,
                                qTypeTexteReglementaire.libTypeTexteAr ,
                                qTypeTexteReglementaire.libTypeTexteFr ,
                                qOcrResultEntityJpa.count()
                        )
                )
                .fetch();
    }

    @GraphQLQuery
    public List<ConfidentialiteCountDto> confidentialiteCount() {
        QConfidentialite qConfidentialite = QConfidentialite.confidentialite ;
        QOcrResultEntityJpa qOcrResultEntityJpa = QOcrResultEntityJpa.ocrResultEntityJpa ;
        JPAQuery<CountParDiplomeCivile> query = new JPAQuery<CountParDiplomeCivile>(em);
        return query.from(qOcrResultEntityJpa)
                .join(qConfidentialite).on(qOcrResultEntityJpa.confidentialite.id.eq(qConfidentialite.id))
                .groupBy(qConfidentialite.id , qConfidentialite.libConfidentialiteAr , qConfidentialite.libConfidentialiteFr)
                .orderBy(qConfidentialite.id.asc())
                .select(
                        new QConfidentialiteCountDto(
                                qConfidentialite.id ,
                                qConfidentialite.libConfidentialiteAr ,
                                qConfidentialite.libConfidentialiteFr ,
                                qOcrResultEntityJpa.count()
                        )
                ).fetch() ;
    }

    @GraphQLQuery
    public List<OcrResultEntityJpa> findOcrResultEntityJpabyReference(String ref){
       return ocrResultRepository.findByReferenceLike(ref);
    }
}


