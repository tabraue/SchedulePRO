import React, { useEffect, useState } from "react";
import { companyDetails } from "../../services/company.service";
import { showAllDepartments } from "../../services/department.service";
import { showAllEmployees } from "../../services/employee.service";

function Details() {
  const [details, setDetails] = useState({});
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [openAcordionEmployees, setOpenAcordionEmployees] = useState(false);
  const [openAcordionDepartments, setOpenAcordionDepartments] = useState(false);

  const allInfo = async () => {
    const data = await companyDetails();
    const dep = await showAllDepartments();
    const emp = await showAllEmployees();
    setDetails(data);
    setDepartments(dep);
    setEmployees(emp);
  };

  useEffect(() => {
    allInfo();
  }, []);

  const handleAccordionEmployees = () => {
    setOpenAcordionEmployees(!openAcordionEmployees);
  };

  const handleAccordionDepartments = () => {
    setOpenAcordionDepartments(!openAcordionDepartments);
  };

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <div className="bg-blue-calypso p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <div className="bg-white-sand min-w-[800px] min-h-[600px] flex flex-col justify-center px-6 rounded-xl">
          <h5 className="text-2xl font-bold tracking-tight text-green-paradiso text-center ">
            {details.name}
          </h5>
          <h5 className="text-lg font-bold tracking-tight text-green-paradiso text-center pt-2">
            {details.vat}
          </h5>
          <h5 className="text-sm font-bold tracking-tight text-green-paradiso text-center border-b-2 border-green-paradiso p-3">
            {details.email}
          </h5>

          <div className="border-b-2 border-green-paradiso p-3">
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full font-medium text-left text-gray-500 "
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded={openAcordionDepartments}
                  aria-controls="accordion-collapse-body-1"
                  onClick={handleAccordionDepartments}
                >
                  <h3 className="text-md font-bold tracking-tight text-green-paradiso">
                    Departments:{" "}
                    <p className="font-normal text-black">
                      {departments.length}
                    </p>
                  </h3>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              <div
                id="accordion-collapse-body-1"
                className={`${openAcordionDepartments ? "" : "hidden"}`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-5">
                  <ul>
                    {departments.map((el) => (
                      <li
                        className="text-black list-none font-normal"
                        key={el._id}
                      >
                        {el.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-green-paradiso p-3">
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full font-medium text-left text-gray-500 "
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded={openAcordionEmployees}
                  aria-controls="accordion-collapse-body-1"
                  onClick={handleAccordionEmployees}
                >
                  <h3 className="text-md font-bold tracking-tight text-green-paradiso">
                    Employees:{" "}
                    <p className="font-normal text-black">{employees.length}</p>
                  </h3>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              <div
                id="accordion-collapse-body-1"
                className={`${openAcordionEmployees ? "" : "hidden"}`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-5">
                  <ul>
                    {employees.map((el) => (
                      <li
                        className="text-black list-disc font-normal"
                        key={el._id}
                      >
                        {el.name} {el.last_name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
