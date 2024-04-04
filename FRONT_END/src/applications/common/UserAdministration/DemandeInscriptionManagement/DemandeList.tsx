import { useEffect, useState } from "react";
import { Button, Grid, Paper, Stack } from "@mui/material";
import useSnackBarNotifications from "../../notifications/useSnackBarNotifications";
import { useMutation, useQuery } from "@apollo/client";
import {
  FindAllDemandeInscriptionRemainingDocument,
  ValidateUserDemandeDocument,
} from "../../../../_generated_gql_/graphql";
import PersonDetails from "./PersonDetails";

const DemandeList = () => {
  const { data: allDemandes } = useQuery(
    FindAllDemandeInscriptionRemainingDocument,
  );

  const [selectedPseronnel, setSelectedPersonnel] = useState<any>();
  const [authorizeUser, { loading: validatingUserDemande }] = useMutation(
    ValidateUserDemandeDocument,
    {
      refetchQueries: [{ query: FindAllDemandeInscriptionRemainingDocument }],
    },
  );

  const { handleShowErrorSnackBar, handleShowInfoSnackBar } =
    useSnackBarNotifications();

  useEffect(() => {
    if (allDemandes?.findAllDemandeInscriptionRemaining?.length !== 0) {
      if (!selectedPseronnel) {
        setSelectedPersonnel(
          allDemandes?.findAllDemandeInscriptionRemaining?.at(0)?.personnel,
        );
      } else {
        const exist = allDemandes?.findAllDemandeInscriptionRemaining?.some(
          (item) => item?.personnel?.matricule === selectedPseronnel?.matricule,
        );
        if (!exist)
          setSelectedPersonnel(
            allDemandes?.findAllDemandeInscriptionRemaining?.at(0)?.personnel,
          );
      }
    } else {
      setSelectedPersonnel(undefined);
    }
  }, [allDemandes]);

  function handleValidateUserDemande(selectedUserId: string | undefined) {
    if (selectedUserId) {
      authorizeUser({ variables: { matricule: selectedUserId } })
        .then((resulet) => {
          handleShowInfoSnackBar("validé avec success");
        })
        .catch((error) => {
          handleShowErrorSnackBar(
            {
              errorResponse: error.data,
              status: error.status.toString(),
            },
            { variant: "error" },
          );
        });
    }
  }

  return (
    <>
      <Stack
        sx={{
          height: "100vh - 0px",
        }}
        direction={"row"}
        spacing={1}
        padding={1}
      >
        {
          <Paper
            sx={{
              overflow: "auto",
              flex: 2,
            }}
          >
            <Stack flex={3}>
              <Grid spacing={2} padding={1} container>
                {allDemandes?.findAllDemandeInscriptionRemaining?.map(
                  (demandeUser) => {
                    // @ts-ignore
                    return (
                      <Grid item>
                        <PersonDetails
                          selectedPseronnel={selectedPseronnel}
                          setSelectedPersonnel={setSelectedPersonnel}
                          width={170}
                          person={demandeUser?.personnel}
                        />
                      </Grid>
                    );
                  },
                )}
              </Grid>
            </Stack>
          </Paper>
        }
        {selectedPseronnel && (
          <Paper
            sx={{
              flex: 1,
            }}
          >
            <Stack
              height={"100%"}
              spacing={1}
              padding={1}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <PersonDetails person={selectedPseronnel} />
              <Button
                onClick={() =>
                  handleValidateUserDemande(selectedPseronnel?.matricule)
                }
                variant={"contained"}
                color={"success"}
              >
                valider
              </Button>
            </Stack>
          </Paper>
        )}
      </Stack>
    </>
  );
};

export default DemandeList;
