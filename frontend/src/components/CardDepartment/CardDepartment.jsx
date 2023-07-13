import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showEmployeesByDepartment } from "../../services/employee.service";
import CloseIcon from "../Icon/CloseIcon";

function CardDepartment({ info, onClick }) {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  const showEmployees = async (departmentId) => {
    const data = await showEmployeesByDepartment(departmentId);
    setEmployees(data);
  };

  useEffect(() => {
    showEmployees(info._id);
  }, []);

  const handleCalendar = () => {
    return navigate("/home/");
  };

  const handleClose = () => {
    if (onClick) onClick();
  };






  return (
    <>
    <div className="max-w-sm w-[400px] h-[220px] bg-white-sand border border-green-paradiso rounded-lg shadow">
      <button className="justify-self-end" onClick={handleClose}>
        <CloseIcon />
      </button>
      <div className="p-5">
        <Link to={`home/departments/${info._id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-paradiso text-center p-3">
            {info.name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-black text-center">
          {info.description}
        </p>
        <div className="flex flex-row space-x-5">
          <h3 className="text-md font-bold tracking-tight text-green-paradiso justify-center self-center p-2">
            Manager:
          </h3>
          {employees.map(
            (el) =>
              el.is_manager && (
                <p className="ml-6 justify-center self-center" key={el._id}>
                  <Link to={`home/employees/${el._id}`}>{el.name}</Link>
                </p>
              )
          )}
          <button
            type="button"
            onClick={handleCalendar}
            className="flex items-center px-3 py-2 text-sm font-medium text-center hover:text-white hover:bg-green-paradiso rounded-lg bg-white-sand text-green-paradiso focus:ring-4 focus:outline-none focus:ring-green-paradiso ml-auto"
          >
            <svg
              className="w-10 h-10 mr-12 ml-12"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default CardDepartment;
