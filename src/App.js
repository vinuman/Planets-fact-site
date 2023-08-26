import React from "react";
import data from "./data.json";
import { useRef, useEffect, useContext } from "react";
import NavBar from "./NavBar";
import PlanetMob from "./PlanetMob";

export const UserContext = React.createContext();

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
