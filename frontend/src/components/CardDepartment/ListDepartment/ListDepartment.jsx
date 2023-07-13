import React, { useState } from "react";
import { Link } from "react-router-dom";
import FolderOpen from "../../../components/Icon/FolderOpen";

function ListDepartment({ info }) {
  const [openmodalstate, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!openmodalstate);
  };

  return (
    <div className="border-solid border-2 border-yellow-sandy m-1 p-3 grid grid-cols-3 content-center rounded-md bg-white-sand h-full flex-shrink-0 w-9/12">
      <button className="col-start-1 col-end-1 justify-self-center">
        <FolderOpen />
      </button>
      <div className="min-w-0 col-start-2 justify-self-start self-center">


        {openmodalstate && (

          <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">{info.name}</h2>
            <p>Contenido del modal...</p>
            <button
              onClick={toggleModal}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Cerrar modal
            </button>
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

// <div className="border-solid border-2 border-yellow-sandy m-1 p-3 grid auto-rows-auto content-center rounded-md bg-white-sand h-full flex-shrink-0  w-9/12 ">
//
