import Grid2 from "@mui/material/Unstable_Grid2";
import {
  ButtonBase,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import GradeAvatar from "../rh/GradeAvatar";
import * as React from "react";
import { useQuery } from "@apollo/client";
import { FindDistinctGradeDocument } from "../../_generated_gql_/graphql";
import ExportToPdfPav from "./ExportToPdfPav";

export const PavFilter = ({ values, handleValueChanged, sort, setSort }) => {
  console.log(sort);

  const {
    data: gradeCount,
    loading: loadingCountGrad,
    error: gradeCountError,
  } = useQuery(FindDistinctGradeDocument);

  return (
    <Stack flexDirection={"row"} alignItems={"center"}>
      <Grid2
        container={true}
        sx={{
          borderRadius: 3,
        }}
        padding={1}
        spacing={1}
      >
        {gradeCount?.findDistinctGrade?.map((item) => {
          return (
            <Grid2 key={item?.g}>
              <ButtonBase onClick={() => handleValueChanged(item?.g, "grades")}>
                <Stack
                  sx={{
                    width: 110,
                    height: 60,
                    borderRadius: 1,
                    bgcolor: (theme: Theme) =>
                      values?.includes(item?.g)
                        ? theme.palette.action.selected
                        : null,
                  }}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <GradeAvatar gradeId={item?.g} width={110}></GradeAvatar>
                </Stack>
              </ButtonBase>
            </Grid2>
          );
        })}
      </Grid2>
      <Stack flex={1}></Stack>

      <ToggleButtonGroup
        id={"sort"}
        value={sort}
        onChange={(event, newValue) => {
          setSort(newValue);
        }}
        exclusive={true}
      >
        <ToggleButton value={1} style={{ width: "fit-content" }}>
          <Typography> ترتيب خاص </Typography>
        </ToggleButton>
        <ToggleButton value={2} style={{ width: "fit-content" }}>
          <Typography> النقطة الاجمالية </Typography>
        </ToggleButton>
        <ToggleButton value={3} style={{ width: "fit-content" }}>
          <Typography> الأقدمية </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};
