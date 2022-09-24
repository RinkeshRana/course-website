import Head from "next/head";
import React from "react";
import CourseDetails from "../../components/CourseDetails";
import CourseDownload from "../../components/CourseDownload";
import CourseHeader from "../../components/CourseHeader";

function course({ course }) {
  return (
    <div className=" bg-white dark:bg-gray-900 p-3 min-h-screen">
      <Head>
        <title>{course.title}</title>
        <meta name="description" content={course.shortDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CourseHeader
        title={course.title}
        image={course.image}
        description={course.description}
      />
      <div className="dark:text-white text-xl md:text-3xl  font-bold tracking-widest mt-5 p-2 border-b border-dashed border-gray-600">
        <CourseDetails learningPoints={course.learningPoints} />
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
    `http://${context.req.headers.host}/api/get-course?slug=${courseName}`
  );

  // check if the course exists
  try {
    const course = await res.json();
    return {
      props: {
        course,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
}
