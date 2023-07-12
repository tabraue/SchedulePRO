import React, { useEffect, useState } from "react";
import { showAllDepartments } from "../../services/department.service";
import CardDepartment from "../../components/CardDepartment/CardDepartment";
import SubHeaderContent from "../../components/Header/SubHeaderContent/SubHeaderContent";

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
      <h1 className="text-3xl font-extrabold text-green-paradiso text-center pt-5">
        Department management
      </h1>
      <SubHeaderContent placeholder="Find a department" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/>
      <div className="grid grid-rows-1 p-10 bg-yellow-sandy">asdf</div>
      <div className="grid grid-flow-row gap-10 max-sm:grid-rows-none max-md:grid-flow-row max-lg:grid-flow-row max-xl:grid-flow-row">
        <div className="grid grid-flow-col gap-10 place-items-center max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-4 max-xl:grid-cols-6">
          {departments.map((el) => (
            <CardDepartment key={el._id} info={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;
