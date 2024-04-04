import {useGetCpuQuery, useGetdiskQuery, useGetRamQuery, useGetThreadsQuery} from "../../../../redux/RtkQueryApis/PDF/pdf";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import {useQuery} from "@apollo/client";
import {CpuUsageDocument, MemoryUsageDocument, ThreadInfoDocument} from "../../../../_generated_gql_/graphql";


const SystemInfo = () => {

    const { data : cpu , loading : cpuLoading , error : cpuError } = useQuery(CpuUsageDocument)
    const { data : ram  , loading : ramLoading , error : ramError } = useQuery(MemoryUsageDocument)
    const { data : thread , loading : threadLoading , error : threadError } = useQuery(ThreadInfoDocument)

    return (
        <Box sx={{width : 300}}>
            {ram?.memoryUsage && (
                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>Memory usage</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <strong>Initital memory: </strong>{ram?.memoryUsage?.init} bytes<br />
                            <strong>Used memory: </strong>{ram?.memoryUsage?.used} bytes<br />
                            <strong>Committed memory: </strong>{ram?.memoryUsage?.committed} bytes<br />
                            <strong>Max memory: </strong>{ram?.memoryUsage?.max} bytes<br />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )}
            {cpu && (
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>CPU usage</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            {cpu?.cpuUsage?.map((item, index) => (
                               <div key={index}>
                                   <strong>{item}</strong><br />
                               </div>
                            ))}
                        </Typography>
                    </AccordionDetails>

                </Accordion>
            )}
            {
                thread && (
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>Thread info</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {thread?.threadInfo?.map((item, index) => (
                                    <div key={index}>
                                        <strong>{item}</strong><br />
                                    </div>
                                ))}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            }
        </Box>
    );
}

export default SystemInfo


