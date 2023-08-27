import React from "react";
import data from "./data.json";
import { useState } from "react";
import { selectedState } from "./features/selectSlice";
import { useSelector } from "react-redux";

const Planet = () => {
  const [overView, setOverView] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);
  const selectedPlanet = useSelector(selectedState);
  const filteredPlanet = data.filter((item, index) => index === selectedPlanet);
  const selectedIndex = data.findIndex((item) => item === filteredPlanet[0]);
  const color = data[selectedIndex].color;
  console.log(color);
  return (
    <>
      <div className="bg-[#070724] hidden sm:block md:flex md:justify-center  md:pb-4">
        <div className="flex justify-center  items-center  py-16 md:py-4 md:w-[40%] ">
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
        <div className="flex items-center md:items-start md:flex-col  p-12 md:p-16 md:justify-center md:w-[50%]">
          <div className="flex flex-col">
            <h1 className="text-white font-antonio text-[48px] md:text-[80px] tracking-wider uppercase font-bold pb-4 mb-2">
              {filteredPlanet[0].name}
            </h1>
            <p className="text-white font-spartan text-left  text-[14px] md:text-[16px] opacity-80 w-[80%] sm:w-[90%] sm:pb-4 tracking-widest">
              {overView
                ? filteredPlanet[0].overview.content
                : structure
                ? filteredPlanet[0].structure.content
                : filteredPlanet[0].geology.content}
            </p>
          </div>
          <div className="flex flex-col">
            <div
              onClick={() => {
                setOverView(true);
                setStructure(false);
                setSurface(false);
              }}
              className={`w-[280px] h-[40px] md:w-[350px] md:h-[48px] border border-gray-600 mb-3 flex justify-center items-center cursor-pointer ${
                overView && selectedIndex === 0
                  ? "bg-[#419EBB]"
                  : overView && selectedIndex === 1
                  ? "bg-[#F7CC7F]"
                  : overView && selectedIndex === 2
                  ? "bg-[#545BFE]"
                  : overView && selectedIndex === 3
                  ? "bg-[#FF6A45]"
                  : overView && selectedIndex === 4
                  ? "bg-[#ECAD7A]"
                  : overView && selectedIndex === 5
                  ? "bg-[#FCCB6B]"
                  : overView && selectedIndex === 6
                  ? "bg-[#65F0D5]"
                  : overView && selectedIndex === 7
                  ? "bg-[#497EFA]"
                  : ""
              }`}
            >
              <p className="text-white font-spartan tracking-widest uppercase text-[12px] md:text-[18px] font-bold">
                {" "}
                <span className=" opacity-75">01</span> {"   "} Overview
              </p>
            </div>
            <div
              onClick={() => {
                setOverView(false);
                setStructure(true);
                setSurface(false);
              }}
              className={`w-[280px] h-[40px] md:w-[350px] md:h-[48px] border border-gray-600 mb-3 flex justify-center items-center cursor-pointer ${
                structure && selectedIndex === 0
                  ? "bg-[#419EBB]"
                  : structure && selectedIndex === 1
                  ? "bg-[#F7CC7F]"
                  : structure && selectedIndex === 2
                  ? "bg-[#545BFE]"
                  : structure && selectedIndex === 3
                  ? "bg-[#FF6A45]"
                  : structure && selectedIndex === 4
                  ? "bg-[#ECAD7A]"
                  : structure && selectedIndex === 5
                  ? "bg-[#FCCB6B]"
                  : structure && selectedIndex === 6
                  ? "bg-[#65F0D5]"
                  : structure && selectedIndex === 7
                  ? "bg-[#497EFA]"
                  : ""
              }`}
            >
              <p className="text-white font-spartan tracking-widest uppercase text-[12px] md:text-[18px] font-bold">
                {" "}
                <span className=" opacity-75">02</span> {"   "} Internal
                structure
              </p>
            </div>
            <div
              onClick={() => {
                setOverView(false);
                setStructure(false);
                setSurface(true);
              }}
              className={`w-[280px] h-[40px] md:w-[350px] md:h-[48px] border border-gray-600 mb-3 flex justify-center items-center cursor-pointer ${
                surface && selectedIndex === 0
                  ? "bg-[#419EBB]"
                  : surface && selectedIndex === 1
                  ? "bg-[#F7CC7F]"
                  : surface && selectedIndex === 2
                  ? "bg-[#545BFE]"
                  : surface && selectedIndex === 3
                  ? "bg-[#FF6A45]"
                  : surface && selectedIndex === 4
                  ? "bg-[#ECAD7A]"
                  : surface && selectedIndex === 5
                  ? "bg-[#FCCB6B]"
                  : surface && selectedIndex === 6
                  ? "bg-[#65F0D5]"
                  : surface && selectedIndex === 7
                  ? "bg-[#497EFA]"
                  : ""
              }`}
            >
              <p className="text-white font-spartan tracking-widest uppercase text-[12px] md:text-[18px] font-bold">
                {" "}
                <span className=" opacity-75">03</span> {"   "} Surface geolgy
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  Details BOx division */}
      <div className="sm:flex hidden sm:justify-center px-12 sm:pb-24  md:p-4  bg-[#070724]">
        <div className="w-[164px] h-[88px] md:w-[250px] md:h-[100px] md:mr-4 border flex flex-col justify-center items-center text-[14px] uppercase">
          <h3 className="text-white font-spartan opacity-70">Rotation time</h3>
          <p className="text-white font-antonio text-[24px]">
            {filteredPlanet[0].rotation}
          </p>
        </div>
        <div className="w-[164px] h-[88px] md:w-[250px] md:h-[100px] md:mr-4  border flex flex-col justify-center items-center text-[14px] uppercase">
          <h3 className="text-white font-spartan opacity-70">
            Revolution time
          </h3>
          <p className="text-white font-antonio text-[24px]">
            {filteredPlanet[0].revolution}
          </p>
        </div>
        <div className="w-[164px] h-[88px] md:w-[250px] md:h-[100px] md:mr-4  border flex flex-col justify-center items-center text-[14px] uppercase">
          <h3 className="text-white font-spartan opacity-70">Radius</h3>
          <p className="text-white font-antonio text-[24px]">
            {filteredPlanet[0].radius}
          </p>
        </div>
        <div className="w-[164px] h-[88px] md:w-[250px] md:h-[100px] md:mr-4  border flex flex-col justify-center items-center text-[14px] uppercase">
          <h3 className="text-white font-spartan opacity-70">Average Temp</h3>
          <p className="text-white font-antonio text-[24px]">
            {filteredPlanet[0].temperature}
          </p>
        </div>
      </div>
    </>
  );
};

export default Planet;
