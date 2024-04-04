import * as React from 'react';
import {TabContext, TabPanel} from "@mui/lab";
import {Stack} from "@mui/material";
import OcrResultUserGrants from "../../UserDirectGrantsPerFile/OcrResultUserGrants";
import UserOcrResultsGrants from "../../UserDirectGrantPerUser/UserOcrResultsGrants";
import UserRolesAndPrivileges from "../../UserRoles/UsersDataGrid";
import RolesAssociatedPrivilegesList from "../../roleComposition/RolesAsociatedPriviligesList";
import DemandInscriptionManagement from "../../DemandeInscriptionManagement/demandeInscriptionManageemnt";
import {Tabs} from "./Tabs";


export default function SettingTabs2() {

    const [value, setValue] = React.useState('3');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Stack flex={1}>
            <TabContext value={value}>

                <Tabs value={value} onChange={handleChange}/>

                <TabPanel
                    sx={{padding: 1}}
                    value="1"
                >
                    <OcrResultUserGrants/>
                </TabPanel>

                <TabPanel
                    sx={{padding: 1}}
                    value="2"
                >
                    <UserOcrResultsGrants/>
                </TabPanel>

                <TabPanel
                    sx={{height: 'calc(100vh - 195px)', padding: 1}}
                    value="3"
                >
                    <UserRolesAndPrivileges/>
                </TabPanel>

                <TabPanel
                    sx={{height: 'calc(100vh - 195px)', padding: 1}}
                    value="4"
                >
                    <RolesAssociatedPrivilegesList/>
                </TabPanel>

                <TabPanel
                    sx={{height: 'calc(100vh - 195px)', padding: 1}}
                    value="5"
                >
                    {/*<RolesPrivileges/>*/}
                    <DemandInscriptionManagement/>
                </TabPanel>
            </TabContext>
        </Stack>
    );
}
