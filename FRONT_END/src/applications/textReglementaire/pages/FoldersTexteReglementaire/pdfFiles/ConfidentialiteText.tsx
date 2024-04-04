


export const ConfidentialiteText = ({libConfidentialiteAr} : {libConfidentialiteAr : string}) => {


    return (
        <div
        style={{
            width : '100px' ,
            height : '40px' ,
            borderWidth : '5px' ,
            border : 'solid' ,
            textAlign : 'center' ,

            borderColor : libConfidentialiteAr === 'مكتوم' ? 'rgb(255,113,40)' :
                libConfidentialiteAr === 'سري' ? 'rgb(255,0,0)' :
                    libConfidentialiteAr === 'سري جدا' ?  '#880000' :
                        '#030000' ,

            backgroundColor : libConfidentialiteAr === 'مكتوم' ? 'rgba(255,255,255,0)' :
                libConfidentialiteAr === 'سري' ? 'rgba(255,255,255,0)' :
                    libConfidentialiteAr === 'سري جدا' ?  '#ff0000' :
                        '#940000' ,

            color : libConfidentialiteAr === 'مكتوم' ? 'rgb(255,113,40)' :
                libConfidentialiteAr === 'سري' ? 'rgb(255,0,0)' :
                    libConfidentialiteAr === 'سري جدا' ?  '#ffffff' :
                        '#030000' ,
            fontSize : '120%' ,
            fontWeight : 'bold'

        }}
        >
            {
                libConfidentialiteAr
            }
        </div>
    )
}