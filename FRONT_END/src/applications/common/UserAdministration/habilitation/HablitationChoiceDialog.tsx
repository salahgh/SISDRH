import {
  Card,
  CardActionArea,
  Dialog,
  DialogContent,
  Stack,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import {
  GetHablitationsDocument,
  SetHabilitationDocument,
  UserDocument,
} from "../../../../_generated_gql_/graphql.ts";
import useSnackBarNotifications from "../../notifications/useSnackBarNotifications.tsx";

const HablitationChoiceDialog = ({ open, setOpen, userName }) => {
  const {
    data: habilitations,
    loading: habilitationsLoading,
    error: habilitationsError,
  } = useQuery(GetHablitationsDocument);

  const [setHabilitation, { data, loading, error }] = useMutation(
    SetHabilitationDocument,
    {
      refetchQueries: [
        { query: UserDocument, variables: { matricule: userName } },
      ],
    },
  );

  const { handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar } =
    useSnackBarNotifications();

  const handleClick = (
    item: {
      __typename?: "Habilitation";
      libHabilitationAr?: string | null;
      libHabilitationFr?: string | null;
      id?: string | null;
    } | null,
  ) => {
    setHabilitation({
      variables: {
        userName: userName,
        habilitaitonId: item?.id,
      },
    })
      .then((result) => {
        handleShowInfoSnackBar("changed");
        setOpen(false);
      })
      .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)));
  };

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth={"sm"}
      onClose={(e, r) => setOpen(false)}
    >
      <DialogContent>
        <Stack direction={"row"} spacing={2} padding={2}>
          {habilitations?.habilitations?.map((item, index) => {
            return (
              <Card>
                <CardActionArea
                  sx={{
                    height: 160,
                    width: 160,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => handleClick(item)}
                >
                  <Stack
                    width={"100%"}
                    height={"100%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    {
                      <Typography variant={"h1"}>
                        {item?.libHabilitationFr}
                      </Typography>
                    }
                  </Stack>
                </CardActionArea>
              </Card>
            );
          })}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default HablitationChoiceDialog;
