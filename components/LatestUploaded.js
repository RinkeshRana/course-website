import React, { useEffect, useState } from "react";
import { getServerSideProps } from "../pages/course/[course]";
import CourseCard from "./CourseCard";

function LatestUploaded() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(courses);
      });
  }, []);
  console.log(courses.data);
  return (
    <div className="bg-white dark:bg-gray-900  h-[630px]">
      <div className="p-4">
        <div className="text-center text-white font-bold text-2xl uppercase tracking-widest mt-5">
          Recently Uploaded
        </div>
        <div className="text-gray-400 font-semibold md:text-center text-justify uppercase mt-5">
          Check out the latest courses uploaded on the platform. You can also
          contribute to the platform by uploading your own courses.
        </div>
      </div>
      <div className="md:mx-3 flex flex-row overflow-x-auto rounded-sm p-1 2xl:justify-center">
        {courses.data &&
          courses.data.map((course) => (
            <CourseCard
              key={course.id}
              slug={course.slug}
              title={course.title}
              shortDescription={course.shortDescription}
              image={course.image}
            />
          ))}
      </div>
    </div>
  );
}

export default LatestUploaded;
