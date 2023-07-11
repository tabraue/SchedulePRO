import React, { useEffect, useState } from 'react'
import CardDepartment from '../../components/CardDepartment/CardDepartment'
import { useNavigate } from 'react-router-dom';
import { showAllDepartments } from '../../services/department.service';


function Departments() {
  const [info, setInfo] = useState([]);

  const showAll = async () => {
    const data = await showAllDepartments();
    setInfo(data);
   
  };

  useEffect(() => {
    showAll();
  }, []);
  
  return (
    <div >
      <CardDepartment info={info}/>
    </div>
  )
}

export default Departments