import React from "react";
import { useNavigate } from "react-router";
import EmployeeIcon from "../../Icon/EmployeeIcon";
import DepartmentIcon from "../../Icon/DepartmentIcon";

function SubHeaderContent({placeholder, employee, onChange, onClick}) {
  const navigate = useNavigate();

  const handleCalendar = () => {
    return navigate("/home/");
  };

  const handleSearch = (e) => {
    if (onChange) onChange(e);
  }

  const handleCreation = () => {
    if(onClick) onClick()
  }

  return (
    <div className="flex flex-row place-items-center w-full">
      <div
        className="flex rounded-md shadow-sm self-center justify-between"
        role="group"
      >
{/*         <button
          type="button"
          onClick={handleCalendar}
          className="inline-flex items-center px-4 py-2 text-lg font-medium text-green-paradiso bg-white-sand border border-gray-200 rounded-l-lg hover:bg-gray-200 hover:text-green-paradiso focus:z-10 focus:ring-2 focus:ring-green-paradiso focus:text-green-paradiso"
        >
          View all
          <svg
            className="w-10 h-10 mr-12 ml-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z" />
          </svg>
        </button> */}

        <div className="inline-flex items-center text-lg font-medium text-green-paradiso bg-white-sand border  hover:text-green-paradiso focus:z-10 focus:ring-2 focus:ring-green-paradiso focus:text-green-paradiso rounded-l-md">
          <svg className="w-4 h-4 text-green-paradiso ml-3 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <input
            type="search"
            id="default-search"
            className="rounded-md inline-flex items-center px-4 py-2 text-lg font-medium text-green-paradiso bg-white-sand border-t border-none hover:bg-gray-200 hover:text-green-paradiso focus:z-10 focus:ring-2 focus:ring-green-paradiso focus:text-green-paradiso"
            onChange={handleSearch}
            placeholder={placeholder}
            required
          />
        </div>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-lg font-medium text-green-paradiso bg-white-sand border border-gray-200 rounded-r-md hover:bg-gray-200 hover:text-green-paradiso focus:z-10 focus:ring-2 focus:ring-green-paradiso focus:text-green-paradiso"
          onClick={handleCreation}
        >
          Add
          {employee ? <EmployeeIcon/> : <DepartmentIcon/>}
        </button>
      </div>
    </div>
  );
}

export default SubHeaderContent;


