import { IconButton, Menu, Stack } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleDarkMode } from "../../../redux/features/darkModeSlice";
import { useState } from "react";
import { AvailableThemesGrid } from "./AvailableThemesGrid.tsx";
import * as React from "react";

export const DarkModeButton = () => {
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const dispatch = useAppDispatch();

  const [themeSelectorOpen, setThemeSelectorOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleButtonClick = (e) => {
    setAnchorEl(e.currentTarget);
    dispatch(toggleDarkMode());
    setThemeSelectorOpen(true);
  };

  return (
    <Stack
      width={50}
      height={50}
      borderRadius={25}
      padding={1}
      alignItems={"cetner"}
      justifyContent={"center"}
      bgcolor={darkMode ? "#5676a5" : "#f5d9b0"}
    >
      <Menu
        anchorEl={anchorEl}
        open={themeSelectorOpen}
        onClose={(e, r) => setThemeSelectorOpen(false)}
      >
        <AvailableThemesGrid setOpen={setThemeSelectorOpen} />
      </Menu>
      <IconButton onClick={handleButtonClick}>
        {darkMode ? (
          <DarkMode width={35} height={35}></DarkMode>
        ) : (
          <LightMode width={35} height={35}></LightMode>
        )}
      </IconButton>
    </Stack>
  );
};
