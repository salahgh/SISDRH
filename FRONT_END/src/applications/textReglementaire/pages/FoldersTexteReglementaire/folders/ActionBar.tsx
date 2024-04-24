import { Button, Stack } from "@mui/material";
import * as React from "react";
import { useHasAuthorities } from "../../../../../security/useHasAuthoritie.ts";
import { PrivilegesEnum } from "../../../../../_generated_gql_/graphql.ts";

export const ActionBar = ({ setConfidentialiteOpen }) => {
  const UpdateConfidentiality = useHasAuthorities(
    PrivilegesEnum.UpdateConfidentialite,
  );

  return (
    <Stack
      sx={{
        height: 40,
      }}
      justifyContent={"end"}
      direction={"row"}
      className={"pl-1"}
    >
      {/*<Button variant={'outlined'}> أضف إلى المجلد </Button>*/}
      {UpdateConfidentiality && (
        <Button
          onClick={() => setConfidentialiteOpen(true)}
          variant={"outlined"}
          size={"small"}
        >
          {" "}
          حجز درجة السرية{" "}
        </Button>
      )}
    </Stack>
  );
};
