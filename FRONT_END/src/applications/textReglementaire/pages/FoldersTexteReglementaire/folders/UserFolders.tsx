import {CardActionArea, Stack} from "@mui/material";
import {useEffect, useState} from "react";
import {selectLoggedInUser} from "../../../../../redux/features/auth/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {GetOwnedFoldersDocument} from "../../../../../_generated_gql_/graphql";
import {useQuery} from "@apollo/client";
import {FolderDtoCard, folderHeight} from "./FolderDtoCard";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import {AddCircle} from "@mui/icons-material";
import CreateFolderForm from "./CreateFolderForm";
import {selectSelectedFolder, setSelectedFolder} from "../../../../../redux/features/folderAndFiles/foldersSlice";
import { CreateEntityDialog } from "../../../../common/UserAdministration/roles/CreateEntityDialog.tsx";
import Grid2 from "@mui/material/Unstable_Grid2";

export function UserFolders() {

    const userName: string = useSelector(selectLoggedInUser).matricule
    const [open, setOpen] = useState<boolean>(false)
    const selectedFolder = useSelector(selectSelectedFolder)
    const dispatch = useDispatch()
    // todo implement scheloton loading
    const {
        data,
        error,
    } = useQuery(GetOwnedFoldersDocument,
        {
            variables: {
                username_: userName
            },
        })

    // todo preferences folder par default

    useEffect(
        () => {
            if (data && !selectedFolder) {
                const myFolder = data?.ownedFolders?.filter(
                    (folder) => folder?.id === '-2'
                )
                // dispatch(setSelectedFolder(myFolder?.at(0)))
                dispatch(setSelectedFolder({ id : -2 }))
            }
        }, [data]
    )

    return (
        <>
            <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                <CreateEntityDialog open={open} setOpen={setOpen} title={'create a folder'}
                                    content={<CreateFolderForm setOpen={setOpen}/>}
                />
                <Grid2 padding={1} container spacing={1} width={'100%'}>
                    <Grid2 item key={'-100'}>
                        <Card
                            sx={{
                                backgroundColor: '#a3d29a',
                                height: folderHeight,
                                padding: 0
                            }}
                        >
                            {
                                <CardActionArea
                                    sx={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    onClick={() => {
                                    setOpen(true);
                                }}
                                >
                                    <CardContent
                                        sx={{
                                            width: '100%',
                                            height: '100%' ,
                                            padding : 1
                                        }}
                                    >
                                        <Stack height={'100%'} width={'100%'} alignItems={'center'}
                                               alignContent={'center'}
                                               justifyContent={'center'}>
                                            <AddCircle sx={{color: '#0c6e02', height: 75, width: 75}}/>
                                        </Stack>
                                    </CardContent>
                                </CardActionArea>
                            }
                        </Card>
                    </Grid2>
                    {
                        data?.ownedFolders?.map(item => {
                                return <Grid2 key={item?.id}>
                                    <FolderDtoCard
                                        item={item}
                                    />
                                </Grid2>
                            }
                        )
                    }
                    <Grid2 item key={'tt'}>
                        <FolderDtoCard
                            item={{ description : '' , name : 'الكل' , color : '' , id : '-2'}}
                        />
                    </Grid2>
                </Grid2>
            </Stack>
        </>
    );
}
