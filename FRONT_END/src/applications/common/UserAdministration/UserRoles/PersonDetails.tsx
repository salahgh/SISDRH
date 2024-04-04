import {
    Box,
    Card, CardActionArea,
    CardContent,
    CardMedia,
    Skeleton,
    Typography
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {NetWorkErrorComponent} from "../../../../components/errors/NetWorkErrorComponent";
import {useQuery} from "@apollo/client";
import {GetPhotoByMatriculeAndSizeDocument} from "../../../../_generated_gql_/graphql";
import {TOOLS} from "../../../../redux/RtkQueryApis/constants";

// @ts-ignore
const PersonDetails = ({
                           matricule,
                           width,
                           handleSelection,
                           selectedUserId
                       }) => {

    const {data: photo , loading , error} = useQuery(GetPhotoByMatriculeAndSizeDocument, {
        variables: {
            matricule: matricule ? matricule : '',
            size: 500
        }
    })

    const theme = useTheme()
    const width_ = width ? width : 300

    // @ts-ignore
    return (
        <Card elevation={5} sx={{
            width: width_,
            transition: theme.transitions.create(['width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            })
        }}>
            {
                matricule && error && <NetWorkErrorComponent error={error} size={140}/>
            }
            {
                !matricule && <div>select a person</div>
            }
            {
                matricule && !error &&
                <>
                    <CardActionArea
                        onClick={() => handleSelection(matricule)}
                    >
                        {
                            !loading ?
                                <CardMedia
                                    component="img"
                                    height={width_ * 1.2}
                                    width={width_}
                                    image={TOOLS.getSrcFromBase64String(photo?.getPhotoByMatriculeAndSize?.data)}
                                    alt={matricule}
                                /> : <Box sx={{height: 1.2 * width_}}>
                                    <Skeleton
                                        variant={'circular'}
                                        sx={{height: 1.2 * width_}}
                                    />
                                </Box>
                        }
                        <CardContent>
                            <Typography variant="h5">
                                {
                                    // @ts-ignore
                                    person.noma + ' ' + person.pnoma
                                }
                            </Typography>
                            <Typography variant="h6">
                                {TOOLS.formatMatricule(matricule)}
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                </>
            }
        </Card>
    )
}
export default PersonDetails