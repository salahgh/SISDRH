import { ButtonBase, darken, Paper, Stack, Typography } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Dispatch, SetStateAction, useState } from "react";
import { useAppDispatch } from "../redux/hooks.ts";
import { setSelectedTheme } from "../redux/features/darkModeSlice.ts";

type ThemeType = "dark" | "light";

export enum ThemeNames {
  theme1,
  muiLight,
  muiDark,
  dark_2,
  uae,
}

type Theme_ = {
  name: ThemeNames;
  type: ThemeType;
  bgColor: string;
  textColor: string;
};

export const AvailableThemesGrid = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const availbleThemes: Theme_[] = [
    {
      name: ThemeNames.theme1,
      type: "dark",
      bgColor: "#2c3042",
      textColor: "#e5e2ef",
    },
    {
      name: ThemeNames.muiLight,
      type: "light",
      bgColor: "#f6f5f5",
      textColor: "#070505",
    },
    {
      name: ThemeNames.muiDark,
      type: "dark",
      bgColor: "#424242",
      textColor: "#f8f7f7",
    },
    {
      name: ThemeNames.dark_2,
      type: "dark",
      bgColor: "#2c3333",
      textColor: "#395b64",
    },
    {
      name: ThemeNames.uae,
      type: "dark",
      bgColor: "#95723d",
      textColor: "#b29d6f",
    },
  ];

  const dispatch = useAppDispatch();

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <Stack spacing={1} padding={1} direction={"row"}>
      {availbleThemes.map((item) => (
        <Paper
          sx={{
            width: 200,
            height: 200,
            borderRadius: 5,
            color: item?.textColor,
            bgcolor:
              hoveredItem == item?.name.toString()
                ? darken(item?.bgColor, 0.3)
                : item?.bgColor,
          }}
        >
          <ButtonBase
            sx={{
              width: "100%",
              height: "100%",
            }}
            onClick={() => {
              dispatch(setSelectedTheme(item?.name));
              setOpen(false);
            }}
            onMouseEnter={() => setHoveredItem(item.name.toString())}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={2}
            >
              <Typography> {item?.name} </Typography>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={100}
                height={100}
                borderRadius={25}
                bgcolor={item?.type == "dark" ? "#325f8a" : "#a6974e"}
              >
                {item?.type === "dark" ? (
                  <DarkMode sx={{ width: 70, height: 70 }}></DarkMode>
                ) : (
                  <LightMode sx={{ width: 70, height: 70 }}></LightMode>
                )}
              </Stack>
            </Stack>
          </ButtonBase>
        </Paper>
      ))}
    </Stack>
  );
};
