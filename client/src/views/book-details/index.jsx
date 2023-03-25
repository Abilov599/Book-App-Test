import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchBooksById from "../../services/getBookById";
import "./index.scss";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.getBooksByIdSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksById(id));
  }, [dispatch]);

  return (
    <main id="book-details">
      <div className="container">
        <div className="image">
          <img src={data?.volumeInfo?.imageLinks?.thumbnail} alt="" />
        </div>
        <div className="info">
          {data?.volumeInfo?.categories ? (
            <p>{data?.volumeInfo?.categories}</p>
          ) : (
            <p>Other</p>
          )}
          <h1>{data?.volumeInfo?.title}</h1>
          <p>{data?.volumeInfo?.authors}</p>
          <textarea
            name=""
            id=""
            cols="90"
            value={data?.volumeInfo?.description}
            rows="15"
          ></textarea>
        </div>
      </div>
    </main>
  );
};

export default BookDetails;
