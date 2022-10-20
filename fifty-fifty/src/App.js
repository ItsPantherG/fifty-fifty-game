import "./App.css";
import React from "react";
import scrapeWeb from "./scrapers";

function App() {
  scrapeWeb(`https://en.wikipedia.org/wiki/Nigeria`);
  return <div>population</div>;
}

export default App;
