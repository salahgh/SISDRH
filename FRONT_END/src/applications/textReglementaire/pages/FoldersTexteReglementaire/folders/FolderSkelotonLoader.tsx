import { Skeleton, Stack } from "@mui/material";

export const FolderSkelotonLoader = ({ size }) => {
  const array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = i + 1;
  }

  return (
    <Stack direction={"row"} spacing={1} height={100}>
      {array.map((item, index) => {
        return (
          <Skeleton
            variant={"rounded"}
            key={index}
            sx={{ width: 150, height: 70 }}
          ></Skeleton>
        );
      })}
    </Stack>
  );
};
