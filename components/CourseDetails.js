import React from "react";

function CourseDetails({ learningPoints }) {
  return (
    <div>
      <span className="uppercase ">🔥What you will learn?</span>
      <ul className="list-disc text-light text-gray-700 dark:text-gray-400 md:text-xl text-sm list-inside ml-4 mt-8 leading-loose">
        {learningPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
