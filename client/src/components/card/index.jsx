import React from "react";
import "./index.scss";

const Card = ({ element }) => {
  console.log(element.volumeInfo);
  return (
    <div className="card">
      <a target="_blank" href={element.volumeInfo.previewLink}>
        <div className="image">
          {element.volumeInfo?.imageLinks?.thumbnail ? (
            <img src={element.volumeInfo?.imageLinks?.thumbnail} />
          ) : (
            <img src="https://www.hachette.co.nz/graphics/CoverNotAvailable.jpg" />
          )}
        </div>
      </a>
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
          <p>{element.volumeInfo?.authors[0]}</p>
        ) : (
          <p>Unknown</p>
        )}
      </div>
    </div>
  );
};

export default Card;
