import React, { useEffect, useState } from "react";
import FolderOpen from "../../../components/Icon/FolderOpen";
import CloseIcon from "../../Icon/CloseIcon";
import { showEmployeesByDepartment } from "../../../services/employee.service";
import ButtonCustom from "../../ButtonCustom/ButtonCustom";
import AlertDelete from "../../Alert/AlertDelete/AlertDelete";
import { deleteDepartment } from "../../../services/department.service";

function ListDepartment({ info }) {
  const [openmodalstate, setModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [openAcordion, setOpenAcordion] = useState(false);
  const [openDelete, setOpenDelete] = useState(false)

  
  const showEmployees = async (departmentId) => {
    const data = await showEmployeesByDepartment(departmentId);
    setEmployees(data);
  };

  useEffect(() => {
    showEmployees(info._id);
  }, []);

  const toggleModal = () => {
    setModal(!openmodalstate);
  };

  //OPEN-CLOSE EMPLOYEES ACCORDION
  const handleAccordion = () => {
    setOpenAcordion(!openAcordion);
  };

  //DELETE BUTTON (IF YOU WANT TO DELETE DEPARTMENT)
  const handleDelete = () => {
    setOpenAcordion(false)
    setOpenDelete(!openDelete)
  }

  const departmentDeletion =  async (id) =>{
    await deleteDepartment(id)
  }


  //IF DELETE BUTTON CLICKED -> ALERT -> IF (YES) YOU WANT TO DELETE DEPARTMENT:
  const handleClickYes = (id) => {
    setOpenDelete(false)
    setModal(false)
    departmentDeletion(id)
  }


  //IF DELETE BUTTON CLICKED -> ALERT -> IF (NO) YOU do not WANT TO DELETE DEPARTMENT:
  const handleClickNo = () => {
    setOpenDelete(false)
  }

  return (
    <div className="border-solid border-2 border-yellow-sandy m-1 p-3 grid grid-cols-3 content-center rounded-md bg-white-sand h-full flex-shrink-0 w-9/12">
      <button className="col-start-1 col-end-1 justify-self-center">
        <FolderOpen />
      </button>
      <div className="min-w-0 col-start-2 justify-self-start self-center">
        {openmodalstate && (
          <div className=" w-screen h-screen absolute top-0 left-0 flex inset-0 items-center justify-center z-50">
            <div className="fixed inset-0 backdrop-filter backdrop-blur-sm flex" />
            <div className="fixed">
              <div className="flex items-center justify-end">
              <button onClick={toggleModal} className=" flex  items-center">
                <CloseIcon />
              </button>
              </div>
              <div className="bg-blue-calypso p-6 rounded-sm shadow-lg flex flex-col items-center justify-center">
                <div className="bg-white-sand min-w-[600px] min-h-[500px] flex flex-col justify-center px-6 rounded-xl">
                  <h5 className="text-2xl font-bold tracking-tight text-green-paradiso text-center border-b-2 border-green-paradiso p-3">
                    {info.name}
                  </h5>

                  <div className="border-b-2 border-green-paradiso p-3">
                    <h3 className="text-green-paradiso font-bold ">
                      Description:{" "}
                    </h3>
                    <p className="font-normal text-black">{info.description}</p>
                  </div>

                  <div className="border-b-2 border-green-paradiso p-3">
                    <h3 className="text-md font-bold tracking-tight text-green-paradiso">
                      Manager:{" "}
                    </h3>
                    <p className="font-normal text-black">
                      {" "}
                      {employees.map(
                        (el) => el.is_manager && <p key={el._id}> {el.name} </p>
                      )}
                    </p>
                  </div>

                  <div className="border-b-2 border-green-paradiso p-3">
                    <div id="accordion-collapse" data-accordion="collapse">
                      <h2 id="accordion-collapse-heading-1">
                        <button
                          type="button"
                          className="flex items-center justify-between w-full font-medium text-left text-gray-500 "
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded={openAcordion}
                          aria-controls="accordion-collapse-body-1"
                          onClick={handleAccordion}
                        >
                          <h3 className="text-md font-bold tracking-tight text-green-paradiso">
                            Employees:
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
                        className={`${openAcordion ? "" : "hidden"}`}
                        aria-labelledby="accordion-collapse-heading-1"
                      >
                        <div className="p-5">
                          <ul>
                            {employees.map((el) => (
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

                  <div className="flex ">
                    <ButtonCustom text="Delete" type="cancel" onClick={handleDelete}/>
                    <ButtonCustom text="Confirm" type="confirm" />
                  </div>

                  {openDelete && <AlertDelete text={info.name +' department'} onConfirm={()=>handleClickYes(info._id)} onDecline={handleClickNo}/>}
                  



                </div>
              </div>
            </div>
          </div>
        )}

        <button onClick={toggleModal}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-paradiso hover:text-yellow-sandy">
            {info.name}
          </h5>
        </button>
      </div>
      <div className="col-start-2 col-end-3">
        <p className="text-sm text-black h-full">{info.description}</p>
      </div>
    </div>
  );
}

export default ListDepartment;

/*
                  <div className="border-b-2 border-green-paradiso p-3">
                    <h3 className=" text-md font-bold tracking-tight text-green-paradiso">
                      Employees:
                    </h3>
                    <ul>
                      {employees.map((el) => (
                        <li
                          className="text-black list-none font-normal"
                          key={el._id}
                        >
                          {" "}
                          {el.name}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>


*/

/*
  <div className="fixed inset-0 flex items-center justify-center z-500 b">
            <div className="bg-white p-6 rounded shadow-lg">
              <button
                onClick={toggleModal}
                className="justify-self-end mt-4 font-bold py-2 px-4 rounded"
              >
                <CloseIcon />
              </button>
              <h2 className="text-xl font-bold mb-4">{info.name}</h2>
              <p>Contenido del modal...</p>
            </div>
          </div>


*/
/*
<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button
      type="button"
      class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
      data-accordion-target="#accordion-collapse-body-1"
      aria-expanded="true"
      aria-controls="accordion-collapse-body-1"
    >
      <span>What is Flowbite?</span>
      <svg
        data-accordion-icon
        class="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
  </h2>
  <div
    id="accordion-collapse-body-1"
    class="hidden"
    aria-labelledby="accordion-collapse-heading-1"
  >
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on
        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
        more.
      </p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to{" "}
        <a
          href="/docs/getting-started/introduction/"
          class="text-blue-600 dark:text-blue-500 hover:underline"
        >
          get started
        </a>{" "}
        and start developing websites even faster with components on top of
        Tailwind CSS.
      </p>
    </div>
  </div>
</div>;
*/
