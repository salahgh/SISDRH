import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function StructureAccordionFilter() {
   const [expanded, setExpanded] = React.useState<string | false>(false);

   const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
         setExpanded(isExpanded ? panel : false);
      };


   return (
      <div style={{ width : '400px' }}>

         <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')
         }>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1bh-content"
               id="panel1bh-header"
            >
               <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  General settings
               </Typography>
            </AccordionSummary>
            <AccordionDetails>

               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1bh-content"
                     id="panel1bh-header"
                  >
                     <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        General settings
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div> dfdsfds  </div>
                  </AccordionDetails>
               </Accordion>

            </AccordionDetails>
         </Accordion>

         <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel2bh-content"
               id="panel2bh-header"
            >
               <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Donec placerat
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel3bh-content"
               id="panel3bh-header"
            >
               <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  Advanced settings
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Nunc vitae
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel4bh-content"
               id="panel4bh-header"
            >
               <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Nunc vitae
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}
