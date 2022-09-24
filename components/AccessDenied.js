import React from "react";
import { signIn } from "next-auth/react";
function AccessDenied() {
  return (
    <div className="h-screen dark:bg-gray-900 flex flex-col items-center justify-center p-2">
      {/* custom signin page */}
      <h3 className="text-3xl font-bold dark:text-white text-center">
        You need to be signed to upload a course
      </h3>

      <button
        className="bg-blue-400 text-white px-4 py-2 rounded-md mt-4 w-full md:w-24"
        onClick={signIn}
      >
        Signin
      </button>
    </div>
  );
}

export default AccessDenied;
