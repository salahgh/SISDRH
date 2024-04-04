import {Autocomplete, Box, TextField} from "@mui/material";
import {Error} from "@mui/icons-material";


interface CountryType {
   code: string;
   label: string;
   phone: string;
   suggested?: boolean;
}

const countries: readonly CountryType[] = [
   {code: 'AD', label: 'Andorra', phone: '376'},
   {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
   },
   {code: 'AF', label: 'Afghanistan', phone: '93'},
   {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
   },
]

const MyAutoComplete = () => {

   return (
      <>
         <Autocomplete
            sx={{width: 300}}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
               <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                  <Error/>
                  {option.label} ({option.code}) +{option.phone}
               </Box>
            )}
            renderInput={(params) => (
               <TextField
                  {...params}
                  label="Choose a country"
                  inputProps={{
                     ...params.inputProps,
                     autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
               />
            )}/>
      </>
   )
}

export default MyAutoComplete