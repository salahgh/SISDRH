import { FindRhTedStructureInterneByIdQuery } from "../../../_generated_gql_/graphql.ts";
import { useState } from "react";
import { TreeItem } from "@mui/x-tree-view";
import { Button, Stack, Typography } from "@mui/material";
import { PlusOne } from "@mui/icons-material";

function getItemColor(
  item: FindRhTedStructureInterneByIdQuery["findRhTedStructureInterneById"],
) {
  switch (item?.typeStructureInterne?.id) {
    case "1":
      return "#cb1e1e";
    case "2":
      return "#2844ff";
    case "6":
      return "#1a7316";
    case "5":
      return "#f84b4b";
    case "4":
      return "#588c82";
    case "3":
      return "#c97070";
  }
}

function getItemSize(
  item: FindRhTedStructureInterneByIdQuery["findRhTedStructureInterneById"],
): number {
  switch (item?.typeStructureInterne?.id) {
    case "1":
      return 16;
    case "2":
      return 17;
    case "6":
      return 17;
    case "5":
      return 18;
    case "4":
      return 22;
    case "3":
      return 19;
  }
}
function isBold(
  item: FindRhTedStructureInterneByIdQuery["findRhTedStructureInterneById"],
): boolean {
  switch (item?.typeStructureInterne?.id) {
    case "1":
      return true;
    case "2":
      return true;
    case "6":
      return true;
    case "5":
      return true;
    case "4":
      return true;
    case "3":
      return true;
  }
}

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
          <Typography
            fontSize={() => getItemSize(findRhTedStructureInterne)}
            color={() => getItemColor(findRhTedStructureInterne)}
            fontWeight={() => isBold(findRhTedStructureInterne) && "bold"}
            sx={{ marginLeft: 20 }}
          >
            {findRhTedStructureInterne?.libStructureFr}
          </Typography>
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
          <Typography
            fontSize={() => getItemSize(findRhTedStructureInterne)}
            color={() => getItemColor(findRhTedStructureInterne)}
            fontWeight={() => isBold(findRhTedStructureInterne) && "bold"}
          >
            {findRhTedStructureInterne?.libStructureFr}
          </Typography>
          {/*{hovered && (*/}
          {/*  // <Button*/}
          {/*  //   onClick={() => handleCreateNew(findRhTedStructureInterne?.id)}*/}
          {/*  //   startIcon={<PlusOne></PlusOne>}*/}
          {/*  // ></Button>*/}
          {/*)}*/}
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
