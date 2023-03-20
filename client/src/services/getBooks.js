import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "AIzaSyAaf6cfMY_ap0kDbLvhqcE-62vSObQ-3F4";

const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  const res = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=search+terms&key=${API_KEY}`
  );
  return res.data;
});

export default fetchBooks;
