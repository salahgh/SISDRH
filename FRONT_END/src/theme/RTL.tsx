import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { createTheme, ThemeProvider } from "@mui/material";
import { darkTheme_3, vuexyDarkTheme } from "./vuexyDarkTheme.ts";
import { ThemeNames } from "./AvailableThemesGrid.tsx";
import { ReactNode, useEffect, useState } from "react";
import { Theme } from "@mui/system";
import { useAppSelector } from "../redux/hooks.ts";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const vuixyTheme = createTheme({
  direction: "rtl",
  palette: vuexyDarkTheme.palette,
});

const muiDarkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#27262d",
    },
  },
});

const _darkTheme_3 = createTheme({
  direction: "rtl",
  palette: darkTheme_3.palette,
});

const muiLightTheme = createTheme({
  direction: "rtl",
  palette: {
    background: {
      default: "#ffffff",
      paper: "#ecf1f0",
    },
    action: {
      selected: "#9d9d9d",
    },
  },
});

const uaeGoldTheme = createTheme({
  direction: "rtl",
  palette: {
    background: {
      default: "#967024",
      paper: "#efdaae",
    },
    primary: {
      main: "#423a28",
    },
    success: {
      main: "#1d5721",
    },
    warning: {
      main: "#e16600",
    },
    action: {
      selected: "#9a7740",
    },
    divider: "rgb(201,176,121)",
  },
});

function RTL({ children }: { children: ReactNode }) {
  const selectedTheme: ThemeNames = useAppSelector(
    (s) => s.darkMode.selectedTheme,
  );

  const [theme, setTheme] = useState<Theme>(muiLightTheme);

  useEffect(() => {
    switch (selectedTheme) {
      case ThemeNames.theme1: {
        setTheme(vuixyTheme);
        break;
      }
      case ThemeNames.muiDark: {
        setTheme(muiDarkTheme);
        break;
      }
      case ThemeNames.dark_2: {
        setTheme(_darkTheme_3);
        break;
      }
      case ThemeNames.uae: {
        setTheme(uaeGoldTheme);
        break;
      }
      case ThemeNames.muiLight:
        setTheme(muiLightTheme);
    }

    return () => {};
  }, [selectedTheme]);

  return (
    <ThemeProvider
      theme={
        theme
          ? theme
          : createTheme({
              direction: "rtl",
            })
      }
    >
      <CacheProvider value={cacheRtl}>{children}</CacheProvider>
    </ThemeProvider>
  );
}

export default RTL;
