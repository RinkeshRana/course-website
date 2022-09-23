import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
function index() {
  useEffect(() => {
    fetch("/api/get-course")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(courses);
        setLoading(false);
      });
  }, []);

  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  return (
    <div className="min-h-screen bg-gray-900 p-2">
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          courses.map((course) => (
            <CourseCard
              key={course.slug}
              title={course.title}
              description={course.description}
              shortDescription={course.description}
              image={course.image}
              slug={course.slug}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default index;
