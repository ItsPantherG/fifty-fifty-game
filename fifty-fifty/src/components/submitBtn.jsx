import React from "react";

const SubmitBtn = (props) => {
  return (
    <div className="submit--button" onClick={() => props.submit(props.display)}>
      {props.display}
    </div>
  );
};

export default SubmitBtn;
