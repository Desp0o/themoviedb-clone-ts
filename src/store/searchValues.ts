import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    movieLength: 0,
  },
  reducers: {
    setMovieLength(state, action) {
      state.movieLength = action.payload;
    },
  },
});

export const { setMovieLength } = searchSlice.actions;
export default searchSlice.reducer;
