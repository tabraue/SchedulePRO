import React, { useEffect, useState } from "react";
import { showAllDepartments } from "../../services/department.service";
import CardDepartment from "../../components/CardDepartment/CardDepartment";

function Departments() {
  const [departments, setDepartments] = useState([]);

  const showAll = async () => {
    const data = await showAllDepartments();
    setDepartments(data);
  };

  useEffect(() => {
    showAll();
  }, []);



  return (
    <div className="">
      <div className="grid grid-rows-1 p-10 bg-yellow-sandy">sdf</div>
      <div className="grid grid-flow-row gap-10 max-sm:grid-rows-none max-md:grid-flow-row max-lg:grid-flow-row max-xl:grid-flow-row">
        <div className="grid grid-flow-col gap-10 place-items-center max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-4 max-xl:grid-cols-6">
          {departments.map((el) => (
            <CardDepartment info={el}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;
