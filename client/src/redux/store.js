import { configureStore } from "@reduxjs/toolkit";
import getBooksSlice from "./getBooksSlice";
import getBooksByIdSlice from "./getBooksByIdSlice";

export const store = configureStore({
  reducer: {
    getBooksSlice: getBooksSlice,
    getBooksByIdSlice: getBooksByIdSlice,
  },
});
