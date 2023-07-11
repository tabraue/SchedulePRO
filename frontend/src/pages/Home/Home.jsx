import React, { useEffect, useState } from "react";
import { companyDetails } from "../../services/company.service";
import SubHeader from "../../components/Header/SubHeader/SubHeader";

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
      <div>
        <h1 className="text-3xl font-extrabold text-blue-calypso text-center mt-10">
          {details.name}
        </h1>
      </div>
      <div className=""><SubHeader/></div>
    </div>
  );
}

export default Home;
