
import aritllerie from '../resources/logs_anp/شارات/armes/aritllerie.png'
import blinde from '../resources/logs_anp/شارات/armes/blinde.png'
import cfa from '../resources/logs_anp/شارات/armes/cfa.png'
import cfn from '../resources/logs_anp/شارات/armes/cfn.png'
import cft from '../resources/logs_anp/شارات/armes/cft.png'
import cga from '../resources/logs_anp/شارات/armes/cga.png'
import cgn from '../resources/logs_anp/شارات/armes/cgn.png'
import cgr from '../resources/logs_anp/شارات/armes/cgr.png'
import dat from '../resources/logs_anp/شارات/armes/dat.png'
import dca from '../resources/logs_anp/شارات/armes/dca.png'
import dci from '../resources/logs_anp/شارات/armes/dci.png'
import dfm from '../resources/logs_anp/شارات/armes/dfm.png'
import justice from '../resources/logs_anp/شارات/armes/justice.png'
import materiel from '../resources/logs_anp/شارات/armes/materiel.png'
import para from '../resources/logs_anp/شارات/armes/para.png'
import reco from '../resources/logs_anp/شارات/armes/reco.png'
import sante from '../resources/logs_anp/شارات/armes/sante.png'
import securite from '../resources/logs_anp/شارات/armes/securite.png'
import social from '../resources/logs_anp/شارات/armes/social.png'
import trans from '../resources/logs_anp/شارات/armes/trans.png'
import transport from '../resources/logs_anp/شارات/armes/transport.png'
import genie from '../resources/logs_anp/شارات/armes/genie.png'
import dco from '../resources/logs_anp/شارات/armes/dco.png'
import guerre_electronique from '../resources/logs_anp/شارات/armes/guerre_electronique.png'



export const ASSETS_ARMES = {
    aritllerie : aritllerie ,
    blinde : blinde ,
    cfa : cfa ,
    cfn : cfn ,
    cft : cft ,
    cga : cga ,
    cgn : cgn ,
    cgr : cgr ,
    dat : dat ,
    dca : dca ,
    dci : dci ,
    dco : dco ,
    dfm : dfm ,
    genie : genie ,
    guerre_electronique :guerre_electronique ,
    justice : justice ,
    materiel : materiel ,
    para : para ,
    reco : reco ,
    sante : sante ,
    securite : securite ,
    social : social ,
    transport : transport ,
    trans : trans
}

export const getArmeImage = (armeId) => {

        switch (armeId) {
            case 0 : return null
            case 10 : return cft ;
            case 11 : return blinde ;
            case 12 : return aritllerie ;
            case 13 : return dca ;
            case 14  : return transport ;
            case 15 : return  genie;
            case 16 : return para ;
            case 17 : return dat ;
            case 18 : return null ; // infra
            case 19 : return  null ; // carburant
            case 20 : return cfa ;
            case 21 : return cfn ;
            case 22 : return trans ;
            case 23 : return cgn ;
            case 24 : return cgr ;
            case 27 : return null ; // dreg
            case 28 : return cga ;
            case 29 : return dci ;
            case 30 : return materiel ;
            case 31 : return sante ;
            case 33 : return null ; // finance ;
            case 34 : return dco ;
            case 35 : return dfm ;
            case 38 : return social ;
            case 40 : return null ; // sia
            case 41 : return null ; // sport
            case 42 : return securite ;
            case 43 : return justice ;
            case 44 : return trans ;
            case 45 : return trans ;
            case 80 : return null ; // interarmes
            case 81 : return null ; // carburant
            case 82 : return null ; // service national
            case 90 : return cft ;
            case 94 : return securite ;
            case 99 : return reco ;
            default : return null ;
    }
}
