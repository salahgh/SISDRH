import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilteringFieldsInterface} from "../../../applications/pam/mainDataGrid/types";
import {PamOff2024, Pav} from "../../../_generated_gql_/graphql";

const initialState : {
   filteringFields : FilteringFieldsInterface ,
   selectedPersonel : PamOff2024 | null | undefined ,
   selectedPav : Pav | null | undefined

} = {
   filteringFields : {
      armes: [],
      searchToken: '',
      grades: [],
      suds: [],
      postes: [],
      pam : [] ,
      csn : '' ,
      pav : [] ,
      idStructure : '' ,
      formation : '' ,
      diplomesCiviles : [] ,
      diplomesMilitaires : []
   } ,
   selectedPersonel : null ,
   selectedPav : null
}

export const pamSlice = createSlice({
   name: 'pam',
   initialState,
   reducers: {
      setFilteringFields: (state , action : PayloadAction<FilteringFieldsInterface>) => {
         state.filteringFields = action.payload;
      },

      resetFilteringFields : (state, action) => {
         state.filteringFields = initialState.filteringFields
      },
      setSelectedPav : (state, action) => {
         state.selectedPav = action.payload
      }
   },
});

export const { setFilteringFields , resetFilteringFields  , setSelectedPav } = pamSlice.actions;
export const selectFilteringFields = (state) => state.pam.filteringFields;
export const selecteSelectedPav = (state) => state.pam.selectedPav

export default pamSlice.reducer;
