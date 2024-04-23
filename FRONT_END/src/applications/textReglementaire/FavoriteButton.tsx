import { Star, StarBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import {
  IsFavoriteDocument,
  ToggleFavoriteDocument,
} from "../../_generated_gql_/graphql.ts";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../redux/features/auth/userSlice.ts";

export const FavoriteButton = ({ pdfFileId }: { pdfFileId: string | null }) => {
  // todo separate between render and logic

  const useName = useSelector(selectLoggedInUser);
  const { data: isFavorite } = useQuery(IsFavoriteDocument, {
    variables: {
      ocrResultId: pdfFileId,
      userName: useName ? useName.matricule : "",
    },
  });

  const [toggleFavorite] = useMutation(ToggleFavoriteDocument, {
    variables: {
      ocrResultId: pdfFileId,
    },
    refetchQueries: [
      {
        query: IsFavoriteDocument,
        variables: {
          ocrResultId: pdfFileId,
          userName: useName ? useName.matricule : "",
        },
      },
    ],
  });

  const handleClick = () => {
    toggleFavorite()
      .then(() => null)
      .catch((e) => console.log(e));
  };

  return (
    <IconButton onClick={handleClick}>
      {isFavorite?.favorite ? (
        <Star
          sx={{
            width: 40,
            height: 40,
            color: "#ffcf00",
          }}
        />
      ) : (
        <StarBorder
          sx={{
            width: 40,
            height: 40,
            color: "#ffcf00",
          }}
        />
      )}
    </IconButton>
  );
};
