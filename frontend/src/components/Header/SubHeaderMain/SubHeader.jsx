import React from "react";
import { useNavigate } from "react-router-dom";

function SubHeader({ name }) {
  const navigate = useNavigate();


  const handleDepartments = () => {
    return navigate("/home/departments");
  };

  const handleEmployees = () => {
    return navigate("/home/");
  };

  return (
    <div className="flex flex-row p-10 place-items-center justify-between w-screen">
      <div className="">
        <h1 className="text-3xl font-extrabold text-blue-calypso">
          {name}
        </h1>
      </div>
      <div className="flex rounded-md shadow-sm self-center" role="group">
        <button
          type="button"
          onClick={handleDepartments}
          className="inline-flex items-center px-4 py-2 text-lg rounded-l-md font-medium text-green-paradiso bg-white-sand border-t border-b border-gray-200 hover:bg-gray-200 hover:text-green-paradiso focus:ring-2 focus:ring-green-paradiso focus:text-green-paradiso"
        >
          Add
          <svg
            className="w-10 h-10 mr-12 ml-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleEmployees}
          className="inline-flex items-center px-4 py-2 text-lg font-medium text-green-paradiso bg-white-sand border border-gray-200 rounded-r-md hover:bg-gray-200 hover:text-green-paradiso focus:ring-2 focus:ring-green-paradiso focus:text-green-paradiso"
        >
          Add
          <svg
            className="w-10 h-10 mr-12 ml-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 19"
          >
            <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
            <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SubHeader;