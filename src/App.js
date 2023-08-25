import data from "./data.json";
import { useState } from "react";
import NavBar from "./NavBar";
import PlanetMob from "./PlanetMob";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <PlanetMob />
      </div>
    </>
  );
}

export default App;
