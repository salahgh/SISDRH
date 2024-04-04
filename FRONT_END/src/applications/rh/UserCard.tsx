import {Card, CardContent, Stack, Typography} from "@mui/material";
import GradeAvatar from "./GradeAvatar";
import {ArmeAvatar} from "./ArmeAvatar";
import AvatarPhoto from "../common/UserAdministration/AvatarPhoto.tsx";
import { Matricule } from "../common/components/Matricule.tsx";


export const UserCard = ({
                             matricule,
                             noma,
                             pnoma,
                             grade,
                             arme,
                             size
                         }: {
    matricule: string,
    noma: string,
    pnoma: string,
    grade: string,
    arme: string,
    size
}) => {

    return (
        <Card sx={{
            padding: 0,
            '& .MuiCardContent-root:last-child': {
                padding: '4px'
            }
        }}>
            <CardContent >
                <Stack alignItems={'center'} width={'100%'} spacing={0}>
                    <AvatarPhoto
                        matricule={matricule}
                        imageSize={2500}
                        size={size}
                    />
                    <Matricule
                        typographyStyle={{fontSize: 12, fontWeight: 'bold'}}
                        matricule={matricule}
                    />
                    <Typography sx={{fontSize: 12, fontWeight: 'bold'}}> {noma + " " + pnoma} </Typography>
                    <Stack
                        direction={'row'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        spacing={1}
                    >
                        <GradeAvatar
                            gradeId={grade}
                            width={50}
                            armeId={arme}
                        />
                        <ArmeAvatar armeId={arme}
                            width={30}></ArmeAvatar>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}
