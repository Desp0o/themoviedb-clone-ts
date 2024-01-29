import { createSlice } from "@reduxjs/toolkit";

const optionSlicer = createSlice({
    name: "optionSlcier",
    initialState: {
        value: null,
    },
    reducers:{
        setOption(state, action) {
            state.value = action.payload;
        },
    }
})


export const {setOption} = optionSlicer.actions
export default optionSlicer.reducer