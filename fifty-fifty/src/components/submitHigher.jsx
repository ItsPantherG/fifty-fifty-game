import React from "react";

const SubmitHigher = (props) => {
  return (
    <div
      className="btn btn-more submit--button"
      onClick={() => props.submit("more")}
    >
      More
    </div>
  );
};

export default SubmitHigher;
