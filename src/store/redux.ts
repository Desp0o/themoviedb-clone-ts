import { configureStore } from "@reduxjs/toolkit";
import optionSlice from "./sortingValues"

const store = configureStore({
  reducer: {
    chooseOption: optionSlice,
  },
});


export default store