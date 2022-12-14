import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

function NavBar() {
  const router = useRouter();
  const searchInputRef = useRef();

  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const switchSearch = () => {
    setNavbarOpen(true);
    searchInputRef.current.focus();
  };

  const switchNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchInput.length > 0) {
        fetch(`/api/get-course?search=${searchInput}`)
          .then((res) => res.json())
          .then((data) => {
            setSearchData(data);
          });
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  return (
    <div>
      <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 shadow-md">
        <div className="container flex flex-wrap justify-between items-center mx-auto relative">
          {searchData?.length >= 1 && (
            <div className="absolute top-24 md:top-14 dark:bg-gray-800 bg-white shadow-lg rounded-md w-full md:w-1/3 z-50 md:right-0 border-2 border-gray-700 ">
              <div className="p-2">
                {searchData.map((course) => (
                  <div
                    key={course.slug}
                    className="flex flex-row items-center space-x-2 p-1 md:p-2 cursor-pointer hover:bg-gray-200 duration-150 hover:scale-105 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => {
                      router.push(`/course/${course.slug}`);
                      setSearchInput("");
                      setSearchData(null);
                    }}
                  >
                    <div className="flex flex-col">
                      <div className="text-gray-900 dark:text-gray-300 font-semibold  hover:text-gray-200">
                        {course.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <a onClick={() => router.push("/")} className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white uppercase tracking-wider">
              Courses Duniya
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={switchSearch}
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="hidden relative md:block s">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Try searching a course..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={switchNavbar}
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={` justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-search
            ${navbarOpen ? "block" : "hidden"}
            `}
          >
            <div className="relative mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={searchInput}
                ref={searchInputRef}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/">
                  <span
                    className={`block py-2 pr-4 pl-3 rounded md:bg-transparent  md:p-0 tracking-wider uppercase cursor-pointer ${
                      router.pathname === "/"
                        ? "dark:text-white text-white md:text-blue-700 bg-blue-700"
                        : "text-gray-900 dark:text-gray-500"
                    }`}
                    aria-current="page"
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/course">
                  <span
                    className={`block py-2 pr-4 pl-3 rounded md:bg-transparent  md:p-0 tracking-wider uppercase cursor-pointer ${
                      router.pathname === "/course"
                        ? "dark:text-white text-white md:text-blue-700 bg-blue-700"
                        : "text-gray-900 dark:text-gray-500"
                    }`}
                  >
                    All Courses
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/upload">
                  <span
                    className={`block py-2 pr-4 pl-3 rounded md:bg-transparent  md:p-0 tracking-wider uppercase cursor-pointer ${
                      router.pathname === "/upload"
                        ? "dark:text-white text-white md:text-blue-700 bg-blue-700"
                        : "text-gray-900 dark:text-gray-500"
                    }`}
                  >
                    Upload Course
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
