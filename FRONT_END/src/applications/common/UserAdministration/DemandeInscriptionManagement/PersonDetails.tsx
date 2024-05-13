import {
    Box,
    Card, CardActionArea,
    CardContent,
    CardMedia,
    Skeleton,
    Typography
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useQuery} from "@apollo/client";
import {GetPhotoByMatriculeAndSizeDocument} from "../../../../_generated_gql_/graphql";
import {TOOLS} from "../../../../redux/RtkQueryApis/constants";

const PersonDetails = ({
                           person,
                           selectedPseronnel,
                           setSelectedPersonnel,
                           width,
                       }:
                           {
                               person: any,
                               width?: number,
                               selectedPseronnel? : any,
                               setSelectedPersonnel? : any
                           }) => {

    const {data, loading, error}
        = useQuery(GetPhotoByMatriculeAndSizeDocument, {variables: {matricule: person?.matricule, size: 500}})

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
                // person && error && <NetWorkErrorComponent error={error} size={140}/>
                person && error && <div>{JSON.stringify(error)}</div>
            }
            {
                !person && <div>select a person</div>
            }
            {
                person && !error &&
                <>
                    <CardActionArea
                        onClick={() => setSelectedPersonnel(person)}
                        sx={{
                            bgcolor : selectedPseronnel?.matricule == person?.matricule ? 'rgba(141,141,141,0.36)' : null
                        }}
                    >
                        {
                            !loading ?
                                <CardMedia
                                    component="img"
                                    height={width_ * 1.2}
                                    width={width_}
                                    image={TOOLS.getSrcFromBase64String(data?.getPhotoByMatriculeAndSize?.data)}
                                    alt={person?.matricule}
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
                                {TOOLS.formatMatricule(person?.matricule)}
                            </Typography>
                            <Typography variant="h6">

                            </Typography>
                        </CardContent>

                    </CardActionArea>
                </>
            }
        </Card>
    )
}
export default PersonDetails