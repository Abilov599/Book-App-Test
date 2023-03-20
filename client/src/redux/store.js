import { configureStore } from "@reduxjs/toolkit";
import getBooksSlice from "./getBooksSlice";

export const store = configureStore({
  reducer: {
    getBooksSlice: getBooksSlice,
  },
});
