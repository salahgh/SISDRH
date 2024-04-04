import {useGetAuthories} from "../useHasAuthoritie";
import {Box, Tab} from "@mui/material";
import {TabList} from "@mui/lab";
import React from "react";
import {useGetTabsArray} from "./useGetTabsArray";


interface TabsProps {
    onChange: (event: React.SyntheticEvent, newValue: any) => void,
    value: string
}

export const Tabs = (props: TabsProps) => {

    const {onChange, value} = props
    const privileges = useGetAuthories();
    const tabs = useGetTabsArray(value, privileges)

    return (
        <Box
            sx={{
                "borderBottom": 1,
                "borderColor": "divider"
            }}
        >
            <TabList
                aria-label="lab API tabs example"
                onChange={onChange}
            >
                {
                    tabs.map((tab) => {
                        return (
                            tab.privilege && <Tab
                                icon={tab.icon}
                                label={tab.label}
                                sx={tab.sx}
                                value={tab.value}
                            >
                            </Tab>
                        )
                    })
                }
            </TabList>
        </Box>
    )
}
