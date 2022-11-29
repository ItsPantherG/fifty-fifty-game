import "./App.css";
import React, { useState } from "react";
import CountryLeft from "./components/countryLeft";
import CountryRight from "./components/countryRight";
import data from "./countries.json";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBn4osMvfZrr_iFyO-xxsAcqDnZTfPbrwI",
  authDomain: "fifty-fifty-48396.firebaseapp.com",
  projectId: "fifty-fifty-48396",
  storageBucket: "fifty-fifty-48396.appspot.com",
  messagingSenderId: "216123407216",
  appId: "1:216123407216:web:49636f3c76118e6bcd6db5",
};

const app = initializeApp(firebaseConfig);

function App() {
  const [countries, setCountries] = useState(data);

  const [country1, setCountry1] = useState(randomFromArr(countries));
  const [country2, setCountry2] = useState(randomFromArr(countries));
  const [points, setPoints] = useState(0);
  const [isLost, setIsLost] = useState();
  const [transition, setTransition] = useState(false);

  function randomFromArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function formatPopulation(population) {
    return `${population.toLocaleString("en-US")}`;
  }

  function handleSubmit(input) {
    let userInput = input;
    const newCountry1 = country2;
    let newCountry2 = randomFromArr(countries);

    while (newCountry1 === newCountry2) {
      newCountry2 = randomFromArr(countries);
    }

    // initialize winnging country
    let answer;

    if (country1.population > country2.population) {
      answer = "less";
    } else {
      answer = "more";
    }

    //select if user is right
    if (answer === userInput) {
      setCountry1(newCountry1);
      setCountry2(newCountry2);
      setPoints(points + 1);
      setTransition(true);
      setTimeout(() => {
        setTransition(false);
      }, 1000);
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
      <div className="topper">
        Choose if the country has more or less inhabitants
      </div>
      {isLost ? (
        <div className="btn--wrapper">
          <div>RESULT = {points}</div>
          <div className="again" onClick={again}>
            AGAIN?
          </div>
        </div>
      ) : (
        <div className="btn--wrapper">
          <div className="points">Points: {points}</div>
          <div className="btn--wrapper-btn">
            <CountryLeft
              display={country1.land}
              population={formatPopulation(country1.population)}
              transition={transition}
            />
            <CountryRight display={country2.land} submit={handleSubmit} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
