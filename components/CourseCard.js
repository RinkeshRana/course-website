import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function CourseCard({ slug, title, shortDescription, image }) {
  const router = useRouter();
  const openCourse = () => {
    router.push(`/course/${slug}`);
  };
  return (
    <div className="text-white dark:bg-gray-800 min-w-[300px] max-w-[500px]  sm:max-w-[415px] md:p-4 p-1 m-2 shadow-lg bg-gray-800 ">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-sm max-h-sm">
          <img
            src={`${image}`}
            alt="Image not available"
            className="rounded shadow-sm "
            loading="lazy"
          />
        </div>
        <h2 className="md:text-xl text-lg font-bold uppercase text-center tracking-wide line-clamp-2">
          {title}
        </h2>
        <div className="flex-col flex  justify-evenly">
          <h4 className="text-center text-gray-400 md:text-lg mt-2 text-sm flex-1 line-clamp-2">
            {shortDescription}
          </h4>
          <button
            className="bg-green-600  w-full text-xs text-white font-bold py-2 rounded mt-4"
            onClick={openCourse}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
