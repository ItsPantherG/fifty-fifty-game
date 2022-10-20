import "./App.css";
import React, { useState } from "react";
import data from "./data";
import SubmitBtn from "./components/submitBtn";

function App() {
  const countries = data();
  const [country1, setCountry1] = useState(randomFromArr(countries));
  const [country2, setCountry2] = useState(randomFromArr(countries));
  const [points, setPoints] = useState(0);
  const [isLost, setIsLost] = useState();

  function randomFromArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function handleSubmit(country) {
    const newCountry1 = randomFromArr(countries);
    const newCountry2 = randomFromArr(countries);

    let winningCountry;
    if (country1.population > country2.population) {
      winningCountry = country1.land;
    } else {
      winningCountry = country2.land;
    }

    if (winningCountry === country) {
      setCountry1(newCountry1);
      setCountry2(newCountry2);
      setPoints(points + 1);
    } else {
      setIsLost(true);
    }
  }

  function again() {
    return (
      setIsLost(false),
      setCountry1(randomFromArr(countries)),
      setCountry2(randomFromArr(countries)),
      setPoints(0)
    );
  }

  return (
    <>
      {isLost ? (
        <div className="btn--wrapper">
          <div>RESULT = {points}</div>
          <div onClick={again}>AGAIN?</div>
        </div>
      ) : (
        <div className="btn--wrapper">
          <div>{points}</div>
          <SubmitBtn display={country1.land} submit={handleSubmit} />
          <SubmitBtn display={country2.land} submit={handleSubmit} />
        </div>
      )}
    </>
  );
}

export default App;
