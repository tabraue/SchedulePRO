import React, { useEffect, useState } from "react";
import FolderOpen from "../Icon/FolderOpen";
import CloseIcon from "../Icon/CloseIcon";
import { showEmployeesByDepartment } from "../../services/employee.service";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import AlertDelete from "../Alert/AlertDelete/AlertDelete";
import { deleteDepartment } from "../../services/department.service";
import CalendarFull from "../CalendarFull/CalendarFull";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  createSchedule,
  deleteSchedule,
  showScheduleFromEmployee,
} from "../../services/schedule.service";
import ErrorAlert from "../Alert/ErrorAlert/ErrorAlert";
import Email from "../Icon/Email";

function ListDepartment({ info, setFlagDelete, flagDelete, showCreate }) {
  const [openmodalstate, setModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [openAcordion, setOpenAcordion] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  //const [edit, setEdit] = useState(false)   ==> EDITION PENDING
  const [openScheduleModal, setOpenScheduleModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedShift, setSelectedShift] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [isErrorAlert, setIsErrorAlert] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isEvent, setIsEvent] = useState(false)
  const [idFromSchedule, setIdFromSchedule] = useState('')

  const showEmployees = async (departmentId) => {
    const data = await showEmployeesByDepartment(departmentId);
    setEmployees(data);
  };

  useEffect(() => {
    showEmployees(info._id);
  }, []);

  const toggleModal = () => {
    setModal(!openmodalstate);
    setOpenDelete(false);
  };

  const toggleScheduleModal = () => {
    setOpenScheduleModal(!openScheduleModal);
  };

  //OPEN-CLOSE EMPLOYEES ACCORDION
  const handleAccordion = () => {
    setOpenAcordion(!openAcordion);
  };

  //DELETE BUTTON (IF YOU WANT TO DELETE DEPARTMENT)
  const handleDelete = () => {
    setOpenAcordion(false);
    setOpenDelete(!openDelete);
  };

  const departmentDeletion = async (id) => {
    await deleteDepartment(id);
    setFlagDelete(!flagDelete);
  };

  //IF DELETE BUTTON CLICKED -> ALERT -> IF (YES) YOU WANT TO DELETE DEPARTMENT:
  const handleClickYes = (id) => {
    setOpenDelete(false);
    setModal(false);
    departmentDeletion(id);
  };

  //IF DELETE BUTTON CLICKED -> ALERT -> IF (NO) YOU do not WANT TO DELETE DEPARTMENT:
  const handleClickNo = () => {
    setOpenDelete(false);
  };

  /*   const handleEdition = () => {
    setEdit(!edit)
  }
 */

  const handleCalendar = () => {
    setOpenScheduleModal(!openScheduleModal);
    cleanInputs()
  };

  //SELECT EMPLOYEE TO CREATE SCHEDULE
  const handleSelectedEmployee = (id) => {
    setSelectedEmployee(id);
  };

  // AVAILABLES SHIFTS
  const shifts = {
    All: "All",
    Morning: "Morning",
    Evening: "Evening",
    Night: "Night",
    DayOff: "Off",
    Holiday: "Holiday",
    Medical: "Medical",
  };

  //SELECT A SHIFT TO CREATE SCHEDULE
  const handleSelectedShift = (shift) => {
    setSelectedShift(shift);
  };

  const cleanInputs = () => {
    setSelectedEmployee("");
    setSelectedShift("");
    setStartDate('');
  };

  const addToSchedule = async () => {
    if (selectedEmployee && selectedShift && startDate) {
      const check = await showScheduleFromEmployee(selectedEmployee);
      const mapeo = check.map((el) => el.substring(0, 10));
      if (!mapeo.includes(startDate)) {
        const res = await createSchedule(
          startDate,
          selectedShift,
          info._id,
          selectedEmployee
        );
        if (res) {
          cleanInputs();
          setRefresh(!refresh);
        } else {
          setIsErrorAlert(true);
          const delay = setTimeout(() => {
            setIsErrorAlert(false);
          }, 2000);
          return () => clearTimeout(delay);
        }
      }else {
        setIsErrorAlert(true);
        const delay = setTimeout(() => {
          setIsErrorAlert(false);
        }, 2000);
        return () => clearTimeout(delay);
      }
    } else {
      setIsErrorAlert(true);
      const delay = setTimeout(() => {
        setIsErrorAlert(false);
      }, 2000);
      return () => clearTimeout(delay);
    }
  };

  const confirmDelete = async (scheduleId) => {
    const res = await deleteSchedule(scheduleId)
    if(res) setIsEvent(!isEvent)
  }

  const handleEventClick = (el) => {
    setIsEvent(!isEvent)
    setIdFromSchedule(el.event._def.extendedProps.scheduleId)
  }

  const yesDeleteSchedule = () =>{
    confirmDelete(idFromSchedule)
    setRefresh(!refresh)
  }

  const notDeleteSchedule = () => {
    setIsEvent(!isEvent)
  }


  return (

      <div className="border-solid border-2 border-yellow-sandy m-1 p-3 grid grid-cols-5 grid-rows-2 justify-center rounded-md bg-white-sand h-full w-9/12 ">
        <button
          onClick={toggleModal}
          className="col-start-1 row-span-2 justify-self-start ml-5 "
        >
          <FolderOpen />
        </button>
        <div className="min-w-0 col-start-2 row-span-2 justify-self-start self-center">
          {openmodalstate && (
            <div className=" w-screen h-screen absolute top-0 left-0 flex inset-0 items-center justify-center z-50">
              <div className="fixed inset-0 backdrop-filter backdrop-blur-sm flex" />
              <div className="fixed">
                <div className="flex items-center justify-end">
                  <button onClick={toggleModal} className=" flex  items-center">
                    <CloseIcon />
                  </button>
                </div>
                <div className="bg-blue-calypso p-6 rounded-sm shadow-lg flex flex-col items-center justify-center">
                  <div className="bg-white-sand min-w-[600px] min-h-[500px] flex flex-col justify-center px-6 rounded-xl">
                    <h5 className="text-2xl font-bold tracking-tight text-green-paradiso text-center border-b-2 border-green-paradiso p-3">
                      {info.name}
                    </h5>

                    <div className="border-b-2 border-green-paradiso p-3">
                      <h3 className="text-green-paradiso font-bold ">
                        Description:{" "}
                      </h3>
                      <p className="font-normal text-black">
                        {info.description}
                      </p>
                    </div>

                    <div className="border-b-2 border-green-paradiso p-3">
                      <h3 className="text-md font-bold tracking-tight text-green-paradiso">
                        Manager:{" "}
                      </h3>
                      <h3 className="font-normal text-black">
                        {" "}
                        {employees.map(
                          (el) =>
                            el.is_manager && <p key={el._id}> {el.name} </p>
                        )}
                      </h3>
                    </div>

                    <div className="border-b-2 border-green-paradiso p-3">
                      <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                          <button
                            type="button"
                            className="flex items-center justify-between w-full font-medium text-left text-gray-500 "
                            data-accordion-target="#accordion-collapse-body-1"
                            aria-expanded={openAcordion}
                            aria-controls="accordion-collapse-body-1"
                            onClick={handleAccordion}
                          >
                            <h3 className="text-md font-bold tracking-tight text-green-paradiso">
                              Employees:
                            </h3>
                            <svg
                              data-accordion-icon
                              className="w-3 h-3 rotate-180 shrink-0"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                              />
                            </svg>
                          </button>
                        </h2>
                        <div
                          id="accordion-collapse-body-1"
                          className={`${openAcordion ? "" : "hidden"}`}
                          aria-labelledby="accordion-collapse-heading-1"
                        >
                          <div className="p-5">
                            <ul>
                              {employees.map((el) => (
                                <li
                                  className="text-black list-none font-normal"
                                  key={el._id}
                                >
                                  {el.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4 justify-end pt-10">
                      <ButtonCustom
                        text="Delete"
                        type="cancel"
                        onClick={handleDelete}
                      />
                      <ButtonCustom text="Confirm" type="confirm" />
                    </div>

                    {openDelete && (
                      <AlertDelete
                        text={info.name + " department"}
                        onConfirm={() => handleClickYes(info._id)}
                        onDecline={handleClickNo}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          <button onClick={toggleModal}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-paradiso hover:text-yellow-sandy overflow-auto">
              {info.name}
            </h5>
          </button>
        </div>
         <div className="col-start-3  col-end-4 row-start-1 row-end-3 justify-self-start self-center flex">
           {!showCreate && <p className="text-md text-black h-fit overflow-auto">{info.description}</p>}
        </div>
        <button
          type="button"
          onClick={() => handleCalendar(info._id)}
          className="col-start-4 row-span-2 justify-self-center self-center inline-flex items-center px-4 py-2 text-lg font-medium text-green-paradiso"
        >
          <svg
            className="w-8 h-8 mr-12 ml-12 hover:text-yellow-sandy"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z" />
          </svg>
        </button>
        <div className="col-start-5 row-span-2 cursor-pointer justify-self-center self-center items-center px-4 py-2"><Email/></div>

        {openScheduleModal && (
          <>
            <div className=" w-screen h-screen absolute top-0 left-0 flex inset-0 items-center justify-center z-50">
              <div className="fixed inset-0 backdrop-filter backdrop-blur-sm flex" />
              <div className="fixed">
                <div className="bg-white-sand border border-solid border-blue-calypso p-10 min-w-[400px] min-h-[300px] justify-center rounded-xl">
                  <div className="flex items-center justify-end">
                    <button
                      onClick={toggleScheduleModal}
                      className="flex items-center"
                    >
                      <CloseIcon />
                    </button>
                  </div>

                  <h5 className="text-2xl font-bold tracking-tight text-green-paradiso text-center border-b-2 border-green-paradiso p-3">
                    {info.name}
                  </h5>
                  {isErrorAlert && <ErrorAlert />}
                  {isEvent && <AlertDelete  onConfirm={yesDeleteSchedule} onDecline={notDeleteSchedule} />}
                  <div className="flex gap-7 justify-between">
                    <select
                      onChange={(e) => handleSelectedEmployee(e.target.value)}
                      value={selectedEmployee}
                      className="flex self-center  mt-4 justify-self-start bg-white-sand border-blue-calypso text-black text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso w-64"
                    >
                      <option value="">Select Employee</option>
                      {employees.map((el) => (
                        <option
                          key={el._id}
                          value={el._id}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          {el.name}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={(e) => handleSelectedShift(e.target.value)}
                      value={selectedShift}
                      className=" flex self-center mt-4 justify-self-start bg-white-sand border-blue-calypso text-black text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso w-64"
                    >
                      <option value="">Select a Shift</option>
                      <option
                        value={shifts.Morning}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 bg-yellow-legend"
                      >
                        {shifts.Morning}
                      </option>
                      <option
                        value={shifts.Evening}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 bg-orange-legend"
                      >
                        {shifts.Evening}
                      </option>
                      <option
                        value={shifts.Night}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 bg-blue-legend"
                      >
                        {shifts.Night}
                      </option>
                      <option
                        value={shifts.DayOff}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 bg-green-legend"
                      >
                        {shifts.DayOff}
                      </option>
                      <option
                        value={shifts.Holiday}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 bg-purple-legend"
                      >
                        {shifts.Holiday}
                      </option>
                      <option
                        value={shifts.Medical}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 bg-red-legend"
                      >
                        {shifts.Medical}
                      </option>
                    </select>

                    <input
                      type="date"
                      className="bg-white-sand flex self-center mt-4"
                      lang="en"
                      selected={startDate}
                      onChange={(date) => setStartDate(date.target.value)}
                    />
                    {/*  <DatePicker firstDayOfWeek={0} dateFormat={'dd-MM-yyyy'} selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                    <div className="flex self-center mt-5">
                      <ButtonCustom
                        onClick={() => addToSchedule(info._id)}
                        text="Add"
                        type="blue"
                      />
                    </div>
                  </div>
                  <CalendarFull
                    selectedDepartment={info._id}
                    shift={"All"}
                    estilo="col-start-1 w-[800px] h-[650px] overflow-hidden mb-8 mt-5"
                    refresh={refresh}
                    setRefresh={setRefresh}
                    eventClick={handleEventClick}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
  );
}

export default ListDepartment;

/* {edit ?:<ButtonCustom text="Edit" type="yellow" onClick={handleEdition}/>} */
