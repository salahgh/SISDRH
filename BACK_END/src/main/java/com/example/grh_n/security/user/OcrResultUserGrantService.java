package com.example.grh_n.security.user;

import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultService;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@GraphQLApi
public class OcrResultUserGrantService {

    private final OcrResultUserGrantRepository ocrResultUserGrantRepository;
    private final UserService userService;
    private final OcrResultService ocrResultService;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    public OcrResultUserGrantService(OcrResultUserGrantRepository ocrResultUserGrantRepository, UserService userService, OcrResultService ocrResultService) {
        this.ocrResultUserGrantRepository = ocrResultUserGrantRepository;
        this.userService = userService;
        this.ocrResultService = ocrResultService;
    }

    @GraphQLMutation(name = "changeOcrResultGrant")
    @Transactional
    public List<OcrResultUserGrant> changeOcrResultGrant(List<OcrResultUserGrantKeyInput> ocrResultUserGrantKeysInput , String ocrResultId) {
        List<OcrResultUserGrantKey> resultUserGrantKeys = ocrResultUserGrantKeysInput.stream().map((item) -> OcrResultUserGrantKey.builder()
                .OcrResultId(item.getOcrResultId())
                .userId(item.getUserId())
                .type(item.getType().getDisplayName())
                .build()).toList();
        OcrResultEntityJpa ocrResultEntityJpa = ocrResultService.findById(ocrResultId);
        if ( ocrResultEntityJpa.getOcrResultUserGrants() != null )  ocrResultUserGrantRepository.deleteAll(ocrResultEntityJpa.getOcrResultUserGrants());
        List<OcrResultUserGrant> grants = new java.util.ArrayList<>();
        for (OcrResultUserGrantKey ocrResultUserGrantKey : resultUserGrantKeys) {
            User user = userService.getByMatricule(ocrResultUserGrantKey.getUserId());
            grants.add(ocrResultUserGrantRepository.save(
                    OcrResultUserGrant.builder()
                            .id(ocrResultUserGrantKey)
                            .ocrResultEntityJpa(ocrResultEntityJpa)
                            .user(user)
                            .build()
            ));
        }
        return grants;
    }

    @GraphQLQuery
    public Page<OcrResultUserGrant> getOcrResultUserGrantsPaged(Pageable pageable) {
        return ocrResultUserGrantRepository.findAll(pageable);
    }
}
