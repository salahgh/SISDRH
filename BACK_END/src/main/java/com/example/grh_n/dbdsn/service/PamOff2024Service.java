package com.example.grh_n.dbdsn.service;

import com.example.grh_n.dbdsn.entities.*;
import com.example.grh_n.dbdsn.entities.QPamOff2024;
import com.example.grh_n.dbdsn.entities.dto.*;
import com.example.grh_n.dbdsn.entities.dto.QCountParArme;
import com.example.grh_n.dbdsn.entities.dto.QCountParCsn;
import com.example.grh_n.dbdsn.entities.dto.QCountParDiplomeCivile;
import com.example.grh_n.dbdsn.entities.dto.QCountParDiplomeMilitaire;
import com.example.grh_n.dbdsn.entities.dto.QCountParGradeDto;
import com.example.grh_n.dbdsn.entities.dto.QCountParPostes;
import com.example.grh_n.dbdsn.repos.DemandeRadiationRepository;
import com.example.grh_n.dbdsn.repos.PamOff2024Repository;
import com.example.grh_n.dbdsn.repos.ReportPosteRealiseRepository;
import com.example.grh_n.rh.entities.REntities.QRDiplomeCivile;
import com.example.grh_n.rh.entities.REntities.QRDiplomeMilitaire;
import com.example.grh_n.rh.entities.REntities.ted.QRhPoste;
import com.querydsl.jpa.impl.JPAQuery;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.List;

@Service
@GraphQLApi
@AllArgsConstructor
public class PamOff2024Service {
    final PamOff2024Repository pamOff2024Repository;

    final ReportPosteRealiseRepository posteRealiseRepository;
    final EntityManager em;
    private final Logger logger = LoggerFactory.getLogger(this.getClass().getName());
    private final DemandeRadiationRepository demandeRadiationRepository;

    //todo ajouter le code arme remplir les champs vides

//    @GraphQLQuery(name = "findPam2024")
//    public Page<PamOff2024> findAll(PamOff2024 pamOff2024 , Pageable pageable){
//        return pamOff2024Repository.findAll(pageable) ;
//    }

    @GraphQLMutation
    public void addDemandeRadiation(String matricule) {
        PamOff2024 pamOff2024 = pamOff2024Repository.findById(matricule).orElseThrow(() -> new EntityNotFoundException("not found"));
        DemandeRadiation demandeRadiation = DemandeRadiation.builder()
                .dateDemande(LocalDate.now())
                .pamOff2024(pamOff2024)
                .build();
        demandeRadiationRepository.save(demandeRadiation);
    }

    @GraphQLQuery
    public PamOff2024 findPamOff2024ById(String id) {
        return pamOff2024Repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("not found"));
    }

    @GraphQLMutation
    public void deleteDemandeRadiation(Long id) {
        demandeRadiationRepository.deleteById(id);
    }

    @GraphQLQuery
    public List<CountParPostes> findDistinctPostes() {
        JPAQuery<PamOff2024> query = new JPAQuery<PamOff2024>(em);

        QPamOff2024 qPamOff2024 = QPamOff2024.pamOff2024;
        QRhPoste qRhPoste = QRhPoste.rhPoste;

        return query.from(qPamOff2024)
                .join(qRhPoste).on(qPamOff2024.poste.eq(qRhPoste.idPoste))
                .groupBy(qPamOff2024.poste, qRhPoste.trie_)
                .orderBy(qRhPoste.trie_.asc())
                .select(
                        new QCountParPostes(
                                qPamOff2024.poste,
                                qPamOff2024.poste.count(),
                                qRhPoste.trie_
                        )
                ).fetch();
    }

    @GraphQLQuery
    public List<CountParGradeDto> findDistinctGrade() {
        JPAQuery<PamOff2024> query = new JPAQuery<PamOff2024>(em);
        QPamOff2024 qPamOff2024 = QPamOff2024.pamOff2024;
        return query.from(qPamOff2024)
                .groupBy(qPamOff2024.g, qPamOff2024.grade)
                .orderBy(qPamOff2024.g.asc())
                .select(
                        new QCountParGradeDto(
                                qPamOff2024.g,
                                qPamOff2024.grade,
                                qPamOff2024.g.count()
                        )
                ).fetch();
    }

    @GraphQLQuery
    public List<CountParCsn> findDistinctCsn() {
        JPAQuery<PamOff2024> query = new JPAQuery<PamOff2024>(em);
        QPamOff2024 qPamOff2024 = QPamOff2024.pamOff2024;
        return query.from(qPamOff2024)
                .groupBy(qPamOff2024.structureSn.id.substring(0, 2), qPamOff2024.csn)
                .orderBy(qPamOff2024.structureSn.id.substring(0, 2).asc())
                .select(
                        new QCountParCsn(
                                qPamOff2024.csn,
                                qPamOff2024.csn.count(),
                                qPamOff2024.structureSn.id.substring(0, 2)
                        )
                ).fetch();
    }

    @GraphQLQuery
    public List<CountParArme> findDistinctArmes() {
        JPAQuery<CountParArme> query = new JPAQuery<CountParArme>(em);
        QPamOff2024 qPamOff2024 = QPamOff2024.pamOff2024;
        return query.from(qPamOff2024)
                .groupBy(qPamOff2024.arme, qPamOff2024.libArmeAr)
                .orderBy(qPamOff2024.arme.asc())
                .select(
                        new QCountParArme(
                                qPamOff2024.arme,
                                qPamOff2024.libArmeAr,
                                qPamOff2024.arme.count()
                        )
                ).fetch();
    }

    @GraphQLQuery
    public List<CountParDiplomeCivile> findDistinctDiplomesCiviles() {
        JPAQuery<CountParDiplomeCivile> query = new JPAQuery<CountParDiplomeCivile>(em);
        QPamOff2024 qPamOff2024 = QPamOff2024.pamOff2024;
        QRDiplomeCivile qrDiplomeCivile = QRDiplomeCivile.rDiplomeCivile ;
        return query.from(qPamOff2024).join(qrDiplomeCivile).on(qPamOff2024.code_dip_civ.eq(qrDiplomeCivile.codeDipCiv))
                .groupBy(qrDiplomeCivile.libAr , qrDiplomeCivile.libFr , qrDiplomeCivile.abrAr , qrDiplomeCivile.abrFr , qrDiplomeCivile.codeDipCiv)
                .orderBy(qrDiplomeCivile.codeDipCiv.asc())
                .select(
                        new QCountParDiplomeCivile(
                                qrDiplomeCivile.codeDipCiv,
                                qrDiplomeCivile.abrAr,
                                qrDiplomeCivile.abrFr,
                                qrDiplomeCivile.libAr,
                                qrDiplomeCivile.libFr,
                                qrDiplomeCivile.count()
                        )
                ).fetch();
    }

    @GraphQLQuery
    public List<CountParDiplomeMilitaire> findDistinctDiplomesMilitaires() {
        JPAQuery<CountParDiplomeMilitaire> query = new JPAQuery<CountParDiplomeMilitaire>(em);
        QPamOff2024 qPamOff2024 = QPamOff2024.pamOff2024;
        QRDiplomeMilitaire qrDiplomeMilitaire = QRDiplomeMilitaire.rDiplomeMilitaire ;
        return query.from(qPamOff2024).join(qrDiplomeMilitaire).on(qPamOff2024.code_dip_mil.eq(qrDiplomeMilitaire.codeDipMil))
                .groupBy(qrDiplomeMilitaire.libAr , qrDiplomeMilitaire.libFr , qrDiplomeMilitaire.abrAr , qrDiplomeMilitaire.abrFr , qrDiplomeMilitaire.codeDipMil)
                .orderBy(qrDiplomeMilitaire.codeDipMil.asc())
                .select(
                        new QCountParDiplomeMilitaire(
                                qrDiplomeMilitaire.codeDipMil,
                                qrDiplomeMilitaire.abrAr,
                                qrDiplomeMilitaire.abrFr,
                                qrDiplomeMilitaire.libAr,
                                qrDiplomeMilitaire.libFr,
                                qrDiplomeMilitaire.count()
                        )
                ).fetch();
    }

    public JPAQuery<PamOff2024> getSearechQuery(FilteringParams filteringParams) {

        JPAQuery<PamOff2024> query = new JPAQuery<PamOff2024>(em);
        QPamOff2024 qPamOff2024 = QPamOff2024.pamOff2024;

        if(filteringParams == null){
            query = query.from(qPamOff2024);
            return query.select(qPamOff2024);
        }

        String searchToken = filteringParams.getSearchToken();
        List<BigInteger> grades = filteringParams.getGrades();
        List<BigInteger> armes = filteringParams.getArmes();
        String csn = filteringParams.getCsn();
        List<Integer> suds = filteringParams.getSuds();
        List<String> postes = filteringParams.getPostes();
        String idStructure = filteringParams.getIdStructure();
        List<String> pam = filteringParams.getPam();
        List<String> pav = filteringParams.getPav();
        String formation = filteringParams.getFormation();
        List<String> diplomesCiviles = filteringParams.getDiplomesCiviles();
        List<String> diplomesMilitaires = filteringParams.getDiplomesMilitaires();



        // 1 sud , 2 non , 3 both



        query = query.from(qPamOff2024);
        if (searchToken != null && !searchToken.isBlank()) {
            query = query.where(
                    qPamOff2024.matricule.like("%" + searchToken + "%")
                            .or(qPamOff2024.noma.like("%" + searchToken + "%"))
                            .or(qPamOff2024.pnoma.like("%" + searchToken + "%"))
            );
        }
        if (csn != null && !csn.isBlank()) {
            query = query.where(qPamOff2024.csn.like("%" + csn + "%"));
        }
        if (grades != null && grades.size() != 0) {
            query = query.where(qPamOff2024.g.in(grades));
        }
        if (armes != null && armes.size() != 0) {
            query = query.where(qPamOff2024.arme.in(armes));
        }
        if (postes != null && postes.size() != 0) {
            query = query.where(qPamOff2024.poste.in(postes));
        }
        if (idStructure != null) {
            if (!idStructure.equals("-1")) {
                query = query.where(qPamOff2024.structureSn.id.eq(idStructure));
            }
        }

        if (suds != null && suds.size() != 0) {

            if (!(suds.contains(0) && suds.contains(1))) {
                if (suds.contains(0)) {
                    query = query.where(qPamOff2024.nDureeS.loe(2.9));
                }
                if (suds.contains(1)) {
                    query = query.where(qPamOff2024.nDureeS.goe(3));
                }
            }
        }

        if (diplomesCiviles != null && !diplomesCiviles.isEmpty()) {

            query = query.where(qPamOff2024.code_dip_civ.in(diplomesCiviles));
        }

        if(diplomesMilitaires != null && !diplomesMilitaires.isEmpty()){

            query = query.where(qPamOff2024.code_dip_mil.in(diplomesMilitaires));
        }


        if (pam != null && pam.size() != 0) {

            if (!(pam.contains("0") && pam.contains("1"))) {
                if (pam.contains("0")) {
                    query = query.where(qPamOff2024.dureeN.lt(3));
                }
                if (pam.contains("1")) {
                    query = query.where(qPamOff2024.dureeN.goe(3));
                }
            }
        }

        if (pav != null && pav.size() != 0) {

            if (!(pav.contains("0") && pav.contains("1"))) {
                if (pav.contains("0")) {
                    query = query.where(qPamOff2024.promotionNumber.loe(0));
                }
                if (pav.contains("1")) {
                    query = query.where(qPamOff2024.promotionNumber.gt(0));
                }
            }
        }

        return query.select(qPamOff2024);

    }

    public List<PamOff2024> findListPam(FilteringParams filteringParams){
        QPamOff2024 qPamOff2024 = QPamOff2024.pamOff2024;
        JPAQuery<PamOff2024> finalQuery = getSearechQuery(filteringParams).orderBy(qPamOff2024.g.asc(), qPamOff2024.trieAnciennete.asc());;
        return finalQuery.fetch() ;
    }

    @GraphQLQuery(name = "findPam2024")
    public Page<PamOff2024> searchAll(
            Pageable pageable,
            FilteringParams filteringParams
    ) {

        QPamOff2024 qPamOff2024 = QPamOff2024.pamOff2024;

        JPAQuery<PamOff2024> finalQuery = getSearechQuery(filteringParams);
        finalQuery.orderBy(qPamOff2024.g.asc(), qPamOff2024.trieAnciennete.asc());

//        pageable.getSort().get().forEach(
//                index -> {
//                    switch (index.getProperty()) {
//                        case "matricule":
//                            finalQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? qPamOff2024.matricule.asc() : qPamOff2024.matricule.desc());
//                            break;
//                        case "noma":
//                            finalQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? qPamOff2024.noma.asc() : qPamOff2024.noma.desc());
//                            break;
//                        case "pnoma":
//                            finalQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? qPamOff2024.pnoma.asc() : qPamOff2024.pnoma.desc());
//                            break;
//                        case "g":
//                            finalQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? qPamOff2024.g.asc() : qPamOff2024.g.desc());
//                            break;
//                        case "csn":
//                            finalQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? qPamOff2024.csn.asc() : qPamOff2024.csn.desc());
//                            break;
//                    }
//                }
//        );
        finalQuery.orderBy(qPamOff2024.g.asc(), qPamOff2024.trieAnciennete.asc());

        return new PageImpl<PamOff2024>(
                finalQuery
                        .limit(pageable.getPageSize())
                        .offset(pageable.getOffset())
                        .fetch(),
                pageable,
                finalQuery.fetchCount()
        );
    }

    @GraphQLQuery
    public List<ReportPosteRealise> getReportPosteRealise() {
        return (List<ReportPosteRealise>) posteRealiseRepository.findAll();
    }

    @GraphQLQuery
    public List<PamOff2024> findAllPamOff2024() {
        return (List<PamOff2024>) pamOff2024Repository.findAll();
    }
}
