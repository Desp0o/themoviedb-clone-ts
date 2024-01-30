import { createSlice } from "@reduxjs/toolkit";

const optionSlice = createSlice({
    name: "optionSlice",
    initialState: {
        value: '',
        genre: ''
    },
    reducers:{
        setOption(state, action) {
            state.value = action.payload;
        },
        setGenre(state, action){
            state.value = action.payload
        }
    }
})


export const { setOption } = optionSlice.actions;
export default optionSlice.reducer;