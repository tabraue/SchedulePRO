import React, { useState } from "react";
import CloseIcon from "../Icon/CloseIcon";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import AlertDelete from "../Alert/AlertDelete/AlertDelete";
import { deleteEmployee } from "../../services/employee.service";

import Profile from "../Icon/Profile";

function ListEmployee({ info, setFlagDelete, flagDelete }) {
  const [openmodalstate, setModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [edit, setEdit] = useState(false);



  const toggleModal = () => {
    setModal(!openmodalstate);
    setOpenDelete(false)
  };

  //DELETE BUTTON (IF YOU WANT TO DELETE EMPLOYEE)
  const handleDelete = () => {
    setOpenDelete(!openDelete);
  };

  const employeeDeletion = async (id) => {
    await deleteEmployee(id);
    setFlagDelete(!flagDelete)
  };

  //IF DELETE BUTTON CLICKED -> ALERT -> IF (YES) YOU WANT TO DELETE DEPARTMENT:
  const handleClickYes = (id) => {
    setOpenDelete(false);
    setModal(false);
    employeeDeletion(id);
  };

  //IF DELETE BUTTON CLICKED -> ALERT -> IF (NO) YOU do not WANT TO DELETE DEPARTMENT:
  const handleClickNo = () => {
    setOpenDelete(false);
  };

  const handleEdition = () => {
    setEdit(!edit);
  };


  return (
    <>
      <div className="border-solid border-2 border-yellow-sandy m-1 p-3 grid grid-cols-3 content-center rounded-md bg-white-sand h-full flex-shrink-0 w-9/12">
        <button className="col-span-1 row-span-2 justify-self-center"  onClick={toggleModal}>
          <Profile />
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
                    <h3 className="text-2xl font-bold tracking-tight text-green-paradiso text-center border-b-2 border-green-paradiso p-3">
                      {`${info.name}  ${info.last_name}`}
                      {info.is_manager && (
                        <h5 className="text-md font-bold tracking-tight text-yellow-sandy">
                          Manager
                        </h5>
                      )}
                    </h3>
                    <div className="border-b-2 border-green-paradiso p-3">
                      <h3 className="text-green-paradiso font-bold ">
                        Department:{" "}
                      </h3>
                      <p className="font-normal text-black">
                        {info.department.name}
                      </p>
                    </div>

                    <div className="border-b-2 border-green-paradiso p-3">
                      <h3 className="text-green-paradiso font-bold ">
                        Position description:{" "}
                      </h3>
                      <p className="font-normal text-black">{info.position}</p>
                    </div>

                    <div className="border-b-2 border-green-paradiso p-3">
                      <h3 className="text-green-paradiso font-bold ">
                        Email:{" "}
                      </h3>
                      <p className="font-normal text-black">{info.email}</p>
                    </div>

                    <div className="flex space-x-4 justify-end pt-10">
                      {!edit && (
                        <ButtonCustom
                          text="Delete"
                          type="cancel"
                          onClick={handleDelete}
                        />
                      )}
                      {edit ? (
                        <ButtonCustom text="Confirm" type="confirm" />
                      ) : (
                        <ButtonCustom
                          text="Edit"
                          type="yellow"
                          onClick={handleEdition}
                        />
                      )}
                    </div>

                    {openDelete && (
                      <AlertDelete
                        text={info.name +' '+ info.last_name }
                        onConfirm={() => handleClickYes(info._id)}
                        onDecline={handleClickNo}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          <button onClick={toggleModal}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-paradiso hover:text-yellow-sandy">
              {info.name }
            </h5>
          </button>
        </div>
        <div className="col-start-2 col-end-3">
          <p className="text-md text-black h-full">{info.department.name}</p>
        </div>
      </div>
    </>
  );
}

export default ListEmployee;
