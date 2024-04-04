import {
  Avatar,
  Badge,
  ButtonBase,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Comment } from "@mui/icons-material";
import {
  ChangeNotificationStateDocument,
  Direction,
  IssueType,
  NotificationsDocument,
  NotificationState,
  RhRGrade,
} from "../../../_generated_gql_/graphql";
import { formatDistanceToNow } from "date-fns";
import local from "date-fns/locale/ar-DZ";
import { useDispatch } from "react-redux";
import { setSelectedIssueId } from "../../../redux/features/bugTracker/bugTrackerSlice";
import { useMutation } from "@apollo/client";
import { CSSObject } from "@mui/material/styles";
import { useAppSelector } from "../../../redux/hooks.ts";

const getBgColo = () => {
  return "#eff1f2";
};

export const SingleNotification = React.forwardRef(
  (
    {
      notificationType,
      matricule,
      noma,
      pnoma,
      nom,
      pnom,
      grade,
      fonction,
      statusType,
      dateTime,
      style,
      issueId,
      issueType,
      issueTitle,
      state,
      setOpen,
      id,
    }: {
      notificationType: string;
      matricule: string;
      noma: string;
      pnoma: string;
      nom: string;
      pnom: string;
      grade: RhRGrade;
      fonction: string;
      issueId: string;
      statusTitle: string;
      issueTitle: string;
      dateTime: string;
      issueType: IssueType;
      style: CSSObject;
      state: string;
      setOpen: Dispatch<SetStateAction<boolean>>;
      id: number;
    },
    ref,
  ) => {
    const dispatch = useDispatch();
    // const nvigate = useNavigate()
    const loggedInUser = useAppSelector((s) => s.loggedInUser.user);

    const [changeNotificationState, { data, loading, error }] = useMutation(
      ChangeNotificationStateDocument,
      {
        refetchQueries: [
          {
            query: NotificationsDocument,
            variables: {
              pageable: {
                pageNumber: 0,
                pageSize: 100,
                sort: {
                  orders: [{ property: "dateTime", direction: Direction.Desc }],
                },
              },
              user: loggedInUser.matricule,
            },
          },
        ],
      },
    );

    const handleNotificationClicked = () => {
      setOpen(false);
      dispatch(setSelectedIssueId(issueId));
      // nvigate(getLink(routs.IssueView))
      changeNotificationState({
        variables: {
          notificationId: id,
          notificationState: NotificationState.Read,
        },
      })
        .then((result) => " ")
        .catch((error) => " ");
    };

    return (
      <ButtonBase onClick={handleNotificationClicked}>
        <Stack
          style={style}
          ref={ref}
          direction={"row"}
          spacing={1}
          padding={1}
          width={500}
          height={100}
          sx={{
            backgroundColor:
              state === NotificationState.New ? "#e7e7e7" : "#ffffff",
            borderRadius: 3,
          }}
        >
          <Badge
            overlap={"circular"}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                variant={"circular"}
                sx={{ width: 35, height: 35, backgroundColor: "#3c6a8b" }}
              >
                <Comment
                  sx={{
                    color: getBgColo(),
                    width: 20,
                    height: 20,
                  }}
                ></Comment>
              </Avatar>
            }
          >
            <SimpleAvatarPhoto
              matricule={matricule}
              imageSize={100}
              size={80}
              avatarVariant={"rounded"}
              borderRadius={3}
            />
          </Badge>
          <Stack paddingLeft={1} alignItems={"start"}>
            <Typography
              fontWeight={state === NotificationState.New ? "bold" : null}
            >
              {grade?.libGradeFr +
                " " +
                nom +
                " " +
                pnom +
                " à commenté le post "}
              <Link underline={"always"}>{"#" + issueId} </Link>
            </Typography>
            <Typography>{issueTitle}</Typography>
            <Typography>
              {"ـ " +
                formatDistanceToNow(new Date(dateTime), {
                  includeSeconds: true,
                  locale: local,
                })}
            </Typography>
          </Stack>
        </Stack>
      </ButtonBase>
    );
  },
);
