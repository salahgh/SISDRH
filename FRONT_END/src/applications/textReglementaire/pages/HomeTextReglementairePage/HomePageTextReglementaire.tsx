import { Stack, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { FindAllPinnedFilesDocument } from "../../../../_generated_gql_/graphql";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setselectedSinglePdfViewerFileId,
  setselectedSinglePdfViewerPageIndex,
} from "../../../../redux/features/elasticSearch/selectedResultLineSlice";
import { getLink, routs } from "../../../../routing/routs";
import { useEffect } from "react";

const HomePageTextReglementaire = () => {
  const { data, error, loading, refetch } = useQuery(
    FindAllPinnedFilesDocument,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    refetch();
  });

  // @ts-ignore
  const handleClick = (e, item) => {
    dispatch(setselectedSinglePdfViewerFileId(item?.ocrResult?.id));
    dispatch(setselectedSinglePdfViewerPageIndex(1));
    navigate(getLink(routs.PdfFilePage));
  };

  // todo the pinned will be available for a user based on its role

  return (
    <Stack
      style={{
        backgroundImage: "public/office_papers.jpg",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "calc(100vh - 65px)",
      }}
      className={"flex items-center"}
    >
      <Typography
        sx={{
          paddingTop: 4,
        }}
        variant={"h3"}
        fontWeight={"bold"}
      >
        {" "}
        تطبيقية النصوص التنظيمية{" "}
      </Typography>
      <Stack
        direction={"row"}
        spacing={2}
        padding={2}
        sx={{ height: "100%", width: "100%" }}
      >
        {/*<Paper sx={{flex: 1, height: '100%'}}>*/}
        {/*   <Stack direction={'column'} width={'100%'} height={'100%'} padding={1} spacing={1}>*/}
        {/*      <Typography*/}
        {/*         sx={{*/}
        {/*            paddingTop: 2*/}
        {/*         }}*/}
        {/*         variant={'h4'}*/}
        {/*         fontWeight={'bold'}> Textes importants </Typography>*/}
        {/*      <List>*/}
        {/*         {*/}
        {/*            data?.findPinnedOcrResults?.map((item, index) => {*/}
        {/*               return (*/}
        {/*                  <ListItemButton onClick={(e) => handleClick(e, item)}>*/}
        {/*                     <ListItemIcon>*/}
        {/*                        <img style={{*/}
        {/*                           width: '45px',*/}
        {/*                           height: 'auto'*/}
        {/*                        }} src={ASSETS.PDF_64} alt={'no'}/>*/}
        {/*                     </ListItemIcon>*/}
        {/*                     <ListItemText*/}
        {/*                        primary={item?.ocrResult?.originalFileName}*/}
        {/*                     >*/}

        {/*                     </ListItemText>*/}
        {/*                     <ListItemIcon>*/}
        {/*                        <ConfidentialiteChip*/}
        {/*                           confidentialite={item?.ocrResult?.confidentialite}*/}
        {/*                        />*/}
        {/*                     </ListItemIcon>*/}
        {/*                     /!*<ListItemIcon>*!/*/}
        {/*                     /!*    <img src={ASSETS.PINNED}*!/*/}
        {/*                     /!*         style={{*!/*/}
        {/*                     /!*             width: '40px',*!/*/}
        {/*                     /!*             height: '40px'*!/*/}
        {/*                     /!*         }}*!/*/}
        {/*                     /!*         alt={'pinned'}*!/*/}
        {/*                     /!*    />*!/*/}
        {/*                     /!*</ListItemIcon>*!/*/}
        {/*                  </ListItemButton>*/}
        {/*               )*/}
        {/*            })*/}
        {/*         }*/}
        {/*      </List>*/}
        {/*   </Stack>*/}
        {/*</Paper>*/}
        {/*<Paper sx={{flex: 1, height: '100%'}}><div>a</div></Paper>*/}
        {/*<Paper sx={{flex: 1, height: '100%'}}><div>b</div></Paper>*/}
      </Stack>
    </Stack>
  );
};

export default HomePageTextReglementaire;
