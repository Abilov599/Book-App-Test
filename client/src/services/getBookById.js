import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "AIzaSyAcoy_NAwNkE-c92CiJx9vzIHCKj6rKOoQ";

// AIzaSyAaf6cfMY_ap0kDbLvhqcE-62vSObQ-3F4

const fetchBooksById = createAsyncThunk("fetchBooks", async (id) => {
  const res = await axios.get(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
  );
  return res.data;
});

export default fetchBooksById;
