import {alpha, CSSObject, styled, Theme} from "@mui/material/styles";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import InputBase from "@mui/material/InputBase";

export const drawerWidth = 350;

export const openedMixin = (theme: Theme): CSSObject => ({
   width: drawerWidth,
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: 'hidden',
   width: `calc(${theme.spacing(10)} + 1px)`,
   [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(10)} + 1px)`,
   },
});

export const hiddenMixin = (theme: Theme): CSSObject => ({
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: 'hidden',
   width: `calc(${theme.spacing(0)} + 1px)`,
   [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(0)} + 1px)`,
   },
});

export const DrawerHeader = styled('div')(({theme}) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-end',
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
}));

export interface AppBarProps extends MuiAppBarProps {
   open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   }),
}));

export const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
   ({theme, open, hidden}) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && !hidden && {
         ...openedMixin(theme),
         '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && !hidden && {
         ...closedMixin(theme),
         '& .MuiDrawer-paper': closedMixin(theme),
      }),
      ...(hidden && {
         ...hiddenMixin(theme),
         '& .MuiDrawer-paper': hiddenMixin(theme),
      })
   }),
);


export const Search = styled('div')(({theme}) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
   },
}));

export const SearchIconWrapper = styled('div')(({theme}) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({theme}) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
         width: '20ch',
      },
   },
}));
