import React from "react";

const SubmitLess = (props) => {
  return (
    <div
      className="btn btn-less submit--button"
      onClick={() => props.submit("less")}
    >
      Less
    </div>
  );
};

export default SubmitLess;
