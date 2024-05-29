import { Card, Grid, Stack } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import {
  ChangeOcrResultGrantDocument,
  GetHablitationsDocument,
  OcrResultUserGrantKeyInputInput,
  OcrResultUserGrantsDocument,
  OcrResultUserGrantsQuery,
  User,
  UserGrants,
  UsersDocument,
} from "../../../../../_generated_gql_/graphql";
import { AvatarPhotoWithDragSupport } from "./AvatarPhotoWithDragSupport";
import { useDrop } from "react-dnd";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { green, grey, red } from "@mui/material/colors";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";

const UsersChoiceDialog = ({
  open,
  setOpen,
  ocrResultId,
  afterOk_,
  afterAnnuler_,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  ocrResultId: string;
  afterOk_?: () => void;
  afterAnnuler_?: () => void;
}) => {
  const { handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar } =
    useSnackBarNotifications();

  const { data: users } = useQuery(UsersDocument);

  const { data: habilitations } = useQuery(GetHablitationsDocument);

  const { data: ocrResultGrants, refetch: refetchOcrResultGrants } = useQuery(
    OcrResultUserGrantsDocument,
    {
      variables: {
        fileSignatue: ocrResultId,
      },
    },
  );

  const [changeOcrResultGrants] = useMutation(ChangeOcrResultGrantDocument, {});

  const [grantedUsers, setGrantedUsers] = useState<User[]>([]);
  const [revokedUsers, setRevokedUsers] = useState<User[]>([]);

  // todo optimize the refetching

  useEffect(() => {
    refetchOcrResultGrants().then((result) => {
      const grantedUsers_ =
        result?.data?.ocrResultByid?.ocrResultUserGrants?.filter(
          (grant) => grant?.id?.type === "GRANT",
        );
      const revokedUsers_ =
        result?.data?.ocrResultByid?.ocrResultUserGrants?.filter(
          (grant) => grant?.id?.type === "REVOKE",
        );
      if (grantedUsers_) {
        setGrantedUsers((old) => {
          return grantedUsers_?.map((userGrant) => {
            const user: User = users?.getUsers?.filter(
              (user) =>
                user?.personnel?.matricule ===
                userGrant?.user?.personnel?.matricule,
            )[0];
            return user;
          });
        });
      }
      if (revokedUsers_) {
        setRevokedUsers((old) => {
          return revokedUsers_?.map((userRevoke) => {
            const user: User = users?.getUsers?.filter(
              (user) =>
                user?.personnel?.matricule ===
                userRevoke?.user?.personnel?.matricule,
            )[0];
            return user;
          });
        });
      }
    });
  }, [users, ocrResultGrants]);

  const filteredUsers = users?.getUsers?.filter(
    (user) =>
      !grantedUsers?.some(
        (element) =>
          element?.personnel?.matricule === user?.personnel?.matricule,
      ) &&
      !revokedUsers?.some(
        (element) =>
          element?.personnel?.matricule === user?.personnel?.matricule,
      ),
  );

  const getUser = (matricule: string): User => {
    return users?.getUsers?.filter(
      (user) => user?.personnel?.matricule === matricule,
    )[0];
  };

  //todo possible optimisation in the comparaison

  const handleUserGranted = (userGranted: User) => {
    const selectedIndex = grantedUsers.findIndex(
      (item) => item === userGranted,
    );
    if (selectedIndex > -1) {
    } else {
      setGrantedUsers((old) => [...old, userGranted]);
      setRevokedUsers((old) => {
        return old?.filter((item) => item !== userGranted);
      });
    }
  };

  const handleUserRevoked = (userRevoked: User) => {
    const selectedIndex = revokedUsers.findIndex(
      (item) => item === userRevoked,
    );
    if (selectedIndex > -1) {
    } else {
      // Item not selected, add it to the selection
      setRevokedUsers((old) => [...old, userRevoked]);
      setGrantedUsers((old) => old?.filter((item) => item !== userRevoked));
    }
  };

  const handleUserIdle = (userRevoked: { matricule: string }) => {
    setGrantedUsers((old) => old?.filter((item) => item !== userRevoked));
    setRevokedUsers((old) => old?.filter((item) => item !== userRevoked));
  };

  const handleOk = () => {
    const newListtoBeUpdated: OcrResultUserGrantKeyInputInput[] = [
      ...grantedUsers.map((user) => {
        const key: OcrResultUserGrantKeyInputInput = {
          type: UserGrants.Grant,
          userId: user?.personnel?.matricule,
          ocrResultId: ocrResultId,
        };
        return key;
      }),
      ...revokedUsers.map((user) => {
        const key: OcrResultUserGrantKeyInputInput = {
          type: UserGrants.Revoke,
          userId: user?.personnel?.matricule,
          ocrResultId: ocrResultId,
        };
        return key;
      }),
    ];

    changeOcrResultGrants({
      variables: {
        ocrResultUserGrantKeys: newListtoBeUpdated,
        ocrResultId: ocrResultId,
      },
    })
      .then((result) => {
        handleShowInfoSnackBar("succés");
        setOpen(false);
        afterOk_ && afterOk_();
      })
      .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)));
  };

  const handleAbort = () => {
    setOpen(false);
    afterAnnuler_ && afterAnnuler_();
  };

  const [{ isOver, item }, drop] = useDrop({
    accept: "user",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      item: monitor.getItem(),
    }),
    drop: (item, monitor) => {
      // @ts-ignore
      handleUserGranted(getUser(item?.matricule));
    },
  });

  const [{ isOver: isOver2, item: item2 }, drop2] = useDrop({
    accept: "user",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      item: monitor.getItem(),
    }),
    drop: (item, monitor) => {
      handleUserRevoked(getUser(item2.matricule));
    },
  });

  const [{ isOver: isOver3, item: item3 }, drop3] = useDrop({
    accept: "user",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      item: monitor.getItem(),
    }),
    drop: (item, monitor) => {
      handleUserIdle(getUser(item3.matricule));
    },
  });

  const draggedUser: User = getUser(item?.matricule);

  const canSee = (draggedUser: User, libConfidentialiteFr: string) => {
    if (draggedUser) {
      const userHabilitation = habilitations?.habilitations?.filter(
        (item) =>
          item?.libHabilitationFr ===
          draggedUser?.habilitation?.libHabilitationFr,
      )[0];
      return userHabilitation?.confidentialites?.some(
        (item) => item?.libConfidentialiteFr === libConfidentialiteFr,
      );
    } else {
      return null;
    }
  };

  const getLibConfidentialiteFr = (
    ocrResultGrants: OcrResultUserGrantsQuery,
  ) => {
    return ocrResultGrants?.ocrResultByid?.confidentialite
      ?.libConfidentialiteFr;
  };

  return (
    <Stack
      direction={"row"}
      height={"calc(100vh - 300px)"}
      spacing={1}
      padding={1}
      dir={"ltr"}
    >
      <Stack ref={drop3} flex={1} height={"100%"}>
        <Grid container={true} spacing={1}>
          {filteredUsers?.map((user) => {
            return (
              <Grid item={true} key={user?.personnel?.matricule}>
                <Card>
                  <AvatarPhotoWithDragSupport
                    matricule={user?.personnel?.matricule}
                    imageSize={500}
                    size={200}
                    avatarVariant={"square"}
                    variant={"square"}
                    libHabilitationFr={user?.habilitation?.libHabilitationFr}
                    noma={user?.personnel?.noma}
                    pnoma={user?.personnel?.pnoma}
                    canSee={canSee(
                      user,
                      ocrResultGrants?.ocrResultByid?.confidentialite
                        ?.libConfidentialiteFr,
                    )}
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
      <Stack direction={"column"} spacing={1} flex={1} height={"100%"}>
        <Stack
          position={"relative"}
          flex={1}
          padding={2}
          ref={
            !draggedUser
              ? drop
              : !canSee(draggedUser, getLibConfidentialiteFr(ocrResultGrants))
                ? drop
                : null
          }
          sx={{
            bgcolor: canSee(
              draggedUser,
              getLibConfidentialiteFr(ocrResultGrants),
            )
              ? grey["100"]
              : green["100"],
            border: "solid",
            borderWidth: 4,
            borderColor: canSee(
              draggedUser,
              getLibConfidentialiteFr(ocrResultGrants),
            )
              ? grey["500"]
              : green["500"],
            borderRadius: 8,
          }}
        >
          <Visibility
            sx={{
              position: "absolute",
              bottom: 10,
              right: 20,
              opacity: 0.4,
              width: 100,
              height: 100,
              color: canSee(
                draggedUser,
                getLibConfidentialiteFr(ocrResultGrants),
              )
                ? grey["500"]
                : green["500"],
            }}
          />
          {
            <Grid container={true} spacing={1}>
              {grantedUsers?.map((user) => {
                return (
                  <Grid item={true} key={user?.personnel?.matricule}>
                    <Card>
                      <AvatarPhotoWithDragSupport
                        matricule={user?.personnel?.matricule}
                        imageSize={500}
                        size={200}
                        avatarVariant={"square"}
                        variant={"square"}
                        libHabilitationFr={
                          user?.habilitation?.libHabilitationFr
                        }
                        noma={user?.personnel?.noma}
                        pnoma={user?.personnel?.pnoma}
                        canSee={true}
                      />
                    </Card>
                  </Grid>
                );
              })}
              {isOver && (
                <Grid item={true} key={-1}>
                  <Card elevation={0}>
                    <AvatarPhotoWithDragSupport
                      matricule={draggedUser?.personnel?.matricule}
                      imageSize={500}
                      size={200}
                      avatarVariant={"square"}
                      variant={"square"}
                      libHabilitationFr={
                        draggedUser?.habilitation?.libHabilitationFr
                      }
                      noma={draggedUser?.personnel?.noma}
                      pnoma={draggedUser?.personnel?.pnoma}
                      canSee={true}
                    />
                  </Card>
                </Grid>
              )}
            </Grid>
          }
        </Stack>
        <Stack
          position={"relative"}
          flex={1}
          padding={2}
          ref={
            !draggedUser
              ? drop2
              : canSee(draggedUser, getLibConfidentialiteFr(ocrResultGrants))
                ? drop2
                : null
          }
          sx={{
            bgcolor: !draggedUser
              ? red["100"]
              : !canSee(draggedUser, getLibConfidentialiteFr(ocrResultGrants))
                ? grey["100"]
                : red["100"],
            border: "solid",
            borderWidth: 4,
            borderColor: !draggedUser
              ? red["500"]
              : !canSee(draggedUser, getLibConfidentialiteFr(ocrResultGrants))
                ? grey["500"]
                : red["500"],
            borderRadius: 8,
          }}
        >
          <VisibilityOff
            sx={{
              position: "absolute",
              bottom: 10,
              right: 20,
              opacity: 0.4,
              width: 100,
              height: 100,
              color: !draggedUser
                ? red["500"]
                : !canSee(draggedUser, getLibConfidentialiteFr(ocrResultGrants))
                  ? grey["500"]
                  : red["500"],
            }}
          ></VisibilityOff>
          {
            <Grid container={true} spacing={1}>
              {revokedUsers?.map((user) => {
                return (
                  <Grid item={true} key={user?.personnel?.matricule}>
                    <Card>
                      <AvatarPhotoWithDragSupport
                        matricule={user?.personnel?.matricule}
                        imageSize={500}
                        size={200}
                        avatarVariant={"square"}
                        variant={"square"}
                        libHabilitationFr={
                          user?.habilitation?.libHabilitationFr
                        }
                        noma={user?.personnel?.noma}
                        pnoma={user?.personnel?.pnoma}
                        canSee={false}
                      />
                    </Card>
                  </Grid>
                );
              })}
              {isOver2 && (
                <Grid item={true} key={-2}>
                  <AvatarPhotoWithDragSupport
                    matricule={draggedUser?.personnel?.matricule}
                    imageSize={500}
                    size={200}
                    avatarVariant={"square"}
                    variant={"square"}
                    libHabilitationFr={
                      draggedUser?.habilitation?.libHabilitationFr
                    }
                    noma={draggedUser?.personnel?.noma}
                    pnoma={draggedUser?.personnel?.pnoma}
                    canSee={false}
                  />
                </Grid>
              )}
            </Grid>
          }
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UsersChoiceDialog;
