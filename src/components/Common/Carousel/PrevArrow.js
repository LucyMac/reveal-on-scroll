import React from 'react';

import arrowPrev from "../../../img/arrow-prev.png";

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="carousel__arrow-prev"
      style={{ ...style, display: "block", backgroundImage: `url(${arrowPrev})`  }}
      onClick={onClick}
    />
  );
}

export default PrevArrow;