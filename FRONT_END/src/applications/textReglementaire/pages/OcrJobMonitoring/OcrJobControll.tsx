import { Stack } from "@mui/material";
import { PlayArrow, Stop } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useMutation, useQuery } from "@apollo/client";
import {
  StartSchedulerDocument,
  StopSchedulerDocument,
  IsOcrJobRunningDocument,
} from "../../../../_generated_gql_/graphql";

const OcrJobControll = () => {
  const [startOcrJob, { loading: starting }] = useMutation(
    StartSchedulerDocument,
  );
  const [stopOcrJob, { loading: stopping }] = useMutation(
    StopSchedulerDocument,
  );
  const {
    data: isOcrJobRunnig,
    loading,
    error,
  } = useQuery(IsOcrJobRunningDocument, {
    pollInterval: 4000,
  });

  function handleToggleState() {
    if (isOcrJobRunnig?.isOcrJobRunning) {
      stopOcrJob()
        .then((r) => console.log(JSON.stringify(r)))
        .catch((e) => console.log(e));
    } else {
      startOcrJob()
        .then((r) => console.log(r))
        .catch((e) => console.log(e));
    }
  }

  return (
    <Stack justifyContent={"center"} alignItems={"center"} direction={"column"}>
      {error && <div>{JSON.stringify(error)}</div>}
      <LoadingButton
        size={"large"}
        variant={"contained"}
        onClick={handleToggleState}
        startIcon={
          isOcrJobRunnig?.isOcrJobRunning ? (
            <Stop sx={{ width: 50, height: 50 }} color={"error"} />
          ) : (
            <PlayArrow sx={{ width: 50, height: 50 }} color={"secondary"} />
          )
        }
      >
        {" "}
        {isOcrJobRunnig?.isOcrJobRunning ? "STOP" : "START"}{" "}
      </LoadingButton>
    </Stack>
  );
};
export default OcrJobControll;
