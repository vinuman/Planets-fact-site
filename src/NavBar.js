import React from "react";
import hamburger from "./assets/icon-hamburger.svg";
import data from "./data.json";
import arrow from "./assets/icon-chevron.svg";
import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { selectPlanet } from "./features/selectSlice";

const NavBar = () => {
  const [ham, setHam] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      {/* Mobile div */}
      <nav className="sm:hidden flex justify-between items-center text-[1.6rem] bg-[#070724] font-semibold text-[#fff] p-4 pl-8 pr-12 uppercase">
        <h1>The planets</h1>
        <img
          onClick={() => setHam(!ham)}
          className={`w-[3rem] h-[1.6rem] cursor-pointer ${
            !ham ? "opacity-25" : ""
          }`}
          src={hamburger}
          alt="nav icon"
        ></img>
      </nav>
      <div
        className={`sm:hidden bg-[#070724] ${
          ham ? "hidden" : "flex flex-col"
        } absolute top-16 w-[100%] z-20`}
      >
        {data.map((item, index) => (
          <div
            onClick={() => {
              dispatch(selectPlanet(index));
              setHam(true);
            }}
            key={index}
            className="flex justify-between p-4 cursor-pointer border-b-[1px] border-[#141430]"
          >
            <div className="flex w-[40%] ">
              <div
                className={`w-[1.4rem] h-[1.4rem] rounded-full   ${
                  index === 0
                    ? "bg-[#DEF4FC]"
                    : index === 1
                    ? "bg-[#F7CC7F]"
                    : index === 2
                    ? "bg-[#545BFE]"
                    : index === 3
                    ? "bg-[#FF6A45]"
                    : index === 4
                    ? "bg-[#ECAD7A]"
                    : index === 5
                    ? "bg-[#FCCB6B]"
                    : index === 6
                    ? "bg-[#65F0D5]"
                    : "bg-[#497EFA]"
                }`}
              ></div>
              <p className="text-[#fff] font-semibold pl-8 text-[1.2rem]">
                {item.name}
              </p>
            </div>
            <img className="w-[1rem] h-[2rem]" src={arrow} alt="icon"></img>
          </div>
        ))}
      </div>
      {/* MOBILE DIV ENDS */}

      {/* TAB AND DESKTOP DIV */}

      <nav className=" px-8 py-4  sm:flex-col lg:flex-row lg:justify-between items-center bg-[#070724] hidden sm:flex lg:px-16 ">
        <h1 className=" font-antonio text-[36px] font-semibold text-white uppercase">
          The planets
        </h1>
        <div className="flex justify-around p-4  sm:w-[100%] lg:w-[80%] ">
          {data.map((item, index) => (
            <p
              onClick={() => {
                dispatch(selectPlanet(index));
              }}
              key={index}
              className="text-white font-spartan cursor-pointer uppercase opacity-80 hover:opacity-100 font-semibold"
            >
              {item.name}
            </p>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
