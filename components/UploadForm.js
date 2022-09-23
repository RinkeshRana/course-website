import React, { useState } from "react";

function UploadForm() {
  const [objectives, setObjectives] = useState(1);

  const addObjective = () => {
    setObjectives(objectives + 1);
  };

  const removeObjective = () => {
    setObjectives(objectives - 1);
  };

  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
    downloadLink: "",
    learningPoints: [],
  });

  const uploadCourse = async () => {
    console.log(data);

    if (data.title.length < 5) {
      alert("Title must be at least 5 characters long");
      return;
    } else if (data.description.length < 20) {
      alert("Description must be at least 20 characters long");
      return;
    }

    if (
      data.title.length > 10 &&
      data.description.length > 10 &&
      data.image &&
      data.downloadLink
    ) {
      const res = await fetch("/api/add-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      console.log(json);
      if (json.message) {
        alert(json.message);
      } else {
        alert("Course uploaded successfully");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className=" dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center rounded-lg p-3 md:p-16 w-full md:w-min ">
          <h1 className="text-xl sm:text-2xl font-bold mb-10 uppercase tracking-widest dark:text-white ">
            Upload Your Course
          </h1>
          <div className="flex flex-col mb-4 w-full">
            <label
              className="mb-2 font-bold md:text-lg text-gray-900 dark:text-white"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="outline-none  bg-slate-500/10 dark:bg-slate-400/10 rounded-sm border-b px-1 md:px-6 py-2 md:py-3 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-green-500/40 dark:focus:text-green-300/40 hover:border-green-500/40 md:md:w-96 w-full"
              type="text"
              id="title"
              placeholder="Title of the course"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <label
              className="mb-2 font-bold md:text-lg text-gray-900 dark:text-white"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="outline-none bg-slate-500/10 dark:bg-slate-400/10 rounded-sm border-b px-1 md:px-6 py-2 md:py-3 border-[#242424] text-gray-500 placeholder-gray-500  focus:border-green-500/40 dark:focus:text-green-300/40 hover:border-green-500/40 md:w-96"
              type="text"
              id="description"
              placeholder="Description of the course"
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <div className="mb-2 flex space-x-3">
              <label
                className="mb-2 font-bold md:text-lg text-gray-900 dark:text-white"
                htmlFor="title"
              >
                Learning Objectives
              </label>

              <button
                className="w-7 md:w-10 bg-green-400 rounded-md"
                onClick={addObjective}
              >
                +
              </button>

              {objectives > 1 && (
                <button
                  className="w-7 md:w-10 bg-green-400 rounded-md"
                  onClick={removeObjective}
                >
                  -
                </button>
              )}
            </div>
            {
              // This is where the objectives will be added
              [...Array(objectives)].map((e, i) => (
                <input
                  key={i}
                  className="outline-none bg-slate-500/10 dark:bg-slate-400/10 rounded-sm border-b px-1 md:px-6 py-2 md:py-3 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-green-500/40 dark:focus:text-green-300/40 hover:border-green-500/40 md:md:w-96 w-full my-1"
                  type="text"
                  id="title"
                  placeholder="Learning Objective"
                  value={data.learningPoints[i]}
                  onChange={(e) => {
                    const objectives = [...data.learningPoints];
                    objectives[i] = e.target.value;
                    setData({ ...data, learningPoints: objectives });
                  }}
                />
              ))
            }
          </div>
          <div className="flex flex-col mb-4 w-full">
            <label
              className="mb-2 font-bold md:text-lg text-gray-900 dark:text-white"
              htmlFor="title"
            >
              Course Image Link (1280x720)
            </label>
            <input
              className="outline-none bg-slate-500/10 dark:bg-slate-400/10 rounded-sm border-b px-1 md:px-6 py-2 md:py-3 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-green-500/40 dark:focus:text-green-300/40 hover:border-green-500/40 md:w-96"
              type="text"
              id="title"
              placeholder="https://example.com/image.png"
              value={data.image}
              onChange={(e) => setData({ ...data, image: e.target.value })}
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <label
              className="mb-2 font-bold md:text-lg text-gray-900 dark:text-white"
              htmlFor="title"
            >
              Course Download Link
            </label>
            <input
              className="outline-none bg-slate-500/10 dark:bg-slate-400/10 rounded-sm border-b px-1 md:px-6 py-2 md:py-3 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-green-500/40 dark:focus:text-green-300/40 hover:border-green-500/40 md:w-96"
              type="text"
              id="title"
              placeholder="https://example.com/marketing.zip"
              value={data.downloadLink}
              onChange={(e) =>
                setData({ ...data, downloadLink: e.target.value })
              }
            />
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={uploadCourse}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadForm;
