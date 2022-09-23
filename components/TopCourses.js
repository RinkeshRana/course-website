import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

function TopCourses({ title, description, categoryId }) {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`/api/get-course?categoryId=${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900  h-[630px] border-b border-gray-600 border-dotted">
      <div className="p-4">
        <div className="text-center text-black dark:text-white font-bold text-2xl uppercase tracking-widest mt-5">
          {title}
        </div>
        <div className="dark:text-gray-400 font-semibold  text-center uppercase mt-5">
          {description}
        </div>
      </div>
      <div className="md:mx-3 flex flex-row overflow-x-scroll rounded-sm p-1 scrollbar-thin dark:scrollbar-track-gray-400/30 dark:scrollbar-thumb-purple-700/80  scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {courses &&
          courses.map((course) => (
            <CourseCard
              key={course.slug}
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

export default TopCourses;
