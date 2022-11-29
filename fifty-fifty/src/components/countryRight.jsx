import React from "react";
import SubmitHigher from "./submitHigher";
import SubmitLess from "./submitLess";

const CountryRight = (props) => {
  return (
    <div className="label">
      <div>{props.display}</div>
      <div>{props.population}</div>
      <SubmitHigher submit={props.submit} />
      <SubmitLess submit={props.submit} />
    </div>
  );
};

export default CountryRight;
