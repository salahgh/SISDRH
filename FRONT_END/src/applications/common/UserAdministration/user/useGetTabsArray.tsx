import { ParTextReglementaireIcon } from "./ParTextReglementaireIcon.tsx";
import { DirectGrantIcon } from "./DirectGrantIcon.tsx";
import { ManageAccounts, PersonAdd } from "@mui/icons-material";
import ASSETS from "../../../../resources/ASSETS.ts";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { PrivilegesEnum } from "../../../../_generated_gql_/graphql.ts";

export const useGetTabsArray = (value) => {
  const theme = useTheme();
  return [
    {
      icon: <ParTextReglementaireIcon />,
      label: "Par texte reglementaire",
      sx: {
        bgcolor: value === "1" ? theme.palette.action.selected : "null",
      },
      value: "1",
      privilege: PrivilegesEnum.OcrResultDirectGrant,
    },
    {
      icon: <DirectGrantIcon />,
      label: "par utilisation",
      sx: {
        bgcolor: value === "2" ? theme.palette.action.selected : "null",
      },
      value: "2",
      privilege: PrivilegesEnum.OcrResultDirectGrant,
    },
    {
      icon: (
        <ManageAccounts
          sx={{
            color: "#1975d1",
            width: 45,
            height: 45,
          }}
        />
      ),
      label: "gestion des comptes",
      sx: {
        bgcolor: value === "3" ? theme.palette.action.selected : "null",
      },
      value: "3",
      privilege: PrivilegesEnum.GestionCompte,
    },
    {
      icon: (
        <img
          alt="PDF_64"
          src={ASSETS.rolesAndPriviliges}
          style={{
            width: 45,
            left: 45,
          }}
        />
      ),
      label: "composition des roles",
      sx: {
        bgcolor: value === "4" ? theme.palette.action.selected : "null",
      },
      value: "4",
      privilege: true,
    },
    {
      icon: (
        <PersonAdd
          sx={{
            color: "#2ea100",
            width: 45,
            height: 45,
          }}
        />
      ),
      label: "creation des comptes",
      sx: {
        bgcolor: value === "5" ? theme.palette.action.selected : "null",
      },
      value: "5",
      privilege: true,
    },
  ];
};
