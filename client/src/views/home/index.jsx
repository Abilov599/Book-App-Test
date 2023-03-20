import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import fetchBooks from "../../services/getBooks";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.getBooksSlice);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return loading ? <h1>Loading...</h1> : console.log(data?.items);
};

export default Home;
