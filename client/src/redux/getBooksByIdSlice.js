import { createSlice } from "@reduxjs/toolkit";
import fetchBooksById from "../services/getBookById";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const getBooksByIdSlice = createSlice({
  name: "getBooksByIdSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksById.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(fetchBooksById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBooksById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getBooksByIdSlice.reducer;
