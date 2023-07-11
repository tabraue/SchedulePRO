import React from "react";
import Icon from "../Icon/Icon";
import { Link, useNavigate } from "react-router-dom";

function HeaderMain() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    return navigate("/login");
  };

  const details = () => {
    return navigate("/home/details");
  };

  const departments = () => {
    return navigate("/home/departments");
  };

  const employees = () => {
    return navigate("/home/employees");
  };

  const employeesIcon = (
    <svg
      className="w-12 h-12 text-white-sand cursor-pointer"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 19"
    >
      <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
      <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
    </svg>
  );

  return (
    <nav className="bg-blue-calypso w-full z-20 top-0 left-0 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white-sand">
          <Link to={"/home/dashboard"}>SchedulePRO</Link>
        </span>
        <div className="flex">
          <ul className="flex gap-60 justify-center">
            <li className="justify-center" onClick={details}>
              <div className=" flex justify-center">
                <Icon
                  color="white"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </div>
              <p className="text-white-sand justify-center cursor-pointer">
                DETAILS
              </p>
            </li>
            <li className="justify-center" onClick={departments}>
              <div className=" flex justify-center">
                <Icon
                  color="white"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </div>
              <p className="text-white-sand cursor-pointer">DEPARTMENTS</p>
            </li>
            <li className="justify-center" onClick={employees}>
              <div className=" flex justify-center">{employeesIcon}</div>
              <p className="text-white-sand cursor-pointer">EMPLOYEES</p>
            </li>
          </ul>
        </div>

        <div className="flex md:order-2">
          <button onClick={logout}>
            <Icon
              color="black"
              d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HeaderMain;