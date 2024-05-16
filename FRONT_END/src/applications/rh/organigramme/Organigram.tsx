import { useQuery } from "@apollo/client";
import {
  FindRhTedStructureInterneByIdDocument,
  FindRStructureSnByIdQuery,
} from "../../../_generated_gql_/graphql.ts";
import { TreeView } from "@mui/x-tree-view";
import { SyntheticEvent, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { RenderItem } from "./RenderItem.tsx";
import { CreateEntityDialog } from "../../common/UserAdministration/roles/CreateEntityDialog.tsx";
import { CreateStructrueInterneForm } from "./CreateStructrueInterneForm.tsx";

export const Organigram = () => {
  const { data } = useQuery(FindRhTedStructureInterneByIdDocument, {
    variables: {
      id: "1",
    },
  });

  const [expanded, setExpanded] = useState<
    FindRStructureSnByIdQuery["findRStructureSnById"][]
  >([]);
  const [selected, setSelected] = useState<
    FindRStructureSnByIdQuery["findRStructureSnById"][]
  >([]);

  const [allNodes, setAllNodes] = useState<
    FindRStructureSnByIdQuery["findRStructureSnById"][]
  >([]);

  const handleToggle = (event: SyntheticEvent, nodeIds: string[]) => {
    setExpanded(allNodes.filter((node) => nodeIds.includes(node?.id)));
  };

  const handleSelect = (event: SyntheticEvent, nodeIds: string[]) => {
    setSelected(allNodes.filter((node) => nodeIds.includes(node?.id)));
  };

  // useEffect(() => {
  //   if (data) {
  //     // setAllNodes((old) => getItemIds(data?.findRhTedStructureInterneById));
  //     setExpanded(
  //       allNodes.filter((node) => node?.id?.substring(1, 4) == "000"),
  //     );
  //   }
  // }, [data]);

  // function getItemIds(findRhTedStructureInterne) {
  //   const result = [];
  //   result.push(findRhTedStructureInterne);
  //
  //   if (findRStructureSnById?.fils?.length > 0) {
  //     findRStructureSnById?.fils?.forEach((child) => {
  //       const childResultArray: FindRStructureSnByIdQuery["findRStructureSnById"][] =
  //         getItemIds(child);
  //       result.push(...childResultArray);
  //     });
  //   }
  //   return result;
  // }

  const [open, setOpen] = useState(false);
  const [selectedPerer, setSelectedPerer] = useState<string | null>(null);

  return (
    <div>
      <CreateEntityDialog
        open={open}
        setOpen={setOpen}
        title={"create new structure"}
        content={<CreateStructrueInterneForm pere={selectedPerer} />}
        fullWidth={false}
        maxWidth={"md"}
      ></CreateEntityDialog>
      {data && (
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          // expanded={["1", "2", "3"]}
          // selected={selected.map((node) => node?.id)}
          // onNodeToggle={handleToggle}
          // onNodeSelect={handleSelect}
        >
          <RenderItem
            findRhTedStructureInterne={data?.findRhTedStructureInterneById}
            setOpen={setOpen}
            setSelectedPerer={setSelectedPerer}
          ></RenderItem>
        </TreeView>
      )}
    </div>
  );
};
