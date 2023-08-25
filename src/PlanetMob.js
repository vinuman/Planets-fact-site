import React from "react";
import data from "./data.json";
import venus from "./assets/planet-venus.svg";

const PlanetMob = () => {
  const selectedPlanet = 1;
  const filteredPlanet = data.filter((item, index) => index === selectedPlanet);
  console.log(filteredPlanet[0].images.internal);
  console.log(venus);

  return (
    <>
      <div className="sm:hidden bg-[#070724]">
        <nav className="flex justify-between w-[100%]  px-6 py-4 mb-2  border-t-2  border-gray-700">
          <p className=" uppercase font-spartan text-white font-semibold tracking-widest cursor-pointer text-[0.8rem]">
            Overview
          </p>
          <p className=" uppercase font-spartan text-white font-semibold tracking-widest cursor-pointer text-[0.8rem]">
            Structure
          </p>
          <p className=" uppercase font-spartan text-white font-semibold tracking-widest cursor-pointer text-[0.8rem]">
            Surface
          </p>
        </nav>
        <div className="flex justify-center items-center pt-[80px] pb-[40px] ">
          <img
            className=" w-[250px] h-[250px]"
            src={filteredPlanet[0].images.planet}
            alt={filteredPlanet[0].name}
          ></img>
        </div>
        <div className="flex flex-col justify-center items-center  px-12 py-8">
          <h1 className="text-white font-antonio text-[40px] uppercase font-bold pb-4 mb-2">
            {filteredPlanet[0].name}
          </h1>
          <p className="text-white font-spartan text-center text-[16px] opacity-80">
            {filteredPlanet[0].overview.content}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  py-8 ">
          <div className="w-[90%] h-[48px] border border-gray-500 flex justify-between items-center px-4 mb-2">
            <p className="text-white font-spartan text-[16px]">Rotation time</p>
            <h2 className="text-white font-antonio text-[24px]">
              {filteredPlanet[0].rotation}
            </h2>
          </div>
          <div className="w-[90%] h-[48px] border border-gray-500 flex justify-between items-center px-4 mb-2">
            <p className="text-white font-spartan text-[16px]">
              Revolution time
            </p>
            <h2 className="text-white font-antonio text-[24px]">
              {filteredPlanet[0].revolution}
            </h2>
          </div>
          <div className="w-[90%] h-[48px] border border-gray-500 flex justify-between items-center px-4 mb-2">
            <p className="text-white font-spartan text-[16px]">Radius</p>
            <h2 className="text-white font-antonio text-[24px]">
              {filteredPlanet[0].radius}
            </h2>
          </div>
          <div className="w-[90%] h-[48px] border border-gray-500 flex justify-between items-center px-4 mb-2">
            <p className="text-white font-spartan text-[16px]">Average Temp</p>
            <h2 className="text-white font-antonio text-[24px]">
              {filteredPlanet[0].temperature}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetMob;
