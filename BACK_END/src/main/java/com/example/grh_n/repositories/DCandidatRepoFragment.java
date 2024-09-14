//package com.example.grh_n.repositories;
//
//import com.example.grh_n.candidat.QDCandidat;
//import com.example.grh_n.candidat.projections.DTO.*;
//import com.example.grh_n.candidat.views.QVvDiplomeCandidatV_Entity;
//import com.example.grh_n.candidat.views.QVvMaxInscriptionV_Entity;
//import com.example.grh_n.entities.REntities.QRDiplomeEntitie;
//import com.example.grh_n.entities.REntities.QREtablissementEntitie;
//import com.example.grh_n.entities.REntities.QRSpecialiteEntitie;
//import com.querydsl.jpa.impl.JPAQuery;
//import jakarta.persistence.EntityManager;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.PageImpl;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//import java.util.List;
//
//public interface DCandidatRepoFragment {
//
//    PageImpl<DCandidatDto> sustomSearch(
//            Pageable pageable,
//            String noma,
//            String pnoma,
//            String ln,
//            List<String> specialites,
//            List<String> sex
//    );
//
//    List<BacParSpecialiteDto> getBacParSpecialite();
//
//    DCandidatDtoDetails getDCandidatDtoById(String id) ;
//}
//
//class DCandidatRepoFragmentImpl implements DCandidatRepoFragment {
//
//    private final Logger logger = LoggerFactory.getLogger(DCandidatRepoFragmentImpl.class);
//
//    @Autowired
//    private final EntityManager entityManager;
//
//    public DCandidatRepoFragmentImpl(EntityManager entityManager) {
//        this.entityManager = entityManager;
//    }
//
//    @Override
//    public DCandidatDtoDetails getDCandidatDtoById(String id) {
//
//        JPAQuery<DCandidatDtoDetails> query = new JPAQuery<>(this.entityManager);
//
//        QVvDiplomeCandidatV_Entity qVvDiplomeCandidatV_entity = QVvDiplomeCandidatV_Entity.vvDiplomeCandidatV_Entity;
//        QVvMaxInscriptionV_Entity qVvMaxInscriptionV_entity = QVvMaxInscriptionV_Entity.vvMaxInscriptionV_Entity;
//        QDCandidat dCandidat = QDCandidat.dCandidat;
//        QRDiplomeEntitie qrDiplome = QRDiplomeEntitie.rDiplomeEntitie;
//        QRSpecialiteEntitie qrSpecialite = QRSpecialiteEntitie.rSpecialiteEntitie;
//        QREtablissementEntitie qrEtablissement = QREtablissementEntitie.rEtablissementEntitie ;
//        JPAQuery<DCandidatDtoDetails> dCandidatJPAQuery = query
//                .from(dCandidat)
//                .leftJoin(qVvMaxInscriptionV_entity)
//                .on(dCandidat.id.eq(qVvMaxInscriptionV_entity.idCandidat))
//                .leftJoin(qVvDiplomeCandidatV_entity)
//                .on(qVvDiplomeCandidatV_entity.idInscription.eq(qVvMaxInscriptionV_entity.idInscription))
//                .leftJoin(qrDiplome).on(qVvDiplomeCandidatV_entity.idRDiplome.idRDiplome.eq(qrDiplome.idRDiplome))
//                .leftJoin(qrSpecialite).on(qVvDiplomeCandidatV_entity.idSpecialite.idSpecialite.eq(qrSpecialite.idSpecialite))
//                .leftJoin(qrEtablissement).on(qVvDiplomeCandidatV_entity.idEtablissement.idEtablissement.eq(qrEtablissement.idEtablissement))
//                .select(
//                        new QDCandidatDtoDetails(
//                                dCandidat.id ,
//                                dCandidat.noma ,
//                                dCandidat.pnoma ,
//                                qVvDiplomeCandidatV_entity.moyenne ,
//                                dCandidat.Sex ,
//                                dCandidat.ln ,
//                                dCandidat.lr ,
//                                qVvDiplomeCandidatV_entity.dateObtension ,
//                                dCandidat.dn ,
//                                qrDiplome ,
//                                qrSpecialite ,
//                                qrEtablissement ,
//                                dCandidat.adresse
//                        )
//                ).where(
//                        dCandidat.id.eq(id)
//                );
//        return dCandidatJPAQuery.fetchOne() ;
//    }
//
//    @Override
//    public PageImpl<DCandidatDto> sustomSearch(
//
//            Pageable pageable,
//            String noma,
//            String pnoma,
//            String ln,
//            List<String> specialites,
//            List<String> sex) {
//
//        JPAQuery<?> query = new JPAQuery<>(this.entityManager);
//
//        QVvDiplomeCandidatV_Entity qVvDiplomeCandidatV_entity = QVvDiplomeCandidatV_Entity.vvDiplomeCandidatV_Entity;
//        QVvMaxInscriptionV_Entity qVvMaxInscriptionV_entity = QVvMaxInscriptionV_Entity.vvMaxInscriptionV_Entity;
//        QDCandidat dCandidat = QDCandidat.dCandidat;
//        QRDiplomeEntitie qrDiplome = QRDiplomeEntitie.rDiplomeEntitie;
//        QRSpecialiteEntitie qrSpecialite = QRSpecialiteEntitie.rSpecialiteEntitie;
//
//        JPAQuery<DCandidatDto> dCandidatJPAQuery = query
//                .from(dCandidat)
//                .leftJoin(qVvMaxInscriptionV_entity)
//                .on(dCandidat.id.eq(qVvMaxInscriptionV_entity.idCandidat))
//                .leftJoin(qVvDiplomeCandidatV_entity)
//                .on(qVvDiplomeCandidatV_entity.idInscription.eq(qVvMaxInscriptionV_entity.idInscription))
//                .leftJoin(qrDiplome).on(qVvDiplomeCandidatV_entity.idRDiplome.idRDiplome.eq(qrDiplome.idRDiplome))
//                .leftJoin(qrSpecialite).on(qVvDiplomeCandidatV_entity.idSpecialite.idSpecialite.eq(qrSpecialite.idSpecialite))
//                .select(
//                        new QDCandidatDto(
//                                dCandidat.id ,
//                                dCandidat.noma ,
//                                dCandidat.pnoma ,
//                                qVvDiplomeCandidatV_entity.moyenne ,
//                                dCandidat.Sex ,
//                                dCandidat.ln ,
//                                dCandidat.lr ,
//                                qVvDiplomeCandidatV_entity.dateObtension ,
//                                dCandidat.dn ,
//                                qrDiplome ,
//                                qrSpecialite
//                        )
//                ).where(
////                        dCandidat.noma.contains(noma)
////                                .and(dCandidat.pnoma.contains(pnoma))
////                                .and(dCandidat.ln.codeApc.startsWith(ln))
////                                .and(
//////                                        qrSpecialite.idSpecialite.in(specialites).or(qrSpecialite.isNull())
////                                        qrSpecialite.idSpecialite.in(specialites).or(qrSpecialite.isNull())
////                                )
////                                .and(dCandidat.Sex.idSex.in(sex))
//                );
//
//        Long count = dCandidatJPAQuery.fetchCount();
//
//        logger.info(String.valueOf(pageable));
//        pageable.getSort().get().forEach(
//                index -> {
//                    logger.info(index.getProperty());
//                    logger.info(index.getDirection().name());
//                    switch (index.getProperty()) {
//                        case "noma":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? dCandidat.noma.asc() : dCandidat.noma.desc());
//                            break;
//                        case "pnoma":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? dCandidat.pnoma.asc() : dCandidat.pnoma.desc());
//                            break;
//                        case "specialite":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? qrSpecialite.idSpecialite.asc() : qrSpecialite.idSpecialite.desc());
//                            break;
//                        case "moyenne":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? qVvDiplomeCandidatV_entity.moyenne.asc() : qVvDiplomeCandidatV_entity.moyenne.desc());
//                            break;
//                        case "ln":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? dCandidat.ln.codeApc.asc() : dCandidat.ln.codeApc.desc());
//                            break;
//                        case "lr":
//                            dCandidatJPAQuery.orderBy(index.getDirection() == Sort.Direction.ASC ? dCandidat.lr.codeApc.asc() : dCandidat.lr.codeApc.desc());
//                            break;
//                    }
//                }
//        );
//
//        // odo pas plus d'une inscription a une date donne
//        // todo chaque candidat doit avoir son bac sinon il n'apparaitera pas dans la liste
//        PageImpl<DCandidatDto> dCandidatDtoPage = new PageImpl<DCandidatDto>(
//                dCandidatJPAQuery
//                        .limit(pageable.getPageSize())
//                        .offset(pageable.getOffset())
//                        .fetch(),
//                pageable,
//                count);
//        return dCandidatDtoPage;
//    }
//
//    @Override
//    public List<BacParSpecialiteDto> getBacParSpecialite() {
//
//        JPAQuery<?> query = new JPAQuery<>(this.entityManager);
//
//        QVvDiplomeCandidatV_Entity qVvDiplomeCandidatV_entity = QVvDiplomeCandidatV_Entity.vvDiplomeCandidatV_Entity;
//        QVvMaxInscriptionV_Entity qVvMaxInscriptionV_entity = QVvMaxInscriptionV_Entity.vvMaxInscriptionV_Entity;
//        QDCandidat dCandidat = QDCandidat.dCandidat;
//        QRSpecialiteEntitie qrSpecialite = QRSpecialiteEntitie.rSpecialiteEntitie;
//
//        JPAQuery<BacParSpecialiteDto> dCandidatJPAQuery = query
//                .from(qVvMaxInscriptionV_entity)
//                .leftJoin(qVvDiplomeCandidatV_entity)
//                .on(qVvDiplomeCandidatV_entity.idInscription.eq(qVvMaxInscriptionV_entity.idInscription))
//                .leftJoin(qrSpecialite).on(qVvDiplomeCandidatV_entity.idSpecialite.idSpecialite.eq(qrSpecialite.idSpecialite))
//                .select(
//                      new QBacParSpecialiteDto(
//                              qrSpecialite.idSpecialite ,
//                              qrSpecialite.libSpecialiteAr ,
//                              qVvMaxInscriptionV_entity.idCandidat.count()
//                      )
//                )
//                .groupBy(qrSpecialite.idSpecialite).groupBy(qrSpecialite.idSpecialite)
//                .orderBy(qVvMaxInscriptionV_entity.idCandidat.count().desc()) ;
//
//        return dCandidatJPAQuery.fetch();
//    }
//
//}
//
