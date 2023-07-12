import React, { useEffect, useState } from "react";
import { companyDetails } from "../../services/company.service";
import SubHeader from "../../components/Header/SubHeaderMain/SubHeader";
import Calendar from "../../components/Calendar/Calendar";



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
      <Calendar/>
    </div>
  );
}

export default Home;
