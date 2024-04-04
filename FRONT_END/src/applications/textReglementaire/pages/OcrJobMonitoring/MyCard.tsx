import {
  selectSelectedItem,
  setSelectedItem,
} from "../../../../redux/features/elasticSearch/OcrJobSlice";
import { Avatar, ButtonBase, IconButton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  AddToQueue,
  AutoStoriesOutlined,
  Check,
  HourglassBottom,
  Memory,
  MoreVert,
  TimerOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from "date-fns";
import { green, orange, red } from "@mui/material/colors";
import AvatarPhoto from "../../../common/UserAdministration/AvatarPhoto.tsx";

const getDiff = (date1, date2) => {
  const diffInHours = differenceInHours(date2, date1);
  const diffInMinutes = differenceInMinutes(date2, date1) - diffInHours * 60;
  const diffInSeconds =
    differenceInSeconds(date2, date1) -
    diffInHours * 60 * 60 -
    diffInMinutes * 60;
  return (
    diffInHours === 0 &&
    diffInHours + " h  " + (diffInMinutes === 0) &&
    diffInMinutes + " m  " + diffInSeconds + " s "
  );
};

function getStatusIcon(item) {
  return (
    <>
      <Avatar
        variant={"circular"}
        sx={{
          bgcolor:
            item.ocrDone === "c"
              ? orange["500"]
              : item.ocrDone === "o"
                ? green["500"]
                : item.ocrDone === "n" || item.ocrDone === "p"
                  ? red["500"]
                  : "#a7a7a7",
          height: 50,
          width: 50,
        }}
      >
        {item.ocrDone === "o" ? (
          <Check sx={{ width: 40, height: 40 }} />
        ) : item.ocrDone === "n" || item.ocrDone === "p" ? (
          <HourglassBottom sx={{ width: 40, height: 40 }} />
        ) : item.ocrDone === "c" ? (
          <Memory sx={{ width: 40, height: 40 }} />
        ) : null}
      </Avatar>
    </>
  );
}

const MyCard = ({ item }) => {
  const getIconsColor = () => {
    if (selectedItem === item) return "#e0e0e0";
    if (item.ocrDone === "n") return "#ffc8c8";
    if (item.ocrDone === "c") return "#fdecc2";
    return "#e1ffd1";
  };
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItem);

  const getColor = (ocrDone, selected) => {
    switch (ocrDone) {
      case "o":
        if (selected) {
          return green["300"];
        } else return green["200"];
      case "c":
        if (selected) {
          return orange["300"];
        } else return orange["200"];
      case "n":
        if (selected) {
          return red["300"];
        } else return red["200"];
      case "p":
        if (selected) {
          return red["300"];
        } else return red["200"];
    }
  };

  const getBorderColor = (ocrDone, selected) => {
    switch (ocrDone) {
      case "o":
        if (selected) {
          return green["400"];
        } else return green["300"];
      case "c":
        if (selected) {
          return orange["400"];
        } else return orange["300"];
      case "n":
        if (selected) {
          return red["400"];
        } else return red["300"];
      case "p":
        if (selected) {
          return red["400"];
        } else return red["300"];
    }
  };

  return (
    <>
      <ButtonBase
        onClick={() => dispatch(setSelectedItem(item))}
        sx={{
          backgroundColor: getColor(item?.ocrDone, selectedItem === item),
          height: 80,
          borderColor: getBorderColor(item?.ocrDone, selectedItem === item),
          borderWidth: 3,
          borderStyle: "solid",
          padding: 0,
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          height={"100%"}
          padding={1}
        >
          <Stack width={"100%"} direction={"row"} alignItems={"center"}>
            {getStatusIcon(item)}
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 2,
                width: 300,
                textJustify: "left",
              }}
              component="h2"
            >
              {item.originalFileName}
            </Typography>

            <AvatarPhoto
              variant={"square"}
              avatarVariant={"rounded"}
              matricule={item.owner?.personnel?.matricule}
              imageSize={100}
              size={80}
            />
            <Typography sx={{ margin: 2 }}>
              {item.owner?.personnel?.noma + " " + item.owner?.personnel?.pnoma}
            </Typography>

            <AddToQueue
              sx={{ fontSize: 35, fontWeight: "bold", marginLeft: 1 }}
            ></AddToQueue>

            <Stack
              direction={"column"}
              sx={{ paddingLeft: 1, paddingRight: 3 }}
            >
              <Typography>
                {format(new Date(item.createdDate), "MM/dd/yyyy")}
              </Typography>
              <Typography>
                {format(new Date(item.createdDate), "HH:mm:ss")}
              </Typography>
            </Stack>

            <Stack direction={"row"} width={100}>
              <AutoStoriesOutlined
                sx={{
                  fontSize: 35,
                  fontWeight: "bold",
                  marginLeft: 1,
                  marginRight: 1,
                }}
              />
              <Typography sx={{ fontSize: 20 }}>
                {item.numberOfPapers}
              </Typography>
            </Stack>
            {item?.ocrDone == "o" ? (
              <>
                <TimerOutlined
                  sx={{
                    fontSize: 35,
                    fontWeight: "bold",
                    marginLeft: 1,
                    marginRight: 2,
                  }}
                />
                <Typography sx={{ fontSize: 20 }}>
                  {getDiff(
                    new Date(item.executedAt),
                    new Date(item.terminatedAt),
                  )}
                </Typography>
              </>
            ) : (
              <>
                {" "}
                <HourglassBottom
                  sx={{
                    fontSize: 35,
                    fontWeight: "bold",
                    marginLeft: 1,
                    marginRight: 1,
                  }}
                />
                <Typography>في انتظار المعالجة</Typography>
              </>
            )}
          </Stack>
          <IconButton>
            <MoreVert />
          </IconButton>
        </Stack>
      </ButtonBase>
    </>
  );
};

export default MyCard;
