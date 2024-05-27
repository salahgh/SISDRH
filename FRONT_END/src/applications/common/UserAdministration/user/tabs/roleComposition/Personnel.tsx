import { DPersonnel } from "../../../../../../_generated_gql_/graphql.ts";
import { Stack, Typography } from "@mui/material";
import AvatarPhoto from "../../../AvatarPhoto.tsx";
import { Matricule } from "../../../../components/Matricule.tsx";
import GradeAvatar from "../../../../../rh/GradeAvatar.tsx";
import { ArmeAvatar } from "../../../../../rh/ArmeAvatar.tsx";

export function Personnel(props: { personnel: DPersonnel }) {
  return (
    <Stack alignItems={"center"} className={"bg-amber-200"} width={130}>
      <AvatarPhoto
        avatarVariant={"rounded"}
        imageSize={"2200"}
        matricule={props.personnel?.matricule}
        size={100}
        borderRadius={4}
      ></AvatarPhoto>
      <Matricule matricule={props.personnel?.matricule}></Matricule>
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
