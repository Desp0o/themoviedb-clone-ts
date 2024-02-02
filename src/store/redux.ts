import { configureStore } from "@reduxjs/toolkit";
import optionSlice from "./sortingValues"
import loadFilterData from "./loadContent";

const store = configureStore({
  reducer: {
    chooseOption: optionSlice,
    loadContent: loadFilterData
  },
});


export default store