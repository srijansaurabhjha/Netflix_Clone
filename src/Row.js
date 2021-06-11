import React from "react";
import "./Row.css";

const Row = ({ img }) => {
  return (
    <div className="row">
      <img src={img} alt="" />
    </div>
  );
};

export default Row;
