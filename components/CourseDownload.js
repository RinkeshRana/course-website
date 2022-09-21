import Link from "next/link";
import React from "react";

function CourseDownload({ downloadLink }) {
  return (
    <div>
      <h6 className="text-white text-xl md:text-3xl  font-bold tracking-widest ">
        📁 Download the course
      </h6>
      <div className="text-light text-gray-400 text-sm md:text-xl ml-4 mt-8 leading-loose hover:text-white hover:underline w-fit">
        <Link href={downloadLink}>🔘 Download Link</Link>
      </div>
    </div>
  );
}

export default CourseDownload;
