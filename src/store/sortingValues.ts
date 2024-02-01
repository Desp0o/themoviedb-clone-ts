import { createSlice } from "@reduxjs/toolkit";

interface OptionState {
  value: string;
  genre: string[];
}

const optionSlice = createSlice({
  name: "optionSlice",
  initialState: {
    value: "",
    genre: [] // Initialize with an empty array
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
    }
  }
});

export const { setOption, setGenre, removeGenre } = optionSlice.actions;
export default optionSlice.reducer;
