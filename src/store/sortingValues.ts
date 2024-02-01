import { createSlice } from "@reduxjs/toolkit";

interface OptionState {
  value: string | undefined;
  genre: string[];
  voteRange: number;
}

const optionSlice = createSlice({
  name: "optionSlice",
  initialState: {
    value: undefined,
    genre: [],
    voteRange: 0,
  } as OptionState,
  reducers: {
    setOption(state, action) {
      state.value = action.payload;
    },
    setGenre(state, action) {
      state.genre.push(action.payload);
    },
    removeGenre(state, action) {
      const genreToRemove = action.payload;
      state.genre = state.genre.filter((genre) => genre !== genreToRemove);
    },
    setRange(state, action){
      state.voteRange = action.payload
    }
  }
});

export const { setOption, setGenre, removeGenre, setRange } = optionSlice.actions;
export default optionSlice.reducer;
