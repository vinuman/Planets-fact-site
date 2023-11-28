import React from "react";
import NavBar from "./NavBar";
import PlanetMob from "./PlanetMob";
import Planet from "./Planet";

function App() {
  return (
    <>
      <div className="App min-w-screen">
        <NavBar />
        <PlanetMob />
        <Planet />
      </div>
    </>
  );
}

export default App;
