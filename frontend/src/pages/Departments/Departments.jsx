import React, { useEffect, useState } from "react";
import { showAllDepartments } from "../../services/department.service";
import CardDepartment from "../../components/CardDepartment/CardDepartment";
import SubHeaderContent from "../../components/Header/SubHeaderContent/SubHeaderContent";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [copyDepartment, setCopyDepartment] = useState([])

  const showAll = async () => {
    const data = await showAllDepartments();
    setDepartments(data);
    setCopyDepartment(data)
  };

  useEffect(() => {
    showAll();
  }, []);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    const filterSearch = copyDepartment.filter((el) =>  el.name.toLowerCase().includes(value))
    setCopyDepartment(filterSearch)
    if(value.length <= 0){
      setCopyDepartment(departments)
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl font-extrabold text-green-paradiso text-center pt-5">
        Department management
      </h1>
      <SubHeaderContent
        onChange={handleSearch}
        placeholder="Find a department"
        employee={false}
      />
      <div className="grid grid-flow-row gap-10 ">
        <div className="grid grid-cols-4 gap-10 place-items-center ">
          {copyDepartment.length>0 ?
            copyDepartment.map((el) => (
              <CardDepartment key={el._id} info={el} />
            ))
            : <h1 className="text-3xl font-extrabold text-red-chestnut text-center p-5">Department not found</h1>
          }
        </div>
      </div>
    </div>
  );
}

export default Departments;

//max-sm:grid-rows-none max-md:grid-flow-row max-lg:grid-flow-row max-xl:grid-flow-row
//max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-4 max-xl:grid-cols-6
