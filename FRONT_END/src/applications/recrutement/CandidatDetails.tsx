import { Avatar, Stack, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { CandidatByIdDocument } from "../../_generated_gql_/graphql.ts";
import ASSETS from "../../resources/ASSETS.ts";
import { formatPhoneNumber } from "./CandidatDataGrid.tsx";
import * as React from "react";
import {
  ContactMail,
  ContactPage,
  ContactPhone,
  Mail,
  MailOutline,
  PersonPinCircle,
} from "@mui/icons-material";

export const CandidatDetails = (props: { selectedCandidatId: unknown }) => {
  const { data, loading, error, refetch } = useQuery(CandidatByIdDocument, {
    variables: {
      id: props?.selectedCandidatId,
    },
  });

  return (
    <Stack
      className={"bg-amber-200"}
      alignItems={"center"}
      spacing={1}
      direction={"row-reverse"}
    >
      <Stack flex={1} className={"bg-blue-500"} alignItems={"center"}>
        <Avatar
          sx={{ width: 250, height: 250 }}
          src={ASSETS.AVATAR_MALE}
        ></Avatar>
        <Typography variant={"h3"} fontWeight={"bold"}>
          {data?.candidatById?.noma + " " + data?.candidatById?.pnoma}
        </Typography>
        <Typography variant={"h4"}>
          {data?.candidatById?.nom + " " + data?.candidatById?.pnom}
        </Typography>
        <Stack
          direction={"row"}
          spacing={5}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            borderWidth: 0.3,
            border: "solid",
            borderRadius: 5,
            padding: 2,
          }}
        >
          <Typography variant={"h5"}>{data?.candidatById?.dn}</Typography>
          <PersonPinCircle sx={{ width: 35, height: 35 }}></PersonPinCircle>
          <Avatar>
            <Typography variant={"h5"}>{data?.candidatById?.wr?.id}</Typography>
          </Avatar>
          <Typography variant={"h5"}>
            {data?.candidatById?.wr?.libAr}
          </Typography>
          <Avatar>
            <Typography variant={"h5"}>
              {data?.candidatById?.wr?.regionMilitaire?.id}
            </Typography>
          </Avatar>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <ContactPhone sx={{ width: 35, height: 35 }}></ContactPhone>
          <Typography variant={"h5"}>
            {formatPhoneNumber(data?.candidatById?.telephone)}
          </Typography>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <ContactMail sx={{ width: 35, height: 35 }}></ContactMail>
          <Typography variant={"h5"}>{data?.candidatById?.email}</Typography>
        </Stack>
      </Stack>
      <Stack flex={1}></Stack>
    </Stack>
  );
};
