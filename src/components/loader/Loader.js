import React from "react";
import "./../css/loader.css";

const Loader = () => {
  return (
    <div className="text-center">
      <div className="spinner-border text-primary loader" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
