import { Stack } from "@mui/material";
import { Tabs } from "./Tabs.tsx";

export const Home = () => {
  // const { data } = useQuery(TedByIdDocument , {
  //   variables : {
  //     tedId :
  //   }
  // });

  return (
    <div className={"bg-amber-200 w-full h-full overflow-auto p-2"}>
      <Stack spacing={2}>
        <Tabs></Tabs>
      </Stack>
    </div>
  );
};
