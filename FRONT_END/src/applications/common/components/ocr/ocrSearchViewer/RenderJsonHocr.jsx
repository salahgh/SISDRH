import { Paper} from "@mui/material";
import React, {useState} from "react";
import './RenderjsonHocr.css'
import {useSelector} from "react-redux";
import {
    selectSelectedInDocumentLineid,
    selectSelectedResultLine
} from "../../../redux/features/elasticSearch/selectedResultLineSlice";
import RenderResultOverlay from "../../../applications/textReglementaire/pages/ocr/searchPage/RenderResultOverlay";

function getBgColor(class_) {
    if (class_ === "") return;
    switch (class_) {
        case null :
            return "rgba(255,251,251,0.13)";
        case 'page' :
            return "rgba(255,255,255,0.1)";
        case 'paragraphe' :
            return "rgba(255,255,255,0)";
        case 'line' :
            return "rgba(232,197,149,0)";
        // case 'ocrx_word' : return "#f5b7b7"
    }
}


const RenderNode = ({data, scale}) => {

    if (data?.pages) {
        return (
            <Paper sx={{width: '100%', height: '100%', id: 'page'}}>
                {
                    data.pages.map((page) => <RenderNode data={page} scale={scale}/>)
                }
            </Paper>
        )
    }

    if (data?.paragraphs) return (
        <div style={{width: '100%', height: '100%'}} key={Math.floor(Math.random() * 10000)}>
            <div style={{
                top: `${data?.bbox?.y1 / scale}px`,
                left: `${data?.bbox?.x1 / scale}px`,
                width: `${(data?.bbox?.x2 - data?.bbox?.x1) / scale}px`,
                height: `${(data?.bbox?.y2 - data?.bbox?.y1) / scale}px`,
                backgroundColor: getBgColor(data.type),
                position: 'relative',
                border: 'solid',
                borderWidth: '1'
            }}>
                {
                    data?.paragraphs?.map((paragraph) => <RenderNode data={paragraph} scale={scale}/>)
                }
            </div>

        </div>

    )

    if (data?.lines) return (
        <>
            <div key={Math.floor(Math.random() * 10000)} style={{
                top: `${data?.bbox?.y1 / scale}px`,
                left: `${data?.bbox?.x1 / scale}px`,
                width: `${(data?.bbox?.x2 - data?.bbox?.x1) / scale}px`,
                height: `${(data?.bbox?.y2 - data?.bbox?.y1) / scale}px`,
                backgroundColor: getBgColor(data.type),
                // fontSize: data.fontInfo ? `${data.fontInfo / scale / 1.2}px` : 12,
                position: 'absolute',
                margin: 0,
                padding: 0
            }}>
            </div>
            {
                data?.lines?.map((line) => <RenderNode data={line} scale={scale}/>)
            }
        </>
    )

    // if (data?.text) return (
    //     <div key={Math.floor(Math.random() * 10000)} className={"justify-content"} style={{
    //         top: `${data?.bbox?.y1 / scale}px`,
    //         left: `${data?.bbox?.x1 / scale}px`,
    //         right: `${data?.bbox?.x2 / scale}px`,
    //         bottom: `${data?.bbox?.y2 / scale}px`,
    //         width: `${(data?.bbox?.x2 - data?.bbox?.x1) / scale}px`,
    //         height: `${(data?.bbox?.y2 - data?.bbox?.y1) / scale}px`,
    //         backgroundColor: getBgColor(data.type),
    //         fontSize: data.fsize ? `${data.fsize / scale / 1.15}px` : 12,
    //         position: 'absolute',
    //         margin: 0,
    //         padding: 0,
    //     }}>
    //         {
    //             data?.text && data.text
    //         }
    //     </div>
    // )
}

const RenderJsonHocr = ({page, selectedLine , thisPageLines , image}) => {

    const [scale, setScale] = useState(5)

    return (
        <>
            <img
                style={{position : 'absolute'}}
                width={510}
                // height={500}
                // src={"data:image/jpeg;base64," + image}
                src={image}
                alt={'df'}
            />
            <RenderNode data={page} scale={scale}/>
            <RenderResultOverlay selectedLine={selectedLine} thisPageLines={thisPageLines} scale={scale}/>
        </>
    )
}


export default RenderJsonHocr;