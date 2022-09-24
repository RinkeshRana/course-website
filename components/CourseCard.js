import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function CourseCard({ slug, title, shortDescription, image }) {
  const router = useRouter();
  const openCourse = () => {
    router.push(`/course/${slug}`);
  };
  return (
    <div className="text-white bg-gray-800 md:max-h-[400px] md:min-w-[400px] md:max-w-[400px] max-h-[360px] min-w-[310px] max-w-[310px] md:p-4 p-1 m-2 shadow-lg rounded">
      <div className="flex flex-col items-center justify-evenly h-full w-full space-y-2">
        <div className="w-full">
          <img
            src={`${image}`}
            alt="Image not available"
            className="rounded shadow-sm "
            loading="lazy"
          />
        </div>
        <div className="w-full mb-2">
          <h2 className="md:text-xl text-lg font-bold uppercase text-center tracking-wide line-clamp-2">
            {title}
          </h2>
          <div className="flex-col flex  justify-evenly ">
            <h4 className="text-center text-gray-400 md:text-lg mt-2 text-sm flex-1 line-clamp-2">
              {shortDescription}
            </h4>
            <button
              className="bg-green-600  w-full text-xs text-white font-bold py-2 rounded mt-4 "
              onClick={openCourse}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
