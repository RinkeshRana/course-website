import Image from "next/image";
import React from "react";

function CourseHeader({ title, description, image }) {
  return (
    <div>
      <div className="flex flex-col items-center space-y-5 border-b border-dashed border-gray-600">
        <h2 className="text-white text-2xl md:text-4xl text-center font-bold uppercase mt-16 tracking-widest">
          {title}
        </h2>
        <div className="mt-5 w-full md:w-1/2 rounded-md ">
          <img src={image} alt="NextJS Firebase" width="100%" height="50%" />
        </div>
        <div>
          <h4 className="text-gray-400 md:text-3xl  p-5 tracking-wide">
            {description}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CourseHeader;
