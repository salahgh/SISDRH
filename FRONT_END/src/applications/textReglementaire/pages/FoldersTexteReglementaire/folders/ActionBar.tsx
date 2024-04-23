import { Button, Stack } from "@mui/material";
import * as React from "react";

export const ActionBar = ({ PRIVILIGES, setConfidentialiteOpen }) => {
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
      {PRIVILIGES.UpdateConfidentialite && (
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
