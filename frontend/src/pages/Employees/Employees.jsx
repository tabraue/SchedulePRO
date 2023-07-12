import React, { useEffect, useState } from 'react'
import SubHeaderContent from '../../components/Header/SubHeaderContent/SubHeaderContent';
import CardEmployee from '../../components/CardEmployee/CardEmployee';
import { showAllEmployees } from '../../services/employee.service';
import EmployeeIcon from '../../components/Icon/EmployeeIcon';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [copyEmployee, setCopyEmployee] = useState([])

  const showAll = async () => {
    const data = await showAllEmployees();
    setEmployees(data);
    setCopyEmployee(data)
  };


  useEffect(() => {
    showAll();
  }, []);


  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    const filterSearch = copyEmployee.filter((el) =>  el.name.toLowerCase().includes(value))
    setCopyEmployee(filterSearch)
    if(value.length <= 0){
      setCopyEmployee(employees)
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl font-extrabold text-green-paradiso text-center pt-5">
        Employee management
      </h1>
      <SubHeaderContent
        onChange={handleSearch}
        placeholder="Find an employee"
        employee={true}
      />
      <div className="grid grid-flow-row gap-10 ">
        <div className="grid grid-flow-col gap-10 place-items-center ">
          {copyEmployee.length>0 ?
            copyEmployee.map((el) => (
              <CardEmployee key={el._id} info={el} />
            ))
            : <h1 className="text-3xl font-extrabold text-red-chestnut text-center p-5">Employee not found</h1>
          }
        </div>
      </div>
    </div>
  );
}

export default Employees