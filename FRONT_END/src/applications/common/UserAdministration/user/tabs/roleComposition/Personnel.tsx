import {
  DPersonnel,
  UserLockedDocument,
} from "../../../../../../_generated_gql_/graphql.ts";
import { Stack, Typography } from "@mui/material";
import AvatarPhoto from "../../../AvatarPhoto.tsx";
import { Matricule } from "../../../../components/Matricule.tsx";
import GradeAvatar from "../../../../../rh/GradeAvatar.tsx";
import { ArmeAvatar } from "../../../../../rh/ArmeAvatar.tsx";
import { useQuery } from "@apollo/client";
import { LockOpenOutlined, LockPerson } from "@mui/icons-material";

export function Personnel(props: { personnel: DPersonnel }) {
  const { data: userLocked } = useQuery(UserLockedDocument, {
    variables: {
      matricule: props?.personnel?.matricule,
    },
  });

  return (
    <Stack
      alignItems={"center"}
      className={"bg-gray-300"}
      width={130}
      padding={1}
    >
      <AvatarPhoto
        avatarVariant={"rounded"}
        imageSize={"2200"}
        matricule={props.personnel?.matricule}
        size={100}
        borderRadius={4}
      ></AvatarPhoto>
      <Matricule matricule={props.personnel?.matricule}></Matricule>
      <Typography>
        {" "}
        {userLocked?.user?.locked === "o" ? (
          <LockPerson></LockPerson>
        ) : (
          <LockOpenOutlined></LockOpenOutlined>
        )}{" "}
      </Typography>
      <Typography>
        {props.personnel?.noma + " " + props.personnel?.pnoma}
      </Typography>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <GradeAvatar
          gradeId={props.personnel?.grade?.grade}
          armeId={props.personnel?.arme?.id}
          width={80}
        ></GradeAvatar>
        <ArmeAvatar armeId={props.personnel?.arme?.id} width={40}></ArmeAvatar>
      </Stack>
    </Stack>
  );
}
