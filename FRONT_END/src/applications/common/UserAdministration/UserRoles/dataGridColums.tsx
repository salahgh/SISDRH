import {GridColDef} from "@mui/x-data-grid";
import * as React from "react";
import {AllUsersPagedQuery} from "../../../../_generated_gql_/graphql";
import {ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import AvatarPhoto from "../AvatarPhoto";
import {rowHeight} from "../../../pam/mainDataGrid/StripedDataGrid";
import {Matricule} from "../../components/Matricule";

export const DataGridColums: GridColDef[] = [
    {
        field: 'nom',
        headerName: 'utilisteur',
        width: 280,
        renderCell: ({row}: { row: AllUsersPagedQuery['allUsersPaged']['content'][0] }) => {
            return (
                <ListItem>
                    <ListItemAvatar
                        sx={{ marginRight : 1 }}
                    >
                        <AvatarPhoto
                            size={rowHeight * 0.9}
                            matricule={row?.id}
                            imageSize={2200}
                            avatarVariant={'rounded'}
                            borderRadius={2}
                        >

                        </AvatarPhoto>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography
                                variant={'h6'}
                                fontWeight={'bold'}
                            >
                                {row.personnel?.noma + ' ' + row.personnel?.pnoma}
                            </Typography>
                        }
                        secondary={<Matricule matricule={row?.personnel?.matricule}></Matricule>}
                    />
                </ListItem>
            )
        }
    }
]
