import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Card = ({ element }) => {
  return (
    <div className="card">
      <Link to={`${element.id}`}>
        <div className="image">
          {element.volumeInfo?.imageLinks?.thumbnail ? (
            <img src={element.volumeInfo?.imageLinks?.thumbnail} />
          ) : (
            <img src="https://www.hachette.co.nz/graphics/CoverNotAvailable.jpg" />
          )}
        </div>
      </Link>
      <div className="info">
        {element.volumeInfo?.categories ? (
          <a>{element.volumeInfo?.categories[0]}</a>
        ) : (
          <a>Other</a>
        )}
        {element.volumeInfo?.title ? (
          <h4>{element.volumeInfo?.title}</h4>
        ) : (
          <h4>No name</h4>
        )}
        {element.volumeInfo?.authors ? (
          <p>{element.volumeInfo?.authors}</p>
        ) : (
          <p>Unknown</p>
        )}
      </div>
    </div>
  );
};

export default Card;
