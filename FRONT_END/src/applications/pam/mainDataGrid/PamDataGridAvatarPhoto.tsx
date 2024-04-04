import {PamOff2024} from "../../../_generated_gql_/graphql";
import {useRef, useState} from "react";
import {ButtonBase, darken, lighten} from "@mui/material";
import {Download} from "@mui/icons-material";
import {Theme} from "@mui/material/styles";
import AvatarPhoto from "../../common/UserAdministration/AvatarPhoto.tsx";

export function PamDataGridAvatarPhoto(props: {
    onClick: (e, altKeyPressed, hovered) => void,
    row: PamOff2024, size ,
    handleDoubleClick : (matricule : string) => void
}) {

    const [hovered, setHovered] = useState(false);
    const [altKeyPressed, setAltKeyPressed] = useState(false);
    const buttonRef = useRef(null);

    function handleMouseInter(event: MouseEvent) {
        buttonRef.current.focus()
        setHovered(true)
    }

    function handleMouseLeave(event: MouseEvent) {
        setHovered(false)
        setAltKeyPressed(false)
    }

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key == "t") {
            setAltKeyPressed(true)
        }
    }

    function handleKeyUp(e: KeyboardEvent) {
        if (e.key == "t") {
            setAltKeyPressed(false)
        }
    }

    return <ButtonBase
        onMouseEnter={handleMouseInter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        tabIndex={0}
        onClick={(e) => props.onClick(e, altKeyPressed, hovered)}
        onDoubleClick={props.handleDoubleClick}
        ref={buttonRef}
    >
        {
            !(hovered && altKeyPressed) &&
            <AvatarPhoto size={props.size} matricule={props.row?.matricule} imageSize={2200} borderRadius={2}/>
        }
        {
            hovered && altKeyPressed && <Download style={{
                boxSizing: 'border-box'
            }} sx={{
                width: props.size,
                height: props.size,
                bgcolor: (theme: Theme) => lighten(theme.palette.primary.main, 0.8),
                borderColor: (theme: Theme) => darken(theme.palette.primary.main, 0),
                borderWidth: "0.5",
                borderStyle: "solid",
                borderRadius: 3
            }}/>
        }
    </ButtonBase>;
}
