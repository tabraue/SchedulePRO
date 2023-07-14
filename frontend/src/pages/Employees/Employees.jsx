import React, { useEffect, useState } from "react";
import SubHeaderContent from "../../components/Header/SubHeaderContent/SubHeaderContent";
import {
  createEmployee,
  showAllEmployees,
} from "../../services/employee.service";
import Alert from "../../components/Alert/Alert";
import CloseIcon from "../../components/Icon/CloseIcon";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import ListEmployee from "../../components/CardEmployee/ListEmployee/ListEmployee";
import { showAllDepartments } from "../../services/department.service";
import DepartmentIcon from "../../components/Icon/DepartmentIcon";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [copyEmployees, setCopyEmployees] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isManager, setIsManager] = useState(false);
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertDenied, setShowAlertDenied] = useState(false);
  const [allDepartments, setAllDepartments] = useState([]);
  const [copyDepartments, setCopyDepartments] = useState([]);
  const [openDepartments, setOpenDepartments] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isManagerActive, setIsManagerActive] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  const searching = "Find an employee";
  const title = "Add an employee";
  const confirm = "Confirm";

  //BRINGS ALL EMPLOYEES INFORMATION FROM SERVICE
  const showAll = async () => {
    const data = await showAllEmployees();
    const departments = await showAllDepartments();
    setEmployees(data);
    setCopyEmployees(data);
    setAllDepartments(departments);
    setCopyDepartments(departments);
  };

  useEffect(() => {
    showAll();
  }, [refresh]);

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
    setEmail(email);
  };

  //VALIDATES EMAIL
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gi;
    return emailRegex.test(email) ? true : false;
  };

  // TAKES EMPLOYEE DEPARTMENT
  const handleDepartment = (department) => {
    const value = department.target.value.toLowerCase();
    const filterSearch = copyDepartments.filter((el) =>
      el.name.toLowerCase().includes(value)
    );
    setCopyDepartments(filterSearch);
    setSelectedDepartment(value);
    if (value.length <= 0) {
      setCopyDepartments(allDepartments);
    }
  };

  // TAKES EMPLOYEE POSITION
  const handlePosition = (position) => {
    setPosition(position);
  };

  const handleCreate = async () => {
    if (validateEmail(email) && department) {
      const res = await createEmployee(
        name,
        lastName,
        isManager,
        department,
        position.target.value,
        email.target.value
      );
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
          <div className="bg-blue-glacier col-start-1 rounded-lg m-10 grid h-128">
            {showCreate && (
              <div className="grid items-center justify-center">
                <div className=" grid auto-rows justify-items-stretch place-content-center content-center items-center border-solid border-2 border-blue-calypso p-6 rounded-lg bg-white-sand">
                  {showAlertSuccess && (
                    <Alert type="green" svg="green" text="Success!" />
                  )}
                  {showAlertDenied && (
                    <Alert type="red" svg="red" text="Please, check details." />
                  )}

                  <button
                    className="justify-self-end"
                    onClick={handleCloseCreate}
                  >
                    <CloseIcon />
                  </button>

                  <h1 className="text-3xl font-bold text-green-paradiso text-center ml-10 mr-10 mb-10">
                    {title}
                  </h1>

                  <div className="ml-10 mr-10 mb-10">
                    <label
                      htmlFor="employee-name"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Employee's Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" />
                      <input
                        type="text"
                        id="employee-name"
                        className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso  w-64"
                        placeholder="Jane"
                        onChange={handleName}
                      />
                    </div>
                  </div>

                  <div className="ml-10 mr-10 mb-10">
                    <label
                      htmlFor="employee-last-name"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Employee's Last Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" />
                      <input
                        type="text"
                        id="employee-last-name"
                        className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso  w-64"
                        placeholder="Doe"
                        onChange={handleLastName}
                      />
                    </div>
                  </div>

                  <div className="ml-10 mr-10 mb-10">
                    <label
                      htmlFor="employee-department"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Employee's Department
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" />
                        <input
                          type="text"
                          id="employee-department"
                          className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso w-64"
                          placeholder="Front desk"
                          onClick={() => setOpenDepartments(!openDepartments)}
                          onChange={handleDepartment}
                          value={selectedDepartment}
                        />
                      </div>
                    {openDepartments && copyDepartments.length > 0 && (
                      <ul className="mt-2 bg-white-sand border border-gray-200 rounded-md shadow-md">
                        {copyDepartments.map((department) => (
                          <li
                            key={department._id}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                              setSelectedDepartment(department.name);
                              setDepartment(department._id)
                              setOpenDepartments(false);
                            }}
                          >
                            Department: {department.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="ml-10 mr-10 mb-10  flex items-center">
                    <div className="relative  flex items-center">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" />
                      <input
                      id="link-checkbox"
                      type="checkbox"
                      value="ismanager"
                      className="w-4 h-4 text-blue-calypso bg-white-sand border-gray-l rounded focus:ring-blue-glacier "
                      required
                      checked={isChecked} 
                      onChange={handleChecked}
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="ml-2 text-lg font-medium text-blue-calypso  flex items-center"
                    > Manager 
                    </label>
                    </div>
                  </div>


                  <div className="ml-10 mr-10 mb-10">
                    <label
                      htmlFor="position"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Position description
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 items-center">
                        <textarea
                          type="text"
                          id="position"
                          name="position"
                          className=" bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block w-64 resize-none"
                          placeholder="Checkin"
                          onChange={handlePosition}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="ml-10 mr-10 mb-10 mt-12">
                    <label
                      htmlFor="employee-email"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Employee's Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" />
                      <input
                        type="email"
                        id="employee-email"
                        className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso  w-64"
                        placeholder="jane@doe.com"
                        onChange={handleEmail}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-10">
                    <ButtonCustom
                      onClick={handleCreate}
                      text={confirm}
                      type="confirm"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>







          <div className="col-start-2 h-128">
            <div className="flex flex-col items-center scroll-auto overflow-y-scroll whitespace-nowrap p-2 h-[100%] m-3">
              {copyEmployees.length > 0 ? (
                copyEmployees.map((el) => (
                  <ListEmployee key={el._id} info={el} />
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
              copyEmployees.map((el) => <ListEmployee key={el._id} info={el} />)
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
