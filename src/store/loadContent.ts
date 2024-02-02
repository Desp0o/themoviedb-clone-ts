import { createSlice } from "@reduxjs/toolkit";

interface RootState {
    isLoadedFilteredContent: boolean;
  }

const loadFilterSlice = createSlice({
    name: 'loadFilterData',
    initialState:{
        isLoadedFilteredContent: false
    } as RootState,
    reducers:{
        setLoadFilterData(state){
            state.isLoadedFilteredContent = true
        }
    }
})

export const { setLoadFilterData } = loadFilterSlice.actions;
export default loadFilterSlice.reducer;