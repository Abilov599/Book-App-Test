import { createSlice } from "@reduxjs/toolkit";
import fetchBooks from "../services/getBooks";

const initialState = {
  loading: false,
  error: null,
  data: null
};

const getBooksSlice = createSlice({
  name: "getBooksSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getBooksSlice.reducer;
