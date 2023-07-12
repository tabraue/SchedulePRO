import React, { useState } from "react";
import ButtonCustom from "../../../components/ButtonCustom/ButtonCustom";
import Alert from "../../../components/Alert/Alert";
import { createDepartment } from "../../../services/department.service";

function CreateDepartment() {
  const title = "Create department";
  const confirm = "Confirm";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertDenied, setShowAlertDenied] = useState(false);

  const handleName = (name) => {
    if (name.lenght != 0) setName(name);
  };

  const handleDescription = (description) => {
    setDescription(description);
  };

  const handleCreate = async () => {
    console.log(name.target.value, description)
    if (name) {
      const res = await createDepartment(
        name.target.value,
        description.target.value
      );
      if (res) {
        setShowAlertSuccess(!showAlertSuccess);
        const delay = setTimeout(() => {
          // ==> DO SOMETHING
        }, 1000);
        return () =>
          clearTimeout(setShowAlertSuccess(!showAlertSuccess), delay);
      } else {
        setShowAlertDenied(true);
        const delay = setTimeout(() => {
          setShowAlertDenied(false);
        }, 2000);
        return () => clearTimeout(delay);
      }
    }
  };

  return (
    <div className="flex items-center h-screen w-full justify-center ">
      <div className=" bg-blue-glacier grid auto-rows-r justify-items-stretch gap-y-3 place-content-center content-center items-center border-solid border-2 border-blue-calypso p-6 rounded-sm">
        <h1 className="text-3xl font-extrabold text-white-sand text-center">
          {title}
        </h1>

        <div>
          <label
            htmlFor="department-name"
            className="block mb-2 text-sm font-medium text-black"
          >
            Department Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" />
            <input
              type="text"
              id="department-name"
              className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block"
              placeholder="Bookings"
              onChange={handleName}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-blue-calypso"
          >
            Description
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none"></div>
            <input
              type="text"
              id="description"
              className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block"
              placeholder="Groups reservations made directly"
              onChange={handleDescription}
            />
          </div>
        </div>

        {showAlertSuccess && <Alert type="green" svg="green" text="Success!" />}
        {showAlertDenied && (
          <Alert type="red" svg="red" text="Please, check your details." />
        )}
        <div className="flex justify-end">
          <ButtonCustom onClick={handleCreate} text={confirm} type="confirm" />
        </div>
      </div>
    </div>
  );
}

export default CreateDepartment;

/* 
    const [show, setShow] = useState(false)

    const isShown = () => {
        setShow(!show)
    }


    <div>
      <button
        onClick={isShown}
        data-modal-toggle="create"
        data-modal-hide="create"
        data-modal-target="create"
        data-modal-show="create"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>
        {show &&
            <div className="w-screen h-screen">  

            <div id="create" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
        
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Static modal
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
        
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
        
                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                            <button data-modal-hide="staticModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
        
        }
    </div>

*/
