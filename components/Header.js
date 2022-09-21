import React from "react";
import SiderImage from "./SiderCard";

function Header() {
  return (
    <div className=" h-[630px] bg-white dark:bg-gray-900 md:flex border-b border-dashed border-gray-600">
      <div className="w-screen md:w-1/2 flex-col ">
        <div className=" p-12 md:ml-40    h-3/4 flex flex-col justify-evenly md:items-start">
          <h3 className="text-white text-2xl md:text-3xl uppercase tracking-widest font-bold ">
            Explore Mostly{" "}
            <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orange-400">
              Viewed
            </span>
          </h3>

          <div>
            <h1 className="text-gray-400 text-lg md:text-2xl font-semibold sm:leading-12">
              Courses Duniya is a{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-1 rounded">
                platform
              </span>{" "}
              where you can find the{" "}
              <span className="text-white ">free courses for yourself.</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mx-4">
        <SiderImage />
      </div>
    </div>
  );
}

export default Header;
