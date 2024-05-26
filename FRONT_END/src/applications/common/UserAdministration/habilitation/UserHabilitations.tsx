import { IconButton, Stack, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GetLoggedInUserDocument } from "../../../../_generated_gql_/graphql.ts";
import * as React from "react";
import HablitationChoiceDialog from "./HablitationChoiceDialog.tsx";
import { ConfidentialiteChip } from "../../../textReglementaire/pages/FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip.tsx";
import { useState } from "react";
import { Matricule } from "../../components/Matricule.tsx";
import GradeAvatar from "../../../rh/GradeAvatar.tsx";
import { ArmeAvatar } from "../../../rh/ArmeAvatar.tsx";
import Grid2 from "@mui/material/Unstable_Grid2";

export function UserHabilitations({ username }: { username?: string | null }) {
  const { data, loading, error, refetch } = useQuery(GetLoggedInUserDocument, {
    variables: {
      userName: username,
    },
  });

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const personnel = data?.user?.personnel;

  return (
    <Stack
      spacing={1}
      padding={1}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <HablitationChoiceDialog
        open={menuOpened}
        setOpen={setMenuOpened}
        userName={personnel?.matricule}
      ></HablitationChoiceDialog>
      <Matricule
        typographyStyle={{ fontWeight: "bold" }}
        matricule={personnel?.matricule}
      ></Matricule>
      <Typography variant={"h6"} fontWeight={"bold"}>
        {personnel?.noma + " " + personnel?.pnoma}
      </Typography>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <GradeAvatar
          armeId={personnel?.arme?.id}
          gradeId={personnel?.grade?.grade}
          width={90}
        ></GradeAvatar>
        <ArmeAvatar armeId={personnel?.arme?.id} width={35}></ArmeAvatar>
      </Stack>
      <IconButton
        onClick={() => setMenuOpened(true)}
        sx={{ width: 100, height: 100 }}
      >
        <Typography variant={"h1"} fontWeight={"bold"}>
          {data?.user?.habilitation?.libHabilitationFr}
        </Typography>
      </IconButton>

      <Grid2 container={true} spacing={1}>
        {data?.user?.habilitation?.confidentialites?.map((item, index) => {
          return (
            <Grid2>
              <ConfidentialiteChip confidentialite={item} />
            </Grid2>
          );
        })}
      </Grid2>
    </Stack>
  );
}
