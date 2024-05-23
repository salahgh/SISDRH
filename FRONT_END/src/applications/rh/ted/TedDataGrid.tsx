import { CreateEntityDialog } from "../../common/UserAdministration/roles/CreateEntityDialog.tsx";
import { CreateTedForm } from "./CreateTedForm.tsx";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
  AllTedsPagedDocument,
  PaginationInput,
} from "../../../_generated_gql_/graphql.ts";
import { useQuery } from "@apollo/client";

export const TedDataGrid = () => {
  const [page, setPage] = useState<PaginationInput>({
    pageNumber: 0,
    pageSize: 100,
  });

  const { data: teds } = useQuery(AllTedsPagedDocument, {
    variables: {
      page: page,
    },
  });

  const [open, setOpen] = useState(false);

  function handleAddTedButtonClick() {
    setOpen(true);
  }

  return (
    <>
      <CreateEntityDialog
        open={open}
        setOpen={setOpen}
        title={"ajouter TED"}
        content={<CreateTedForm page={page} />}
        fullWidth={false}
        maxWidth={"xl"}
      ></CreateEntityDialog>
      <Button color={"primary"} onClick={handleAddTedButtonClick}>
        {" "}
        ajouter
      </Button>
      {teds?.allTedsPaged?.content?.map((item, index) => {
        return (
          <Stack direction={"row"} spacing={1}>
            <Stack flex={1}>
              <Typography>{item?.qualification?.libQualificatinFr}</Typography>
            </Stack>
            <Stack flex={1}>
              <Typography>{item?.specialiteTed?.libSpecialiteFr}</Typography>
            </Stack>
            <Stack flex={1}>
              <Typography>{item?.arme?.libArmeFr}</Typography>
            </Stack>
            <Stack flex={1}>
              <Typography color={"error"}>{item?.nombre}</Typography>
            </Stack>
            <Stack flex={1}>
              <Typography color={"error"}>
                {item?.catGrade?.libCatAr}
              </Typography>
            </Stack>
            <Stack flex={1}>
              <Typography fontWeight={"bold"}>
                {item?.fonction?.structureInterne?.libStructureFr}
              </Typography>
            </Stack>
            <Stack flex={1}>
              <Typography>{item?.fonction?.libFonctionFr}</Typography>
            </Stack>
          </Stack>
        );
      })}
    </>
  );
};
