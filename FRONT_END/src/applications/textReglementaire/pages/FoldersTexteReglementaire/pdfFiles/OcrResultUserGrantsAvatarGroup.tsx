import {AvatarGroup} from "@mui/lab";
import {ButtonBase} from "@mui/material";

const OcrResultUserGrantsAvatarGroup = ({userIds, onClick , borderColor , max , size ,borderWidth}: {
    userIds: string[], onClick?: () => void , borderColor? : string , max? : number , size? : number , borderWidth? : number
}) => {

    if (onClick) {
        return (
            <ButtonBase
                onClick={onClick}
            >
                <AvatarGroup
                    max={max ? max : 3}
                    spacing={15}
                    sx={{
                        '& .MuiAvatar-root': {
                            borderColor: borderColor ? borderColor : '#121212',
                            borderWidth: borderWidth ? borderWidth : 1,
                        },
                    }}>
                    {
                        userIds?.map((userId) => {
                            return (
                                <></>
                                // <SimpleAvatarPhoto
                                //     size={size ? size : 45}
                                //     imageSize={200}
                                //     variant={'circular'}
                                //     avatarVariant={'circular'}
                                //     selected={false}
                                //     matricule={userId}
                                //     key={userId}
                                // >
                                // </SimpleAvatarPhoto>
                            )
                        })
                    }
                </AvatarGroup>
            </ButtonBase>
        )
    } else {
        return (
            <AvatarGroup
                max={max ? max : 3}
                spacing={15}
                sx={{
                    '& .MuiAvatar-root': {
                        borderColor: borderColor ? borderColor : '#121212',
                        borderWidth: borderWidth ? borderWidth : 1,
                    },
                }}>
                {
                    userIds?.map((userId) => {
                        return (
                            <SimpleAvatarPhoto
                                size={size ? size: 45}
                                imageSize={200}
                                variant={'circular'}
                                avatarVariant={'circular'}
                                selected={false}
                                matricule={userId}
                                key={userId}
                            >
                            </SimpleAvatarPhoto>
                        )
                    })
                }
            </AvatarGroup>
        )
    }
}

export default OcrResultUserGrantsAvatarGroup