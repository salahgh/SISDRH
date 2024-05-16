import { FindRhTedStructureInterneByIdQuery } from "../../../_generated_gql_/graphql.ts";
import { useState } from "react";
import { TreeItem } from "@mui/x-tree-view";
import { Button, Stack, Typography } from "@mui/material";
import { PlusOne } from "@mui/icons-material";

export function RenderItem({
  findRhTedStructureInterne,
  setOpen,
  setSelectedPerer,
}: {
  findRhTedStructureInterne: FindRhTedStructureInterneByIdQuery["findRhTedStructureInterneById"];
  setOpen: any;
  setSelectedPerer: any;
}) {
  console.log(findRhTedStructureInterne);

  const [hovered, setHovered] = useState();

  function handleCreateNew(id: string | undefined) {
    console.log("dsfdf");
    setSelectedPerer(id);
    setOpen(true);
  }

  if (findRhTedStructureInterne?.fils?.length == 0)
    return (
      <TreeItem
        key={findRhTedStructureInterne?.id}
        // sx={{
        //   backgroundColor: getStructureBgColor(findRStructureSnById?.typeStructureSn?.id)
        // }}
        nodeId={findRhTedStructureInterne?.id}
        label={
          <Stack
            direction={"row"}
            spacing={1}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Typography>{findRhTedStructureInterne?.libStructureFr}</Typography>
            {hovered && (
              <Button
                onClick={() => handleCreateNew(findRhTedStructureInterne?.id)}
                startIcon={<PlusOne></PlusOne>}
              ></Button>
            )}
          </Stack>
        }
      />
    );

  return (
    <TreeItem
      nodeId={findRhTedStructureInterne?.id}
      label={
        <Stack
          direction={"row"}
          spacing={1}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Typography fontSize={25}>
            {findRhTedStructureInterne?.libStructureFr}
          </Typography>
          {hovered && (
            <Button
              onClick={() => handleCreateNew(findRhTedStructureInterne?.id)}
              startIcon={<PlusOne></PlusOne>}
            ></Button>
          )}
        </Stack>
      }
      // sx={{
      //   bgcolor: getStructureBgColor(findRStructureSnById?.typeStructureSn?.id)
      // }}
      key={findRhTedStructureInterne?.id}
    >
      {findRhTedStructureInterne?.fils?.map((item) => (
        <RenderItem
          setOpen={setOpen}
          setSelectedPerer={setSelectedPerer}
          findRhTedStructureInterne={item}
        />
      ))}
    </TreeItem>
  );
}
