import React from 'react';

import arrowNext from "../../../img/arrow-next.png";

const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="carousel__arrow-next"
      style={{ ...style, display: "block", backgroundImage: `url(${arrowNext})` }}
      onClick={onClick}
    />
  );
}
export default NextArrow;