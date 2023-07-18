import React, { useEffect, useState } from "react";
import { companyDetails } from "../../services/company.service";
import SubHeader from "../../components/Header/SubHeaderMain/SubHeader";
import CalendarFull from "../../components/CalendarFull/CalendarFull";
import { showAllDepartments } from "../../services/department.service";

function Home() {
  const [details, setDetails] = useState({});
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [shift, setShift] = useState('All');
  const [choosenShift, setChoosenShift] = useState('All')
  const [chooseAll, setChooseAll] = useState(false)


  //COMPANY INFO
  const allInfo = async () => {
    const data = await companyDetails();
    setDetails(data);
  };

  //ALL DEPARTMENTS INFO
  const allDepartments = async () => {
    const res = await showAllDepartments();
    setDepartments(res);
  };

  useEffect(() => {
    allInfo();
    allDepartments();
  }, []);

  //SELECT DEPARTMENT
  const handleSelectedDepartment = (id) => {
    setSelectedDepartment(id);
  };

  const shifts = {
    All: "All",
    Morning: "Morning",
    Evening: "Evening",
    Night: "Night",
    DayOff: "Day Off",
    Holiday: "Holiday",
    Medical: "Medical",
  };

  //SHOWS ALL SHIFTS
  const handleShift = (shift) => {
    setShift(shift)
    setChooseAll(!chooseAll)
  };

  return (
    <div className="min-w-screen h-screen flex flex-col items-center">
      <div className="">
        <SubHeader name={details.name} />
      </div>

      <div className="grid grid-cols-2 mb-5 content-center w-screen pl-10 pr-10">
        <div className="grid ">
          <select
            onChange={(e) => handleSelectedDepartment(e.target.value)}
            value={selectedDepartment}
            className="justify-self-start bg-white-sand border-blue-calypso text-black text-md rounded-md h-10 focus:ring-blue-calypso focus:border-blue-calypso w-72"
          >
            <option value="">Select Department</option>
            {departments && departments.map((el) => (
              <option
                key={el._id}
                value={el._id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {el.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-row justify-end">
          <button 
            onClick={() => {
              handleShift(shifts.All)
              setChoosenShift(shifts.All)
            }}
            className={`border border-solid border-blue-glacier w-20 m-2 py-1 px-2  text-center text-sm rounded-md hover:ring-2 ring-blue-glacier ${(choosenShift === shifts.All) && ' ring-offset-2 ring-4 '}`}>
            {shifts.All}
          </button>
          <button
            onClick={() => {
              handleShift(shifts.Morning)
              setChoosenShift(shifts.Morning)
            }}
            className={`bg-yellow-legend m-2 py-1 px-2 w-20 text-center text-sm rounded-md hover:ring-2 ring-yellow-legend ${(choosenShift === shifts.Morning) && ' ring-offset-2 ring-4 '}`}
          >
            {shifts.Morning}
          </button>
          <button 
            onClick={() => {
              handleShift(shifts.Evening)
              setChoosenShift(shifts.Evening)
            }}
            className={`bg-orange-legend m-2 py-1 px-2 w-20 text-center text-sm rounded-md hover:ring-2 ring-orange-legend ${(choosenShift === shifts.Evening) && ' ring-offset-2 ring-4 '}`}>
            {shifts.Evening}
          </button>
          <button
            onClick={() => {
              handleShift(shifts.Night)
              setChoosenShift(shifts.Night)
            }}
          className={`bg-blue-legend m-2 py-1 px-2 w-20 text-center text-sm rounded-md hover:ring-2 ring-blue-legend ${(choosenShift === shifts.Night) && ' ring-offset-2 ring-4 '}`}>
            {shifts.Night}
          </button>
          <button
            onClick={() => {
              handleShift(shifts.DayOff)
              setChoosenShift(shifts.DayOff)
            }}
          className={`bg-green-legend m-2 py-1 px-2 w-20 text-center text-sm rounded-md hover:ring-2 ring-green-legend ${(choosenShift === shifts.DayOff) && ' ring-offset-2 ring-4 '}`}>
            {shifts.DayOff}
          </button>
          <button
            onClick={() => {
              handleShift(shifts.Holiday)
              setChoosenShift(shifts.Holiday)
            }}
          className={`bg-purple-legend m-2 py-1 px-2 w-20 text-center text-sm rounded-md hover:ring-2 ring-purple-legend ${(choosenShift === shifts.Holiday) && ' ring-offset-2 ring-4 '}`}>
            {shifts.Holiday}
          </button>
          <button
            onClick={() => {
              handleShift(shifts.Medical)
              setChoosenShift(shifts.Medical)
            }}
          className={`bg-red-legend m-2 py-1 px-2 w-20 text-center text-sm rounded-md hover:ring-2 ring-red-legend ${(choosenShift === shifts.Medical) && ' ring-offset-2 ring-4 '}`}>
            {shifts.Medical}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <CalendarFull selectedDepartment={selectedDepartment} shift={shift} estilo="col-start-1 w-[1000px] h-[850px] overflow-hidden mb-8"/>
      </div>
      
    </div>
  );
}

export default Home;
