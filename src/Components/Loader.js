import React from "react";

import "./Loader.css";

const Loader = () => {
  return (
    <div>
      <svg
        className="svg"
        width="100px"
        height="100px"
        viewBox="-50 -50 100 100"
      >
        <circle cx="0" cy="0" r="25" />
      </svg>
    </div>
  );
};

export default Loader;
