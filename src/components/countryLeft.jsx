import React from "react";

const CountryLeft = (props) => {
  return (
    <div className={props.transition ? "label submit--transition" : "label"}>
      <div>{props.display}</div>
      <div>{props.population}</div>
    </div>
  );
};

export default CountryLeft;
