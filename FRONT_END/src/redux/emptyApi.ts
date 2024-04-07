// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrl_} from "./RtkQueryApis/constants";

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
   reducerPath: 'mainApi',
   baseQuery: fetchBaseQuery({
      baseUrl: baseUrl_,
      prepareHeaders: (headers, {getState}) => {
         // @ts-ignore
         const token = getState().loggedInUser?.user?.token
         headers.set('Access-Control-Allow-Origin', '*')
         headers.set('Access-Control-Allow-Methods', '*')
         headers.set('Access-Control-Allow-Headers', '*')
         headers.set('Authorization', token ? `Bearer ${token}` : ' ')
         return headers;
      },
   }),
   endpoints: () => ({}),
})

