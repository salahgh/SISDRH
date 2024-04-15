import { Skeleton, Stack } from "@mui/material";


export const LoadingConfidentialiteButtons = ({ size , width = 100 }) => {

  const array = new Array(4)

  for (let i = 0; i < size; i++) {
    array[i] = i + 1;
  }

  return(
    <Stack direction={'row'} spacing={1}>
      {
        array.map((item) => {
          return(
            <Skeleton key={item} variant={'rounded'} sx={{width : width , height : 55}}>

            </Skeleton>
          )
        })
      }
    </Stack>
  )
}
