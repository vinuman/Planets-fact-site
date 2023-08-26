import React from "react";
import data from "./data.json";
import { useState } from "react";
import { selectedState } from "./features/selectSlice";
import { useSelector } from "react-redux";

const PlanetMob = () => {
  const [overView, setOverView] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);
  const selectedPlanet = useSelector(selectedState);
  const filteredPlanet = data.filter((item, index) => index === selectedPlanet);
  const selectedIndex = data.findIndex((item) => item === filteredPlanet[0]);

  return (
    <>
      <div className="sm:hidden bg-[#070724]">
        <nav className="flex justify-between w-[100%]  px-6 py-4 mb-2  border-t-2  border-gray-700">
          <p
            onClick={() => {
              setOverView(true);
              setStructure(false);
              setSurface(false);
            }}
            className={`uppercase font-spartan text-white font-semibold tracking-widest cursor-pointer text-[1rem] ${
              overView ? "border-b-4 " : ""
            } ${
              selectedIndex === 0
                ? "border-[#DEF4FC]"
                : selectedIndex === 1
                ? "border-[#F7CC7F]"
                : selectedIndex === 2
                ? "border-[#545BFE]"
                : selectedIndex === 3
                ? "border-[#FF6A45]"
                : selectedIndex === 4
                ? "border-[#ECAD7A]"
                : selectedIndex === 5
                ? "border-[#FCCB6B]"
                : selectedIndex === 6
                ? "border-[#65F0D5]"
                : "border-[#497EFA]"
            } `}
          >
            Overview
          </p>
          <p
            onClick={() => {
              setOverView(false);
              setStructure(true);
              setSurface(false);
            }}
            className={`uppercase font-spartan text-white font-semibold tracking-widest cursor-pointer text-[1rem] ${
              structure ? "border-b-4 " : ""
            } ${
              selectedIndex === 0
                ? "border-[#DEF4FC]"
                : selectedIndex === 1
                ? "border-[#F7CC7F]"
                : selectedIndex === 2
                ? "border-[#545BFE]"
                : selectedIndex === 3
                ? "border-[#FF6A45]"
                : selectedIndex === 4
                ? "border-[#ECAD7A]"
                : selectedIndex === 5
                ? "border-[#FCCB6B]"
                : selectedIndex === 6
                ? "border-[#65F0D5]"
                : "border-[#497EFA]"
            } `}
          >
            Structure
          </p>
          <p
            onClick={() => {
              setOverView(false);
              setStructure(false);
              setSurface(true);
            }}
            className={`uppercase font-spartan text-white font-semibold tracking-widest cursor-pointer text-[1rem] ${
              surface ? "border-b-4 " : ""
            } ${
              selectedIndex === 0
                ? "border-[#DEF4FC]"
                : selectedIndex === 1
                ? "border-[#F7CC7F]"
                : selectedIndex === 2
                ? "border-[#545BFE]"
                : selectedIndex === 3
                ? "border-[#FF6A45]"
                : selectedIndex === 4
                ? "border-[#ECAD7A]"
                : selectedIndex === 5
                ? "border-[#FCCB6B]"
                : selectedIndex === 6
                ? "border-[#65F0D5]"
                : "border-[#497EFA]"
            }`}
          >
            Surface
          </p>
        </nav>
        <div className="flex justify-center items-center pt-[80px] pb-[40px] ">
          {overView ? (
            <img
              className=" w-[250px] h-[250px]"
              src={filteredPlanet[0].images.planet}
              alt={filteredPlanet[0].name}
            ></img>
          ) : structure ? (
            <img
              className=" w-[250px] h-[250px]"
              src={filteredPlanet[0].images.internal}
              alt={filteredPlanet[0].name}
            ></img>
          ) : (
            <div className="relative">
              <img
                className=" w-[250px] h-[250px]"
                src={filteredPlanet[0].images.planet}
                alt={filteredPlanet[0].name}
              ></img>
              <img
                className=" w-[170px] h-[190px] absolute top-[50%] left-[15%]"
                src={filteredPlanet[0].images.geology}
                alt={filteredPlanet[0].name}
              ></img>
            </div>
          )}
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
