import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    movieLength: 0,
    tvShwowLength: 0,
    scrollTopSearchPage: false
  },
  reducers: {
    setMovieLength(state, action) {
      state.movieLength = action.payload;
    },
    setTvShowLength(state, action) {
      state.tvShwowLength = action.payload;
    },
    setScrollTopSearchPage(state) {
      state.scrollTopSearchPage = true
    },
  },
});

export const { setMovieLength, setTvShowLength,setScrollTopSearchPage } = searchSlice.actions;
export default searchSlice.reducer;
