import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function CourseCard({ slug, title, shortDescription, image }) {
  const router = useRouter();
  const openCourse = () => {
    router.push(`/course/${slug}`);
  };
  return (
    <div className="text-white bg-gray-800 min-w-[300px] max-w-[500px]  sm:min-w-[500px] md:p-4 p-1 m-2 hover:shadow-lg ">
      <div>
        <Image
          src={image}
          alt="Picture of the author"
          width={500}
          height={270}
          className="rounded shadow-sm"
        />
        <h2 className="md:text-xl text-lg font-bold uppercase text-center tracking-wide ">
          {title}
        </h2>
        <div className="flex-col flex  justify-evenly">
          <h4 className="text-center text-gray-400 md:text-lg mt-2 text-sm flex-1 truncate">
            {shortDescription}
          </h4>
          <button
            className="bg-green-600 w-full text-xs text-white font-bold py-2 rounded mt-4"
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
