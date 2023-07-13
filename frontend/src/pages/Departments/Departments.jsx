import React, { useEffect, useState } from "react";
import { showAllDepartments } from "../../services/department.service";
import SubHeaderContent from "../../components/Header/SubHeaderContent/SubHeaderContent";
import CreateDepartment from "./CreateDepartment/CreateDepartment";
import ListDepartment from "../../components/CardDepartment/ListDepartment/ListDepartment";
import CardDepartment from '../../components/CardDepartment/CardDepartment'

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [copyDepartments, setCopyDepartments] = useState([]);
  const [showCreate, setShowCreate]=useState(false)
  const [showCard, setShowCard] = useState(false)
  const searching = "Find a department";

  const showAll = async () => {
    const data = await showAllDepartments();
    setDepartments(data);
    setCopyDepartments(data);
  };

  useEffect(() => {
    showAll();
  }, []);

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

  // APPEARS CREATE DEPARTMENT
  const handleCreation = () => {
    setShowCreate(true)
  };
  // DISAPPEARS CREATE DEPARTM
  const handleCloseCreate = () =>{
    setShowCreate(false)
  }
  //APPEARS CARD DEPT
  const handleCloseCard = () => {
    setShowCard(true)
  }

  return (
    <div className="grid grid-cols-6 grid-rows-8 m-5 max-h-screen">

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

      <div className="col-start-4 col-end-7 row-start-3 row-end-3 grid m-10 gap-4 scroll-auto overflow-y-scroll whitespace-nowrap h-[50%] p-2">
          {copyDepartments.length > 0 ? (
            copyDepartments.map((el) => (
              <ListDepartment key={el._id} info={el}/>
            ))
          ) : (
            <h1 className="text-3xl font-extrabold text-red-chestnut text-center p-5 justify-self-center min-h-[100%]">
              Department not found
            </h1>
          )}
        </div>

      <div className="bg-blue-glacier col-start-1 col-end-4 row-start-3 row-end-8rounded-lg m-10 max-h-[50%] grid reltive">
            {showCreate && <CreateDepartment  onClick={handleCloseCreate}/>}
            {showCard && <CardDepartment info={el} onClick={handleCloseCard}/> }
      </div>

    </div>
  );
}

export default Departments;

//max-sm:grid-rows-none max-md:grid-flow-row max-lg:grid-flow-row max-xl:grid-flow-row
//max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-4 max-xl:grid-cols-6
//overscroll-contain scroll-smooth overflow-scroll 