import React from "react";

function CourseDetails() {
  return (
    <div>
      <span className="uppercase">🔥What you will learn?</span>
      <ul className="list-disc text-light text-gray-400 md:text-xl text-sm list-inside ml-4 mt-8 leading-loose">
        <li className="">Custom Firebase usernames</li>
        <li>Bot-friendly content (SEO)</li>
        <li>Advanced SSR, SSG, and ISR techniques</li>
        <li>Firestore realtime CRUD and data modeling</li>
        <li>Reactive forms with react-hook-form</li>
        <li>Image file uploads</li>
        <li>Realtime hearts</li>
        <li>Security & Deployment</li>
      </ul>
    </div>
  );
}

export default CourseDetails;
