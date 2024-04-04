import {createTheme} from "@mui/material";

export const vuexyDarkTheme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: '#685fd6',
      },
      secondary: {
         main: '#00cee7',
      },
      error : {
         main : '#d05155'
      },
      warning : {
        main : '#fd9e43'
      },
      background: {
         default: '#1d212d',
         paper: '#25283a',
      },
      action : {
         selected : '#42465d'
      }
   },
})

export const darkTheme_3 = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: '#e6f4f0',
      },
      secondary: {
         main: '#617677',
      },
      error : {
         main : '#d05155'
      },
      warning : {
         main : '#fd9e43'
      },
      background: {
         default: '#2c3333',
         paper: '#152225',
      },
      action : {
         selected : '#324448' ,
      }
   },
})
