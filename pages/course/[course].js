import Image from "next/image";
import Link from "next/link";
import React from "react";
import CourseCard from "../../components/CourseCard";
import CourseDetails from "../../components/CourseDetails";
import CourseDownload from "../../components/CourseDownload";
import CourseHeader from "../../components/CourseHeader";

function course({ course }) {
  return (
    <div className=" bg-white dark:bg-gray-900 p-3">
      <CourseHeader
        title={course.title}
        image={course.image}
        description={course.description}
      />
      <div className="text-white text-xl md:text-3xl  font-bold tracking-widest mt-5 p-2 border-b border-dashed border-gray-600">
        <CourseDetails />
      </div>

      {/* Download section */}
      <div className=" mt-5 p-2 ">
        <CourseDownload downloadLink={course.downloadLink} />
      </div>
    </div>
  );
}

export default course;

// hold
export async function getServerSideProps(context) {
  const courseName = context.query.course;
  const res = await fetch(
    `http://localhost:3000/api/getCourse?slug=${courseName}`
  );
  const course = await res.json();
  return {
    props: {
      course,
    },
  };
}
