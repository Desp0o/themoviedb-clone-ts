import { createSlice } from "@reduxjs/toolkit";

interface OptionState {
  value: string | undefined;
  genre: string[];
  voteRange: number;
  isFiltering: boolean;
  filterDependencies: []
}

const optionSlice = createSlice({
  name: "optionSlice",
  initialState: {
    value: 'popularity.desc',
    genre: [],
    voteRange: 0,
    isFiltering: false,
    filterDependencies: []
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
    },
    setIsFilteringTrue(state,){
      state.isFiltering = true
    },
    setIsFilteringFalse(state,){
      state.isFiltering = false
    },
    setFilterDependencies(state, action){
      state.filterDependencies  = action.payload
    }
  }
});

export const { setOption, setGenre, removeGenre, setRange, setIsFilteringTrue, setIsFilteringFalse, setFilterDependencies } = optionSlice.actions;
export default optionSlice.reducer;
