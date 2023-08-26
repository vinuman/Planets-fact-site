import React from "react";
import NavBar from "./NavBar";
import PlanetMob from "./PlanetMob";
import Planet from "./Planet";

export const UserContext = React.createContext();

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <PlanetMob />
        <Planet />
      </div>
    </>
  );
}

export default App;
