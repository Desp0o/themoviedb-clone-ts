import { createSlice } from "@reduxjs/toolkit";

const optionSlice = createSlice({
    name: "optionSlice",
    initialState: {
        value: '',
    },
    reducers:{
        setOption(state, action) {
            state.value = action.payload;
        }
    }
})


export const { setOption } = optionSlice.actions;
export default optionSlice.reducer;