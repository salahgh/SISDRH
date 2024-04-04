import ASSETS from "../../resources/ASSETS";
import { Stack } from "@mui/material";

const FormationMilitaireChip = ({ codeDiplomeMilitaire, width, height }) => {
  let image;

  switch (codeDiplomeMilitaire) {
    case "1006":
      image = ASSETS.cpo;
      break;
    case "1005":
      image = ASSETS.application;
      break;
    case "1007":
      image = ASSETS.etaMajor;
      break;
    case "1009":
      image = ASSETS.ecoleDeGuerre;
      break;
    default:
      image = ASSETS.reward;
  }

  return (
    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
      {image && (
        <img
          src={image}
          style={{ width: width, height: height, objectFit: "contain" }}
        />
      )}
    </Stack>
  );
};

export default FormationMilitaireChip;
