import React, { useEffect, useState } from "react";
import SubHeaderContent from "../../components/Header/SubHeaderContent/SubHeaderContent";
import {
  createEmployee,
  showAllEmployees,
} from "../../services/employee.service";
import Alert from "../../components/Alert/Alert";
import CloseIcon from "../../components/Icon/CloseIcon";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import ListEmployee from "../../components/ListEmployee/ListEmployee";
import { showAllDepartments } from "../../services/department.service";
import { useLocation } from "react-router-dom";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [copyEmployees, setCopyEmployees] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isManager, setIsManager] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertDenied, setShowAlertDenied] = useState(false);
  const [copyDepartments, setCopyDepartments] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isManagerActive, setIsManagerActive] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  const [flagDelete, setFlagDelete] = useState(false);

  const searching = "Find an employee";
  const title = "Add an employee";
  const confirm = "Confirm";

  const location = useLocation();
  const paramValue = location.state?.param;

  //BRINGS ALL EMPLOYEES INFORMATION FROM SERVICE
  const showAll = async () => {
    const data = await showAllEmployees();
    const departments = await showAllDepartments();
    setEmployees(data);
    setCopyEmployees(data);
    setCopyDepartments(departments);
  };

  useEffect(() => {
    showAll();
  }, [refresh, flagDelete]);

  //FLAG TRUE ARRIVES FROM HOME TO SHOW THE CREATION PANEL DIRECTLY
  useEffect(() => {
    setShowCreate(paramValue || false);
  }, [paramValue]);

  // TAKES EMPLOYEE NAME
  const handleName = (name) => {
    if (name.target.value.length !== 0 || name.target.value.length !== "")
      setName(name.target.value);
  };

  // TAKES EMPLOYEE LASTNAME
  const handleLastName = (lastName) => {
    if (
      lastName.target.value.length !== 0 ||
      lastName.target.value.length !== ""
    )
      setLastName(lastName.target.value);
  };

  // CHECKS IF EMPLOYEE IS MANAGER OR NOT (DEFAULT NOT MANAGER)
  const handleChecked = () => {
    setisChecked(!isChecked);
    setIsManager(!isManager);
    setIsManagerActive(!isManagerActive);
  };

  // TAKES EMPLOYEE EMAIL
  const handleEmail = (email) => {
    setEmail(email.target.value);
  };

  //VALIDATES EMAIL
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gi;
    return emailRegex.test(email) ? true : false;
  };

  // TAKES EMPLOYEE DEPARTMENT
  const handleDepartment = (id) => {
    setSelectedDepartment(id);
  };

  // TAKES EMPLOYEE POSITION
  const handlePosition = (position) => {
    if (position.target.value === "") {
      setPosition("");
    } else {
      setPosition(position.target.value);
    }
  };

  const cleanInputs = () => {
    setName("");
    setLastName("");
    setSelectedDepartment("");
    setEmail("");
    setPosition("");
    setisChecked(false);
  };

  const handleCreate = async () => {
    if (validateEmail(email) && selectedDepartment !== "") {
      const res = await createEmployee(
        name,
        lastName,
        isManager,
        email,
        selectedDepartment,
        position
      );
      if (res) {
        setShowAlertSuccess(true);
        setRefresh(!refresh);
        const delay = setTimeout(() => {
          setShowAlertSuccess(false);
        }, 1000);
        cleanInputs();
        return () => clearTimeout(delay);
      } else {
        setShowAlertDenied(true);
        const delay = setTimeout(() => {
          setShowAlertDenied(false);
        }, 2000);
        return () => clearTimeout(delay);
      }
    } else {
      setShowAlertDenied(true);
      const delay = setTimeout(() => {
        setShowAlertDenied(false);
      }, 2000);
      return () => clearTimeout(delay);
    }
  };

  // HANDLES SEARCH BAR
  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    const filterSearch = copyEmployees.filter((el) =>
      el.name.toLowerCase().includes(value)
    );
    setCopyEmployees(filterSearch);
    if (value.length <= 0) {
      setCopyEmployees(employees);
    }
  };

  // APPEARS CREATE DEPARTMENT WHEN ADD BUTTON CLICKED
  const handleCreation = () => {
    setShowCreate(true);
  };

  // DISAPPEARS CREATE DEPARTM WHEN X ICON CLICKED
  const handleCloseCreate = () => {
    setShowCreate(false);
  };




  return (
    <>
      <div className="grid grid-cols-6 grid-rows-2 m-5 max-h-screen">
        <div className="col-start-1 col-end-7 row-start-1 justify-self-center grid m-3">
          <h1 className="text-3xl font-extrabold text-green-paradiso text-center justify-self-center self-center">
            Employee management
          </h1>
        </div>

        <div className="col-start-1 col-end-7 row-start-2 justify-self-end grid mr-10 mt-3">
          <SubHeaderContent
            onChange={handleSearch}
            onClick={handleCreation}
            placeholder={searching}
            employee={true}
          />
        </div>
      </div>

      {showCreate ? (
        <div className="grid grid-cols-2 ">
          <div className="bg-blue-glacier col-start-1 rounded-md grid h-128 m-10 ">
            {showCreate && (
              <div className="grid items-center justify-center h-full overflow-auto">
                <div className=" grid  auto-rows-max grid-flow-row justify-items-stretch place-content-center content-center items-center border-solid border-2 border-blue-calypso p-6 rounded-md bg-white-sand">
                  <button
                    className="justify-self-end row-span-1 col-start-1 col-end-3"
                    onClick={handleCloseCreate}
                  >
                    <CloseIcon />
                  </button>

                  <h1 className="m-auto p-3 text-3xl font-bold text-green-paradiso text-center row-span-1 col-start-1 col-end-3 justify-self-center self-center inset-y-0 left-0 flex items-center ">
                    {title}
                  </h1>

                  <div className="m-auto p-3 row-start-3 col-start-1">
                    <label
                      htmlFor="employee-name"
                      className="block mb-2 text-sm font-medium text-black  self-center"
                    >
                      Employee's Name
                    </label>
                    <input
                      type="text"
                      id="employee-name"
                      className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso w-64"
                      onChange={handleName}
                      value={name}
                    />
                  </div>

                  <div className="m-auto p-3 row-start-3 col-start-2">
                    <label
                      htmlFor="employee-last-name"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Employee's Last Name
                    </label>
                    <input
                      type="text"
                      id="employee-last-name"
                      className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso  w-64"
                      onChange={handleLastName}
                      value={lastName}
                    />
                  </div>

                  <div className="m-auto p-3 row-start-4 col-start-1 relative">
                    <label
                      htmlFor="employee-department"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Employee's Department
                    </label>
                    <select
                      onChange={(e) => handleDepartment(e.target.value)}
                      value={selectedDepartment}
                      className="justify-self-start  bg-white-sand border-blue-calypso text-black text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso w-64"
                    >
                      <option value="">Select Department</option>
                      {copyDepartments.map((department) => (
                        <option
                          key={department._id}
                          value={department._id}
                          className="px-4 py-2 cursor-pointer"
                        >
                          {department.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="m-auto p-3 row-start-5 col-start-1">
                    <label
                      htmlFor="position"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Position description
                    </label>
                    <textarea
                      type="text"
                      id="position"
                      name="position"
                      className=" bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block w-64 resize-none"
                      onChange={handlePosition}
                      value={position}
                    ></textarea>
                  </div>
                  <div className="m-auto p-3 row-start-4 col-start-2">
                    <label
                      htmlFor="employee-email"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Employee's Email
                    </label>
                    <input
                      type="email"
                      id="employee-email"
                      className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso  w-64"
                      onChange={handleEmail}
                      value={email}
                    />
                  </div>

                  <div className="grid grid-cols-2 justify-end row-start-5 col-span-2 p-5 self-end">
                    <div className="grid-cols-1 items-start justify-center self-center">
                      <input
                        id="link-checkbox"
                        type="checkbox"
                        value="ismanager"
                        className="w-4 h-4 text-blue-calypso bg-white-sand border-gray-l rounded focus:ring-blue-glacier mr-2 self-center"
                        required
                        checked={isChecked}
                        onChange={handleChecked}
                      />
                      <label
                        htmlFor="link-checkbox"
                        className="text-lg font-medium text-blue-calypso"
                      >
                        Manager
                      </label>
                    </div>
                    <div className="grid-col-2 items-start justify-center self-center">
                      <ButtonCustom
                        onClick={handleCreate}
                        text={confirm}
                        type="confirm"
                      />
                    </div>
                  </div>
                </div>
                {showAlertSuccess && (
                  <Alert type="green" svg="green" text="Success!" />
                )}
                {showAlertDenied && (
                  <Alert type="red" svg="red" text="Please, check details." />
                )}
              </div>
            )}
          </div>

          <div className="col-start-2 h-128 mt-3">
            <div className="flex flex-col items-center scroll-auto overflow-y-scroll whitespace-nowrap p-2 h-[100%] m-3">
              {copyEmployees.length > 0 ? (
                copyEmployees.map((el) => (
                  <ListEmployee
                    key={el._id}
                    info={el}
                    setFlagDelete={setFlagDelete}
                    flagDelete={flagDelete}
                  />
                ))
              ) : (
                <h1 className="text-3xl font-extrabold text-red-chestnut text-center p-5 justify-self-center min-h-[100%]">
                  Employee not found
                </h1>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="col-start-2 h-128">
          <div className="flex flex-col items-center scroll-auto overflow-y-scroll whitespace-nowrap p-2 h-[100%] m-3">
            {copyEmployees.length > 0 ? (
              copyEmployees.map((el) => (
                <ListEmployee
                  key={el._id}
                  info={el}
                  setFlagDelete={setFlagDelete}
                  flagDelete={flagDelete}
                />
              ))
            ) : (
              <h1 className="text-3xl font-extrabold text-red-chestnut text-center p-5 justify-self-center min-h-[100%]">
                Employee not found
              </h1>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Employees;


/*
                    <input
                      type="text"
                      id="employee-department"
                      className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso w-64"
                      onClick={() => setOpenDepartments(!openDepartments)}
                      onChange={handleDepartment}
                      value={selectedDepartment}
                    />
                    {openDepartments && copyDepartments.length > 0 && (
                      <ul className="mt-2 bg-white-sand border border-gray-200 rounded-md shadow-md max-h-40 overflow-y-scroll  absolute z-10">
                        {copyDepartments.map((department) => (
                          <li
                            key={department._id}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                              setSelectedDepartment(department.name);
                              setDepartment(department._id);
                              setOpenDepartments(false);
                            }}
                          >
                            Department: {department.name}
                          </li>
                        ))}
                      </ul>
                    )}

*/
