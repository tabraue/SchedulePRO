import React, { useState } from "react";
import ButtonCustom from "../../../components/ButtonCustom/ButtonCustom";
import Alert from "../../../components/Alert/Alert";
import { createDepartment } from "../../../services/department.service";
import { useNavigate } from "react-router-dom";
import CloseIcon from '../../../components/Icon/CloseIcon'

function CreateDepartment() {
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

  // => propiedad HIDDEN == display:none

  return (
    <div className="grid items-center justify-center relative">
      <div className=" bg-purple-legend grid auto-rows-r justify-items-stretch place-content-center content-center items-center border-solid border-2 border-blue-calypso p-6 rounded-lg">
        <button className="justify-self-end"
        onClick={handleClose}
        >
        <CloseIcon/>
        </button>
        <h1 className="text-3xl font-bold text-white-sand text-center">
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
            className="block mb-2 text-sm font-medium text-black"
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
