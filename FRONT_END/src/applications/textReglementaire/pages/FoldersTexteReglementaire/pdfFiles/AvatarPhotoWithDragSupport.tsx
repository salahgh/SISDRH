import {Avatar, Box, Card , Stack, Typography} from "@mui/material";
import {TOOLS} from "../../../../../redux/RtkQueryApis/constants";
import {OverridableStringUnion} from "@mui/types";
import {useQuery} from "@apollo/client";
import {useDrag} from "react-dnd";
import {GetPhotoByMatriculeAndSizeDocument} from "../../../../../_generated_gql_/graphql";
import {VisibilityOff, VisibilitySharp} from "@mui/icons-material";

export const AvatarPhotoWithDragSupport = (
    {
        matricule,
        imageSize = 200,
        size = 200,
        variant = 'rounded',
        avatarVariant = 'circular',
        handleClick,
        selected = false,
        libHabilitationFr,
        noma ,
        pnoma  ,
        canSee ,
        ...other
    }:
        {
            matricule: string | undefined | null,
            imageSize?: 100 | 200 | 500 | 1000,
            handleClick?: (item: string) => void,
            selected?: boolean,
            size?: number,
            variant?: 'square' | 'rectangle' | 'rounded',
            avatarVariant?: OverridableStringUnion<'circular' | 'rounded' | 'square'>,
            libHabilitationFr?: string | null ,
            noma? : string | null ,
            pnoma? : string | null ,
            canSee? : boolean | null
        }) => {

    const {
        data,
        error,
        loading, refetch
    } = useQuery(GetPhotoByMatriculeAndSizeDocument, {
        variables: {
            matricule: matricule ? matricule : '',
            size: imageSize
        }
    })

    const [{isDragging}, drag] = useDrag(
        {
            type: 'user',
            item: {matricule: matricule},
            collect: (monitor) => {
                return {
                    isDragging: monitor.isDragging()
                }
            }
        },
    )
    return (
        <Box>
            <Card
                ref={drag}
                sx={{
                    bgcolor: canSee ? 'rgba(49,154,5,0.3)' : 'rgba(154,5,5,0.3)',
                }}
            >
                <Stack sx={{position : 'relative' , padding : 1 , alignContent : 'center' , justifyItems : 'center' , alignItems : 'center'}} >
                    <Avatar
                        // @ts-ignore
                        imgProps={{
                            width: size * 0.9,
                            height: size * 0.9,
                            style: {
                                objectFit: variant === 'square' ? 'cover' : 'contain',
                                objectPosition: "top",
                            }
                        }}
                        src={
                            TOOLS.getSrcFromBase64String(data?.getPhotoByMatriculeAndSize?.data)
                        }
                        sx={{
                            width: size * 0.7,
                            border: 'solid',
                            borderColor: selected ? '#455139' : null,
                            borderWidth: 2,
                            opacity: isDragging ? 0.3 : 1,
                            borderRadius: 3,
                            height: variant === 'square' ? size * 0.7 : size,
                            transition: 'transform 0.2s ease-in-out',
                            '&:hover': {
                                transform: selected ? 'scale(1)' : 'scale(1)', // or any other scale factor you prefer
                            },
                            transform: selected ? 'scale(0.9)' : 'scale(0.95)' ,
                            position : 'relative'
                        }}
                        variant={avatarVariant}
                    />
                    {
                        canSee ?
                            <VisibilitySharp
                                sx={{
                                    color: '#2a8503',
                                    position: 'absolute',
                                    top: 17,
                                    left: 20,
                                }}
                            />
                            :
                            <VisibilityOff
                                sx={{
                                    color: '#fd0000',
                                    position: 'absolute',
                                    top: 17,
                                    left: 20,
                                }}
                            />

                    }
                    <Stack
                        spacing={1}
                        padding={1}
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        width={'100%'}
                    >
                        <HablitationAvatar
                            size={35}
                            libHabilitationFr={libHabilitationFr}
                        />
                        <Typography
                            fontWeight={'bold'}
                            variant={'body1'}
                            align={'center'}
                        >
                            {
                                noma + ' ' + pnoma
                            }
                        </Typography>
                    </Stack>
                </Stack>
            </Card>

        </Box>
    )
}


