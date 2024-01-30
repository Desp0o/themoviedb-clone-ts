import { configureStore } from "@reduxjs/toolkit";
import optionSlice from "./sortingValues"
import genreSlice from "./genreValue"

const store = configureStore({
  reducer: {
    chooseOption: optionSlice,
    chooseGenre: genreSlice,
  },
});


export default store