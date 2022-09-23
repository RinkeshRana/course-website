import React from "react";
import AllCourses from "../../components/AllCourses";
import Head from "next/head";

function index() {
  return (
    <div className="min-h-screen dark:bg-gray-900 p-2">
      <Head>
        <title>Courses Duniya - All Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllCourses />
    </div>
  );
}

export default index;
