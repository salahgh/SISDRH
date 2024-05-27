import Grid2 from "@mui/material/Unstable_Grid2";
import { ButtonBase, Card, Stack } from "@mui/material";
import { animated } from "react-spring";
import { AddCircle } from "@mui/icons-material";
import { AuthorizedUserCard } from "./AuthorizedUserCard";
import { useAnimation } from "../../../common/animations/useAnimation.ts";

export const AuthorizedUsersGrid = ({
  selectedNote,
  handleAddAuthorizedUser,
  handleDeleteAuthrizedUser,
}) => {
  const props = useAnimation(true);

  let sortedAuthorizedUsers = [];
  if (selectedNote) {
    sortedAuthorizedUsers = Array.from(selectedNote?.authorizedUsers);
    if (sortedAuthorizedUsers) {
      sortedAuthorizedUsers = sortedAuthorizedUsers.sort(
        (a, b) =>
          a?.personnel?.pamOff2024?.trieAnciennete >
          b?.personnel?.pamOff2024?.trieAnciennete,
      );
    }
  }

  const handleDelete = (userId) => {
    handleDeleteAuthrizedUser(selectedNote.id, userId);
  };

  return (
    <Grid2 container={true} spacing={1}>
      <Grid2>
        <ButtonBase onClick={handleAddAuthorizedUser}>
          <Card sx={{ height: 175 }}>
            <Stack height={"100%"} justifyContent={"center"}>
              <animated.div style={props}>
                <AddCircle color={"primary"} sx={{ width: 105, height: 100 }} />
              </animated.div>
            </Stack>
          </Card>
        </ButtonBase>
      </Grid2>
      {sortedAuthorizedUsers?.map((user, index) => {
        return (
          <Grid2>
            <AuthorizedUserCard
              personnel={user?.personnel}
              index={index}
              handleDelete={handleDelete}
            />
          </Grid2>
        );
      })}
    </Grid2>
  );
};
