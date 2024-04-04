
import av_caporal from '../resources/grades/av_caporal.png'
import av_caporal_chef from '../resources/grades/av_caporal_chef.png'
import av_sergent from '../resources/grades/av_sergent.png'
import av_sergent_chef from '../resources/grades/av_sergent_chef.png'
import av_adjudent from '../resources/grades/av_adjudent.png'
import av_adjudent_chef from '../resources/grades/av_adjudent_chef.png'
import av_sou_lieutenant from '../resources/grades/av_sou_lieutenant.png'
import av_lieutenant from '../resources/grades/av_lieutenant.png'
import av_capitaine from '../resources/grades/av_capitaine.png'
import av_commandant from '../resources/grades/av_commandant.png'
import av_lieutenant_colonal from '../resources/grades/av_lieutenant_colonal.jpg'
import av_colonel from '../resources/grades/av_colonel.png'
import general from '../resources/grades/general.png'
import general_major from '../resources/grades/general_major.png'
import general_major_corps from '../resources/grades/general_major_corps.png'

import cft_caporal from '../resources/grades/cft_caporal.jpg'
import cft_caporal_chef from '../resources/grades/cft_caporal_chef.png'
import cft_sergent from '../resources/grades/cft_sergent.png'
import cft_sergent_chef from '../resources/grades/cft_sergent_chef.png'
import cft_adjudent from '../resources/grades/cft_adjudent.png'
import cft_adjudent_chef from '../resources/grades/cft_adjudent_chef.png'
import cft_sous_lieutenet from '../resources/grades/cft_sous_lieutenet.png'
import cft_lieutenant from '../resources/grades/cft_lieutenant.png'
import cft_capitaine from '../resources/grades/cft_capitaine.png'
import cft_commandant from '../resources/grades/cft_commandant.png'
import cft_lieutenant_colonel from '../resources/grades/cft_lieutenant_colonel.png'
import cft_colonel from '../resources/grades/cft_colonel.png'
import etoile from '../resources/images/etoile.png'

export const ASSETS_GRADES = {
    av_caporal : av_caporal ,
    av_caporal_chef : av_caporal_chef ,
    av_sergent : av_sergent ,
    av_sergent_chef: av_sergent_chef ,
    av_adjudent : av_adjudent ,
    av_adjudent_chef : av_adjudent_chef ,
    av_sou_lieutenant : av_sou_lieutenant ,
    av_lieutenant : av_lieutenant ,
    av_capitaine : av_capitaine ,
    av_commandant : av_commandant ,
    av_lieutenant_colonal : av_lieutenant_colonal ,
    av_colonel : av_colonel ,
    general : general ,
    general_major : general_major ,
    general_major_corps : general_major_corps ,
    cft_caporal : cft_caporal ,
    cft_caporal_chef : cft_caporal_chef ,
    cft_sergent : cft_sergent ,
    cft_sergent_chef : cft_sergent_chef ,
    cft_adjudent : cft_adjudent ,
    cft_adjudent_chef : cft_adjudent_chef ,
    cft_sous_lieutenet :cft_sous_lieutenet ,
    cft_lieutenant : cft_lieutenant ,
    cft_capitaine : cft_capitaine ,
    cft_commandant :cft_commandant  ,
    cft_lieutenant_colonel : cft_lieutenant_colonel ,
    cft_colonel : cft_colonel ,
    etoile : etoile
}

export const getGradeImage = (gradeId , armeId) => {
    if(armeId == 20 || armeId == 17) {
        switch (gradeId) {
            case 12 : return null
            case 14 : return general_major ;
            case 16 : return general_major ;
            case 18 : return general ;
            case 22 : return cft_colonel ;
            case 24  : return av_lieutenant_colonal ;
            case 26 : return av_commandant ;
            case 31 : return av_capitaine ;
            case 33 : return av_lieutenant ;
            case 35 : return av_sou_lieutenant ;
            case 39 : return  null ; // eleve officier actif
            case 40 : return null ; //adjudent major
            case 41 : return av_adjudent_chef ;
            case 43 : return av_adjudent ;
            case 44 : return av_sergent_chef ;
            case 45 : return av_sergent_chef ;
            case 46 : return av_sergent ;
            case 47 : return av_sergent ;
            case 49 : return null ; //eleve sous-officier
            case 52 : return av_caporal_chef ;
            case 54: return av_caporal ;
            case 55 : return null ; // eleve grade ;
            case 56 : return null ; // joundi ;
            case 58 : return // eleve joundi ;
            case 60 : return null ; // sous-lieutenant du contingent
            case 62 : return null ; // sous-lieutenant du contingent
            case 64 : return null ; // eleve-officier du contingent
            case 70 : return null ; //sergent du contingnet
            case 72 : return null ; // eleve sous officier du contingent
            case 80 : return null ; // caporal chef du contingent
            case 82 : return null ; // caporal du contingent
            default : return null ;
        }
    }else {
        switch (gradeId) {
            case 12 : return null
            case 14 : return general_major ;
            case 16 : return general_major ;
            case 18 : return general ;
            case 22 : return cft_colonel ;
            case 24  : return cft_lieutenant_colonel ;
            case 26 : return cft_commandant ;
            case 31 : return cft_capitaine ;
            case 33 : return cft_lieutenant ;
            case 35 : return cft_sous_lieutenet ;
            case 39 : return  null ; // eleve officier actif
            case 40 : return null ; //adjudent major
            case 41 : return cft_adjudent_chef ;
            case 43 : return cft_adjudent ;
            case 44 : return cft_sergent_chef ;
            case 45 : return cft_sergent_chef ;
            case 46 : return cft_sergent ;
            case 47 : return cft_sergent ;
            case 49 : return null ; //eleve sous-officier
            case 52 : return cft_caporal_chef ;
            case 54: return cft_caporal ;
            case 55 : return null ; // eleve grade ;
            case 56 : return null ; // joundi ;
            case 58 : return // eleve joundi ;
            case 60 : return null ; // sous-lieutenant du contingent
            case 62 : return null ; // sous-lieutenant du contingent
            case 64 : return null ; // eleve-officier du contingent
            case 70 : return null ; //sergent du contingnet
            case 72 : return null ; // eleve sous officier du contingent
            case 80 : return null ; // caporal chef du contingent
            case 82 : return null ; // caporal du contingent
            default : return null ;
        }
    }
}
