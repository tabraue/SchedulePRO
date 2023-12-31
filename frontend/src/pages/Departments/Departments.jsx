import React, { useEffect, useRef, useState } from "react";
import {
  createDepartment,
  showAllDepartments,
} from "../../services/department.service";
import SubHeaderContent from "../../components/Header/SubHeaderContent/SubHeaderContent";
import ListDepartment from "../../components/ListDepartment/ListDepartment";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import Alert from "../../components/Alert/Alert";
import CloseIcon from "../../components/Icon/CloseIcon";
import { useLocation } from "react-router-dom";
import MailSentAlert from "../../components/Alert/MailSentAlert/MailSentAlert";


function Departments() {
  const [departments, setDepartments] = useState([]);
  const [copyDepartments, setCopyDepartments] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertDenied, setShowAlertDenied] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [flagDelete, setFlagDelete] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false)


  const namedepRef = useRef()
  const descdepRef = useRef()
  const searching = "Find a department";
  const title = "Create department";
  const confirm = "Confirm";

  const location = useLocation();
  const paramValue = location.state?.param;

  // BRINGS ALL DEPARTMENTS INFORMATION FROM SERVICE
  const showAll = async () => {
    const data = await showAllDepartments();
    setDepartments(data);
    setCopyDepartments(data);
  };

  useEffect(() => {
    showAll();
    handleCreate();
  }, [refresh, flagDelete]);

  useEffect(() => {
    setShowCreate(paramValue || false);
  }, [paramValue]);

  // TAKES DEPARTMENT NAME
  const handleName = (name) => {
    if (name.target.value.length !== 0 || name.target.value.length !== "")
      setName(name);
  };

  // TAKES DEPARTMENT DESCRIPTOIN
  const handleDescription = (description) => {
    const des = description.target.value
    if (
      des.length === 0 ||
      des === "" ||
      des === undefined
    ){
      setDescription("");
    } else {
      setDescription(des);
    }
  };

  // HANDLE FOR SEARCH BAR
  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    const filterSearch = copyDepartments.filter((el) =>
      el.name.toLowerCase().includes(value)
    );
    setCopyDepartments(filterSearch);
    if (value.length <= 0) {
      setCopyDepartments(departments);
    }
  };

  const cleanInputs = () => {
    setName("");
    namedepRef.current.value= ''
    setDescription("");
    descdepRef.current.value =''
  };

  // HANDLE TO CREATE A DEPARTMENT
  const handleCreate = async () => {
    if (name) {
      const res = await createDepartment(
        name.target.value,
        description
      );

      if (res) {
        setShowAlertSuccess(true);
        cleanInputs();
        const delay = setTimeout(() => {
          setShowAlertSuccess(false);
        }, 1000);
        setRefresh(!refresh);
        cleanInputs();
        return () => clearTimeout(delay);

      } else {
        setShowAlertDenied(true);
        const delay = setTimeout(() => {
          setShowAlertDenied(false);
        }, 2000);
        return () => clearTimeout(delay);
      }
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
            Department management
          </h1>
        </div>
        { isEmailSent && <div className="col-start-1 col-end-4 row-start-2 self-center text-center animate-bounce mt-3">
            <MailSentAlert/>
          </div>} 

        <div className="col-start-1 col-end-7 row-start-2 justify-self-end grid mr-10 mt-3 self-center">
          <SubHeaderContent
            onChange={handleSearch}
            onClick={handleCreation}
            placeholder={searching}
            employee={false}
          />
        </div>
      </div>

      {showCreate ? (
        <div className="grid grid-cols-2 ">
          <div className="bg-blue-glacier col-start-1 rounded-md m-10 grid h-128">
            {showCreate && (
              <div className="grid items-center justify-center">
                <div className=" grid auto-rows justify-items-stretch place-content-center content-center items-center border-solid border-2 border-blue-calypso p-6 rounded-md bg-white-sand">
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
                      htmlFor="department-name"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Department Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" />
                      <input
                        type="text"
                        id="department-name"
                        className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso  w-64"
                        onChange={handleName}
                        ref={namedepRef}
                      />
                    </div>
                  </div>

                  <div className="ml-10 mr-10 mb-10">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Description
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 items-center">
                        <textarea
                          type="text"
                          id="description"
                          className="h-20 bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block w-64 resize-none"
                          onChange={handleDescription}
                          ref={descdepRef}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-10">
                    <ButtonCustom
                      onClick={handleCreate}
                      text={confirm}
                      type="confirm"
                    />
                  </div>
                  {showAlertSuccess && (
                    <Alert type="green" svg="green" text="Success!" />
                  )}
                  {showAlertDenied && (
                    <Alert type="red" svg="red" text="Please, check details." />
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="col-start-2 h-128">
            <div className="flex flex-col items-center scroll-auto overflow-y-scroll whitespace-nowrap p-2 h-[100%] m-3">
              {copyDepartments && copyDepartments.length > 0 ? (
                copyDepartments.map((el) => (
                  <ListDepartment
                    key={el._id}
                    info={el}
                    setFlagDelete={setFlagDelete}
                    flagDelete={flagDelete}
                    showCreate={showCreate}
                    setIsEmailSent={setIsEmailSent}
                  />
                ))
              ) : (
                  <h1 className="text-3xl font-extrabold text-red-chestnut text-center p-5 justify-self-center min-h-[100%]">
                    Department not found
                  </h1>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="col-start-2 h-128">
          <div className="flex flex-col items-center scroll-auto overflow-y-scroll whitespace-nowrap p-2 h-[100%] m-3">
            {copyDepartments && copyDepartments.length > 0 ? (
              copyDepartments.map((el) => (
                <ListDepartment
                  key={el._id}
                  info={el}
                  setFlagDelete={setFlagDelete}
                  flagDelete={flagDelete}
                  setIsEmailSent={setIsEmailSent}
                />
              ))
            ) : (
              <h1 className="text-3xl font-extrabold text-red-chestnut text-center p-5 justify-self-center min-h-[100%]">
                Department not found
              </h1>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Departments;
