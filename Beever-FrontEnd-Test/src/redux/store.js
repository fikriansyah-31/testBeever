import {  configureStore } from "@reduxjs/toolkit";
import kanyeReducer from "./kanyeSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    kanyeQuote: kanyeReducer,
  },
});

