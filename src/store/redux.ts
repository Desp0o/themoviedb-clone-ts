import { configureStore } from "@reduxjs/toolkit";
import optionSlice from "./sortingValues"

interface RootState {
  chooseOption: string; // Adjust the type according to your actual state structure
}

const store = configureStore({
  reducer: {
    chooseOption: optionSlice,
  },
});


export default store