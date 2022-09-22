import Image from "next/image";
import React from "react";

function SiderImage() {
  return (
    <div className="h-3/4 flex justify-center items-center ">
      {/* <div> */}
      <Image
        src={"/heroimage.jpg"}
        alt="Thumbnail not available"
        width={500}
        height={450}
        className="rounded shadow-sm"
      />
      {/* </div> */}
    </div>
  );
}

export default SiderImage;
