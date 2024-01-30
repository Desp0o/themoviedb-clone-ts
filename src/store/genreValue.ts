import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState:{
        value: ''
    },
    reducers:{
        setGenre(state, action){
            state.value = action.payload
        }
    }
})

export const {setGenre} = genreSlice.actions
export default genreSlice.reducer