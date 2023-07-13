import React, { useState } from "react";
import ButtonCustom from "../../../components/ButtonCustom/ButtonCustom";
import Alert from "../../../components/Alert/Alert";
import { createDepartment } from "../../../services/department.service";
import { useNavigate } from "react-router-dom";
import CloseIcon from '../../../components/Icon/CloseIcon'

function CreateDepartment({onClick}) {
  const title = "Create department";
  const confirm = "Confirm";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertDenied, setShowAlertDenied] = useState(false);
  const navigate = useNavigate()

  const handleName = (name) => {
    if (name.target.value.length != 0 || name.target.value.length != "") setName(name)
  };

  const handleDescription = (description) => {
    if (description.target.value.length === 0 || description.target.value.length === "") {
      setDescription("")
    }else{
      setDescription(description)
    }
  };

  const handleClose = () => {
    if(onClick) onClick()
  }

  const handleCreate = async () => {
    if (name) {
      const res = await createDepartment(
        name.target.value,
        description.target.value
      );
      if (res) {
        setShowAlertSuccess(!showAlertSuccess);
        const delay = setTimeout(() => {
          setShowAlertSuccess(!showAlertSuccess);
          //navigate('/home/departments')
        }, 1000);
        return () =>
          clearTimeout(delay);
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
    <div className="grid items-center justify-center">
      <div className=" grid justify-items-stretch place-content-center content-center items-center border-solid border-2 border-blue-calypso p-6 rounded-lg">
        <button className="justify-self-end"
        onClick={handleClose}
        >
        <CloseIcon/>
        </button>
        <h1 className="text-3xl font-bold text-white-sand text-center ml-10 mr-10 mb-10">
          {title}
        </h1>

        <div className="ml-10 mr-10 mb-10">
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
              className="bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm h-10 focus:ring-blue-calypso focus:border-blue-calypso"
              placeholder="Bookings"
              onChange={handleName}
            />
          </div>
        </div>

        <div  className="ml-10 mr-10">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-black"
          >
            Description
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 items-center">
              <textarea
                type="text"
                id="description"
                name='description'
                className="h-20 bg-white-sand border-blue-calypso text-blue-calypso text-md rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block"
                placeholder="Group reservations made directly"
                onChange={handleDescription}
              ></textarea>
            </div>
          </div>
        </div>

        {showAlertSuccess && <Alert type="green" svg="green" text="Success!" />}
        {showAlertDenied && (
          <Alert type="red" svg="red" text="Please, check your details." />
        )}
        <div className="flex justify-end mt-10">
          <ButtonCustom onClick={handleCreate} text={confirm} type="confirm" />
        </div>
      </div>
    </div>
  );
}

export default CreateDepartment;
