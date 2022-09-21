import Image from "next/image";
import React from "react";

function SiderImage() {
  return (
    <div className="h-3/4 flex justify-center items-center ">
      <div className="">
        <Image
          src={"/sliderimg.png"}
          alt="Thumbnail not available"
          width={500}
          height={300}
          className="rounded shadow-sm"
        />
        <div className="text-white text-xl md:text-2xl tracking-wider dark:text-gray-400 md:w-3/4 md:text-left text-center">
          Learn firebase in 100 seconds.
        </div>
      </div>
    </div>
  );
}

export default SiderImage;
