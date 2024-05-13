import { useMutation, useQuery } from "@apollo/client";
import {
  DeletePavDocument,
  Direction,
  FindAllPavDocument,
  PaginationInput,
  Pav,
  UpdateCostumSortDocument,
} from "../../_generated_gql_/graphql";
import { useEffect, useState } from "react";
import {
  rowHeight,
  StripedDataGrid,
} from "../pam/mainDataGrid/StripedDataGrid";
import { Theme } from "@mui/material/styles";
import { CustomPagination } from "../pam/mainDataGrid/CustomPagination";
import {
  Avatar,
  Box,
  LinearProgress,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { CustomNoResultOverlay } from "../pam/mainDataGrid/CustomNoResultOverlay";
import { GridCellEditStopParams, GridColDef, MuiEvent } from "@mui/x-data-grid";
import { PamDataGridAvatarPhoto } from "../pam/mainDataGrid/PamDataGridAvatarPhoto";
import { directeur } from "../../redux/RtkQueryApis/constants";
import GradeAvatar from "../rh/GradeAvatar";
import { PostChip } from "../pam/PostChip";
import { FormationChip } from "../pam/FormationChip";
import { ArmeAvatar } from "../rh/ArmeAvatar";
import { SudChip } from "../pam/SudChip";
import { ArrowBack, Delete } from "@mui/icons-material";
import FormationMilitaireChip from "../pam/FormationMilitaireChip";
import FormationCivileChip from "../pam/FormationCivileChip";
import Button from "@mui/material/Button";
import { PavFilter } from "./PavFilter";
import { PavDialogueForm } from "./PavDialogueForm";
import { useDispatch } from "react-redux";
import { setSelectedPav } from "../../redux/features/pam/pamSlice";
import ExportToPdfPav from "./ExportToPdfPav";
import useSnackBarNotifications from "../common/notifications/useSnackBarNotifications.tsx";
import { highlightSearchTokenWithSpan } from "../common/utilities/tools.ts";
import { Matricule } from "../common/components/Matricule.tsx";

export const PavHome = () => {
  const [page, setPage] = useState<PaginationInput>({
    pageNumber: 0,
    pageSize: 20,
    sort: { orders: [{ direction: Direction.Desc, property: "noteGlobale" }] },
  });

  const [values, setValues] = useState([24]);
  const [sort, setSort] = useState(2);

  const {
    data: pav2024,
    loading,
    error,
    refetch,
  } = useQuery(FindAllPavDocument, {
    variables: {
      pageable: page,
      idGrade: values[0],
    },
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    refetch();
  }, [open, values, page]);

  useEffect(() => {
    switch (sort) {
      case 1:
        setPage((old) => ({
          ...old,
          sort: {
            orders: [{ direction: Direction.Asc, property: "costumSort" }],
          },
        }));
        break;
      case 2:
        setPage((old) => ({
          ...old,
          sort: {
            orders: [{ direction: Direction.Asc, property: "noteGlobale" }],
          },
        }));
        break;
      case 3:
        setPage((old) => ({
          ...old,
          sort: {
            orders: [
              {
                direction: Direction.Asc,
                property: "personnel.pamOff2024.trieAnciennete",
              },
            ],
          },
        }));
        break;
    }
  }, [sort]);

  const dispatch = useDispatch();

  const { handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar } =
    useSnackBarNotifications();

  const [confirmationDialogue, setConfirmationDialogue] = useState(false);

  const [deletePav] = useMutation(DeletePavDocument, {
    refetchQueries: [
      {
        query: FindAllPavDocument,
        variables: {
          pageable: page,
          idGrade: values[0],
        },
      },
    ],
  });

  const handleDeleteNote = (row: Pav) => {
    deletePav({ variables: { pavId: row.id } })
      .then((r) => handleShowInfoSnackBar("success"))
      .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
  };

  const columns: GridColDef[] = [
    {
      field: "matricule",
      headerName: "",
      width: 90,
      renderCell: ({ row }: { row: Pav }) => (
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <PamDataGridAvatarPhoto
            // onClick={(e, altKeyPressed, hovered) => /*handleAvatarClicked(e, altKeyPressed, hovered, row)*/}
            row={row?.personnel?.pamOff2024}
            size={48}
            // handleDoubleClick={() => {
            //     setSelectedPersonel(row)
            //     setPhotoEditorDialogueOpen(true)
            // }}
          />
        </Stack>
      ),
    },
    {
      field: "noma",
      headerName: "الإسم و اللقب",
      width: 150,
      renderCell: ({ row }: { row: Pav }) => (
        <ListItem sx={{ textAlign: "right" }}>
          <ListItemText
            primary={
              <Typography
                fontWeight={"bold"}
                style={{
                  width: "100%",
                }}
              >
                <span
                  dangerouslySetInnerHTML={highlightSearchTokenWithSpan(
                    row?.personnel?.noma + " " + row?.personnel?.pnoma,
                    "",
                  )}
                />
              </Typography>
            }
            secondary={<Matricule matricule={row?.personnel?.matricule} />}
          ></ListItemText>
        </ListItem>
      ),
    },
    {
      field: "grade",
      headerName: "",
      width: 190,
      renderCell: ({ row }: { row: Pav }) => (
        <Stack
          direction={"row"}
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Stack
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={0.5}
            flex={1}
          >
            <GradeAvatar
              gradeId={row?.personnel?.pamOff2024?.g}
              width={80}
              armeId={row?.personnel?.pamOff2024?.arme}
              promotionNumber={row?.personnel?.pamOff2024?.promotionNumber}
            />
            <div className={"w-60 flex flex-row justify-center"}>
              <PostChip poste={row?.personnel?.pamOff2024?.poste}></PostChip>
            </div>
            <FormationChip
              visible={row?.personnel?.pamOff2024?.formation === "نعم"}
            />
          </Stack>
        </Stack>
      ),
    },
    {
      field: "arme",
      headerName: "",
      width: 140,
      renderCell: ({ row }: { row: Pav }) => (
        <Stack
          width={"100%"}
          height={"100%"}
          justifyContent={"start"}
          alignItems={"center"}
          direction={"row"}
          spacing={1}
        >
          <ArmeAvatar
            armeId={row?.personnel?.pamOff2024?.arme}
            width={46}
          ></ArmeAvatar>
          {row?.personnel?.pamOff2024?.matricule !== directeur ? (
            <SudChip NDureeS={row?.personnel?.pamOff2024?.NDureeS} />
          ) : (
            <Typography fontWeight={"bold"} width={"100%"}>
              {row?.personnel?.pamOff2024?.NDureeS}
            </Typography>
          )}
        </Stack>
      ),
    },
    {
      field: "csn",
      headerName: "الوظيفة",
      width: 420,
      renderCell: ({ row }: { row: Pav }) => (
        <Stack
          overflow={"auto"}
          direction={"row"}
          width={"100%"}
          spacing={1}
          padding={1}
        >
          <Typography fontWeight={"bold"}>
            {row?.personnel?.pamOff2024?.structureSn?.runite?.abreviationAr +
              "/" +
              row?.personnel?.pamOff2024?.structureSn?.runite?.regionMilitaire
                ?.libAbrRegionAr}
          </Typography>
          <ArrowBack></ArrowBack>
          <Typography>{row?.personnel?.pamOff2024?.fonction}</Typography>
        </Stack>
      ),
    },
    {
      field: "dff",
      headerName: "",
      width: 150,
      renderCell: ({ row }: { row: Pav }) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FormationMilitaireChip
                width={40}
                height={40}
                codeDiplomeMilitaire={row?.personnel?.pamOff2024?.code_dip_mil}
                libDiplomeAr={row?.personnel?.pamOff2024?.dip_mil}
              ></FormationMilitaireChip>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant={"h6"} fontWeight="bold">
                {row?.personnel?.pamOff2024?.dipmil?.abrFr}
              </Typography>
            }
          ></ListItemText>
        </ListItem>
      ),
    },
    {
      field: "ddff",
      headerName: "",
      width: 200,
      renderCell: ({ row }: { row: Pav }) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FormationCivileChip
                size={40}
                codeDiplomeCivile={row?.personnel?.pamOff2024?.code_dip_civ}
                libDiplomeAr={row?.personnel?.pamOff2024?.dip_civ}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography>
                {row?.personnel?.pamOff2024?.dipcivil?.abrFr}
              </Typography>
            }
          ></ListItemText>
        </ListItem>
      ),
    },
    {
      field: "df",
      headerName: "",
      width: 100,
      renderCell: ({ row }: { row: Pav }) => (
        <Button
          onClick={() => {
            dispatch(setSelectedPav(row));
            setOpen(true);
          }}
        >
          pav
        </Button>
      ),
    },
    {
      field: "noteGlobale",
      headerName: "النقطة الاجمالية",
      width: 140,
      renderCell: ({ row }: { row: Pav }) => (
        <Stack
          width={"100%"}
          height={"100%"}
          justifyContent={"start"}
          alignItems={"center"}
          direction={"row"}
          spacing={1}
        >
          <Typography variant={"h4"} fontWeight={"bold"}>
            {row?.noteGlobale}
          </Typography>
        </Stack>
      ),
    },
    {
      field: "costumSort",
      headerName: "ترتيب خاص",
      width: 100,
      editable: true,
      renderCell: ({ row }: { row: Pav }) => (
        <Typography
          style={{ textAlign: "center", width: 180 }}
          variant={"h5"}
          fontWeight={"bold"}
        >
          {row?.costumSort}
        </Typography>
      ),
    },
    {
      field: "supprimer",
      width: 150,
      renderCell: ({ row }: { row: Pav }) => (
        <Button
          onClick={() => handleDeleteNote(row)}
          startIcon={<Delete></Delete>}
          variant={"outlined"}
          color={"error"}
        >
          supprimer
        </Button>
      ),
    },
  ];

  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    console.log("pam effect");
    if (pav2024) {
      setRowCount(pav2024?.findAllPav?.totalElements);
    }
  }, [pav2024, setRowCount]);

  const handleValueChanged = (id, field) => {
    // let oldValues = Array.from(values);
    // const index = values.indexOf(id);
    // if (index === -1) {
    //     setValues([...oldValues, id])
    // } else {
    //     oldValues.splice(index, 1)
    //     setValues(oldValues)
    // }
    setValues([id]);
  };

  const [update] = useMutation(UpdateCostumSortDocument);

  const handleCostumSortChange = (rowId, oldValue, value) => {
    console.log(value + " " + rowId + " " + oldValue);
    update({
      variables: { costumSort: value, pavId: rowId },
      refetchQueries: [
        {
          query: FindAllPavDocument,
          variables: {
            pageable: page,
            idGrade: values[0],
          },
        },
      ],
    })
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  return (
    <Stack height={"calc(100vh - 65px)"} width={"calc(100% - 3px)"}>
      <PavDialogueForm open={open} setOpen={setOpen} />
      <PavFilter
        values={values}
        handleValueChanged={handleValueChanged}
        sort={sort}
        setSort={setSort}
      />
      <div className={"flex flex-row justify-end pb-1"}>
        {" "}
        <ExportToPdfPav
          page={page}
          values={values}
          sort={sort}
        ></ExportToPdfPav>
      </div>
      <StripedDataGrid
        rows={
          pav2024?.findAllPav?.content &&
          pav2024?.findAllPav?.content?.length > 0
            ? pav2024?.findAllPav?.content
            : []
        }
        density={"standard"}
        onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
          handleCostumSortChange(
            params.row.id,
            params.row.costumSort,
            event.target.value,
          );
          // console.log(event);
        }}
        columns={columns}
        error={error}
        loading={loading}
        autoPageSize={true}
        paginationModel={{
          page: page.pageNumber,
          pageSize: page.pageSize,
        }}
        onPaginationModelChange={(model, details) => {
          setPage((old) => ({
            ...old,
            pageSize: model.pageSize,
            pageNumber: model.page,
          }));
        }}
        getRowId={(row: Pav) => row?.personnel?.matricule}
        paginationMode={"server"}
        sortingMode={"server"}
        rowCount={rowCount}
        disableSelectionOnClick={true}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          "& .MuiDataGrid-cell": {
            // backgroundColor: (theme : Theme) => theme.palette.background.default,
            borderColor: (theme: Theme) => theme.palette.divider,
          },
          "& .MuiDataGrid-columnHeaders": {
            // backgroundColor: (theme : Theme) => theme.palette.background.default,
            borderColor: (theme: Theme) => theme.palette.divider,
          },
          "& .MuiDataGrid-footerContainer": {
            // backgroundColor: (theme : Theme) => theme.palette.background.default,
            borderColor: (theme: Theme) => theme.palette.divider,
          },
          "& .super-app-theme--header": {
            backgroundColor: "#121212",
          },
        }}
        rowHeight={rowHeight}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        // getCellClassName{(params) => 'allCels'}
        slots={{
          pagination: CustomPagination,
          loadingOverlay: LinearProgress,
          noRowsOverlay: CustomNoResultOverlay,
        }}
        slotsProps={{
          loadingOverlay: {
            pageSize: page.pageSize,
          },
        }}
      />
    </Stack>
  );
};
