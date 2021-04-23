import React from "react";
import "../Core/Headings.css";
const Headings = (props) => {
  return (
    <div className="container-heading">
      <button class="button type">{props.text}</button>
    </div>
  );
};

export default Headings;
