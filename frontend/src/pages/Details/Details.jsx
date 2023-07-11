import React, { useEffect, useState } from "react";
import { companyDetails } from "../../services/company.service";

function Details() {
  const [details, setDetails] = useState({});

  const allInfo = async () => {
    const data = await companyDetails();
    setDetails(data);
  };

  useEffect(() => {
    allInfo();
  }, []);

  return (
    <></>

  );
}

export default Details;
