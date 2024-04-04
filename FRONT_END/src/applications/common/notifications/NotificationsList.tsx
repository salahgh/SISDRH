import {Menu, Stack} from "@mui/material";
import {Dispatch, SetStateAction} from "react";
import {NotificationDto} from "./NotificationComponent";
import {SingleNotification} from "./SingleNotification";
import {useQuery} from "@apollo/client";
import {Direction, NotificationsDocument} from "../../../_generated_gql_/graphql";
import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../redux/features/auth/userSlice";


const NotificationsList = ({
                              open,
                              anchor,
                              setOpen
                           }: {
                              open: boolean,
                              anchor: any,
                              setOpen: Dispatch<SetStateAction<boolean>>
                           }
) => {

   const loggedInUser = useSelector(selectLoggedInUser)


   const {data: notifications, error, loading} = useQuery(NotificationsDocument, {
      variables: {
         pageable: {
            pageNumber: 0,
            pageSize: 100,
            sort: {orders: [{property: 'dateTime', direction: Direction.Desc}]}
         },
         user : loggedInUser?.matricule
      }
   })

   return (
      <Menu open={open} anchorEl={anchor} onClose={(e) => setOpen(false)}>
         <Stack
            direction={'column'}
            width={550}
            height={600}
            padding={1}
            spacing={1}
            overflow={'auto'}

         >
            {
               notifications?.allNotifications?.content?.map((notification) => {
                  return (
                     <SingleNotification
                        matricule={notification?.emmitter?.personnel?.matricule}
                        noma={notification?.emmitter?.personnel?.noma}
                        pnoma={notification?.emmitter?.personnel?.pnoma}
                        nom={notification?.emmitter?.personnel?.nom}
                        pnom={notification?.emmitter?.personnel?.pnom}
                        fonction={''}
                        issueId={notification?.issue?.id}
                        notificationType={notification?.notificationType?.libFr}
                        dateTime={notification?.dateTime}
                        grade={notification?.emmitter?.personnel?.grade}
                        issueType={notification?.issue?.issueType}
                        style={{width: '100%'}}
                        state={notification?.state}
                        issueTitle={notification?.issue?.title}
                        setOpen={setOpen}
                        id={notification?.id}
                      />
                  )
               })
            }
         </Stack>
      </Menu>
   )
}
export default NotificationsList