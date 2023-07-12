import React, { useEffect, useState } from "react";
import { companyDetails } from "../../services/company.service";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import { showAllDepartments } from "../../services/department.service";
import CardDepartment from "../../components/CardDepartment/CardDepartment";

function Home() {
  const [details, setDetails] = useState({});
  const allInfo = async () => {
    const data = await companyDetails();
    setDetails(data);
  };

  useEffect(() => {
    allInfo();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="">
        <SubHeader name={details.name} />
      </div>

    </div>
  );
}

export default Home;
