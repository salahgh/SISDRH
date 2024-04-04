import {Avatar, ButtonBase, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography} from "@mui/material";
import {
    AddDemandeRadiationDocument,
    DeleteDemandeRadiationDocument,
    FindPamOff2024ByIdDocument, FindPamOff2024ByIdQuery,
} from "../../_generated_gql_/graphql";
import {directeur, TOOLS} from "../../redux/RtkQueryApis/constants";
import {useMutation, useQuery} from "@apollo/client";
import {PostChip} from "./PostChip";
import {RetretableChip} from "./RetretableChip";
import {SudChip} from "./SudChip";
import {PamChip} from "./PamChip";
import {FicheDeVoeuxStack} from "./FicheDeVoeuxStack";
import FormationCivileChip from "./FormationCivileChip";
import FormationMilitaireChip from "./FormationMilitaireChip";
import {FormationChip} from "./FormationChip";
import useSnackBarNotifications from "../common/notifications/useSnackBarNotifications.tsx";
import { ArmeAvatar } from "../rh/ArmeAvatar.tsx";
import GradeAvatar from "../rh/GradeAvatar.tsx";
import AvatarPhoto from "../common/UserAdministration/AvatarPhoto.tsx";


export const PersonelCard = ({pamOff24Id, refetch}: { pamOff24Id: String, refetch: () => void }) => {

    const width = 500

    const [addDemandeRadiation] = useMutation(AddDemandeRadiationDocument)
    const [deleteDemandeRadiation] = useMutation(DeleteDemandeRadiationDocument)
    const {handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar} = useSnackBarNotifications()

    const {data, loading, error} = useQuery(FindPamOff2024ByIdDocument, {variables: {id: pamOff24Id}})
    let personnel: FindPamOff2024ByIdQuery["findPamOff2024ById"];
    if (data) {
        personnel = data.findPamOff2024ById
    }

    const handleClick = () => {

        if (personnel?.demandeRadiations?.length != 0) {

            deleteDemandeRadiation({variables: {id: personnel?.demandeRadiations?.[0]?.id}})
                .then((r) => {
                    handleShowInfoSnackBar('deleted')
                    refetch()
                })
                .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)))
        } else {

            addDemandeRadiation({variables: {matricule: personnel?.matricule}})
                .then((r) => {
                    handleShowInfoSnackBar('created')
                    refetch()
                })
                .catch((e) => JSON.stringify(e))
        }

    }

    if (loading) return <div> loading ... </div>
    if (error) return <div> error !! </div>

    return (
        <Stack
            spacing={1}
            flex={1}
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <AvatarPhoto
                matricule={personnel?.matricule}
                imageSize={2500}
                size={300}
                borderRadius={10}
                avatarVariant={'rounded'}
            />
            <Typography variant={'h4'} fontWeight={'bold'}>
                {personnel?.noma + ' ' + personnel?.pnoma}
            </Typography>
            <Typography
                variant={'h5'}
                fontWeight={'bold'}
            > {TOOLS.formatMatricule(personnel?.matricule)}
            </Typography>


            <Stack
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={1}
                padding={1}>
                {
                    personnel?.matricule !== directeur && <RetretableChip matricule={personnel?.matricule}/>
                }
                {
                    personnel?.matricule !== directeur && <ButtonBase
                        onClick={() => handleClick()}
                    >
                        <Stack sx={{
                            width: 30, height: 30,
                            bgcolor: !personnel?.demandeRadiations?.length == 0 ? '#cb9797' : '#e1e1e1',
                            borderRadius: 2
                        }}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Typography
                                variant={'h5'}
                                fontWeight={'bold'}
                                color={'#f4f0f1'}
                            > D </Typography>

                        </Stack>
                    </ButtonBase>
                }

                <ArmeAvatar armeId={personnel?.arme} width={50}></ArmeAvatar>
                <GradeAvatar gradeId={personnel?.g} width={90} armeId={personnel?.arme}
                    promotionNumber={personnel?.promotionNumber}/>
                <PostChip poste={personnel?.poste}/>
                {
                    personnel?.matricule != directeur && <SudChip NDureeS={personnel?.NDureeS}></SudChip>
                }
                {
                    personnel?.matricule != directeur && <PamChip dureeN={personnel?.dureeN}></PamChip>
                }
            </Stack>

            <Typography
                fontWeight={'bold'}> {personnel?.structureSn?.runite?.abreviationAr + '/' + personnel?.structureSn?.runite?.regionMilitaire?.libAbrRegionAr}
            </Typography>

            <Typography
                // fontWeight={'bold'}
            > {personnel?.fonction}
            </Typography>

            <Stack
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={1}
                padding={1}>

                {/*<Typography variant={'h5'}*/}
                {/*            fontWeight={'bold'}> {personnel?.ens} </Typography>*/}
                <Stack direction={'row'} spacing={1}>
                    <Typography
                        // fontWeight={'bold'}
                    > {personnel?.ensFonction} </Typography>
                    <Typography fontWeight={'bold'}> الأقدمية في الوظيفة </Typography>
                </Stack>
            </Stack>


            <Stack direction={'row'} spacing={1}>
                <Stack>
                    {
                        personnel?.ficheVoeuxes?.filter((f) => {
                            return true
                        })?.[0] && <FicheDeVoeuxStack
                            lang={"ar"}
                            fiche={
                                personnel?.ficheVoeuxes?.filter((f) => {
                                    return true
                                })?.[0]
                            }
                        />
                    }
                </Stack>
                <Stack>
                    {
                        personnel?.ficheVoeuxes?.filter((f) => {
                            return true
                        })?.[0] && <FicheDeVoeuxStack
                            lang={'fr'}
                            fiche={
                                personnel?.ficheVoeuxes?.filter((f) => {
                                    return true
                                })?.[0]
                            }
                        />
                    }
                </Stack>
            </Stack>

            <List
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FormationCivileChip
                                size={25}
                                codeDiplomeCivile={personnel?.code_dip_civ}
                            />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography>{personnel?.dip_civ}</Typography>}>
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FormationMilitaireChip
                                width={40}
                                height={40}
                                codeDiplomeMilitaire={personnel?.code_dip_mil}
                                libDiplomeAr={personnel?.dip_mil}
                            ></FormationMilitaireChip>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Typography>{personnel?.dip_mil}</Typography>}
                    ></ListItemText>
                </ListItem>
                {
                    personnel?.formation == 'نعم' && <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FormationChip visible={true}>

                                </FormationChip>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Typography>
                                {
                                    personnel?.obs
                                }
                            </Typography>}
                        ></ListItemText>
                    </ListItem>
                }
            </List>
        </Stack>
    )
}
