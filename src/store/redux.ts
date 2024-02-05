import { configureStore } from "@reduxjs/toolkit";
import optionSlice from "./sortingValues"
import loadFilterData from "./loadContent";
import searchSlice from "./searchValues"

const store = configureStore({
  reducer: {
    chooseOption: optionSlice,
    loadContent: loadFilterData,
    searchOptions: searchSlice,
  },
});


export default store