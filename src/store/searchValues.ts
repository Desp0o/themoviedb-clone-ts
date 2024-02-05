import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    movieLength: 0,
    tvShwowLength: 0
  },
  reducers: {
    setMovieLength(state, action) {
      state.movieLength = action.payload;
    },
    setTvShowLength(state, action) {
      state.tvShwowLength = action.payload;
    },
  },
});

export const { setMovieLength, setTvShowLength } = searchSlice.actions;
export default searchSlice.reducer;
