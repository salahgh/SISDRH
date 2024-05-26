import ASSETS from "../../../../../../resources/ASSETS.ts";
import { RoleListItem } from "../../../roles/RoleListItem.tsx";
import ListOFPrevileges from "../../ListOFPrevileges.tsx";
import { Stack } from "@mui/material";
import { useQuery } from "@apollo/client";
import { UserDocument } from "../../../../../../_generated_gql_/graphql.ts";
import { useSelector } from "react-redux";
import { selectSelectedUser } from "../../../../../../redux/features/userAdministration/userAdministrationSlice.ts";

export const SelectedRolePrivileges = ({ selectedRoleId }) => {
  const matricule = useSelector(selectSelectedUser);

  const {
    data: user,
    // loading: userLoading,
    // error: userError,
    // refetch: refetchUser,
  } = useQuery(UserDocument, {
    variables: {
      matricule: matricule,
    },
  });

  return (
    <Stack flex={1}>
      {user?.user?.privileges?.length === 0 ? (
        <div>
          <img
            src={ASSETS.emptyInbox}
            alt={"empty"}
            style={{ width: "70px" }}
          />
        </div>
      ) : (
        <>
          {selectedRoleId && (
            <div>
              <RoleListItem
                role={
                  user?.user?.roles?.filter(
                    (role) => role?.id === selectedRoleId,
                  )[0]
                }
                displayId={true}
              />
              <ListOFPrevileges
                privileges={
                  user?.user?.roles?.filter(
                    (role) => role?.id === selectedRoleId,
                  )[0]?.privileges
                }
              />
            </div>
          )}
        </>
      )}
    </Stack>
  );
};
