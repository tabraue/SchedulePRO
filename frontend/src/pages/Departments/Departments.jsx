import React, { useEffect, useState } from "react";
import {
  createDepartment,
  showAllDepartments,
} from "../../services/department.service";
import SubHeaderContent from "../../components/Header/SubHeaderContent/SubHeaderContent";
import ListDepartment from "../../components/CardDepartment/ListDepartment/ListDepartment";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import Alert from "../../components/Alert/Alert";
import CloseIcon from "../../components/Icon/CloseIcon";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [copyDepartments, setCopyDepartments] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertDenied, setShowAlertDenied] = useState(false);
  const searching = "Find a department";
  const title = "Create department";
  const confirm = "Confirm";

  // BRINGS ALL DEPARTMENTS INFORMATION FROM SERVICE
  const showAll = async () => {
    const data = await showAllDepartments();
    setDepartments(data);
    setCopyDepartments(data);
  };

  useEffect(() => {
    showAll();
    handleCreate();
  }, []);

  // TAKES DEPARTMENT NAME
  const handleName = (name) => {
    if (name.target.value.length !== 0 || name.target.value.length !== "")
      setName(name);
  };

  // TAKES DEPARTMENT DESCRIPTOIN
  const handleDescription = (description) => {
    if (
      description.target.value.length === 0 ||
      description.target.value.length === ""
    ) {
      setDescription("");
    } else {
      setDescription(description);
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

  // HANDLE TO CREATE A DEPARTMENT
  const handleCreate = async () => {
    if (name) {
      const res = await createDepartment(
        name.target.value,
        description.target.value
      );
      if (res) {
        setShowAlertSuccess(!showAlertSuccess);
        const delay = setTimeout(() => {
          setShowAlertSuccess(!showAlertSuccess);
        }, 1000);
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

        <div className="col-start-1 col-end-7 row-start-2 justify-self-end grid mr-10 mt-3">
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
          <div className="bg-blue-glacier col-start-1 rounded-lg m-10 grid h-128">
            {showCreate && (
              <div className="grid items-center justify-center">
                <div className=" grid auto-rows justify-items-stretch place-content-center content-center items-center border-solid border-2 border-blue-calypso p-6 rounded-lg bg-white-sand">
                  {showAlertSuccess && (
                    <Alert type="green" svg="green" text="Success!" />
                  )}
                  {showAlertDenied && (
                    <Alert
                      type="red"
                      svg="red"
                      text="Please, check your details."
                    />
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
                        placeholder="Bookings"
                        onChange={handleName}
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
                          name="description"
                          className="h-20 bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block w-64 resize-none"
                          placeholder="Group reservations made directly"
                          onChange={handleDescription}
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
                </div>
              </div>
            )}
          </div>

          <div className="col-start-2 h-128">
            <div className="flex flex-col items-center scroll-auto overflow-y-scroll whitespace-nowrap p-2 h-[100%] m-3">
              {copyDepartments.length > 0 ? (
                copyDepartments.map((el) => (
                  <ListDepartment key={el._id} info={el} />
                ))) : (
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
            {copyDepartments.length > 0 ? (
              copyDepartments.map((el) => (
                <ListDepartment key={el._id} info={el} />
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