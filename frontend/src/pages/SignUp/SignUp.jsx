import React, { useState } from "react";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { companySignUp } from "../../services/auth.service";
import Email from "../../components/Email/Email";
import Password from "../../components/Password/Password";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";

function SignUp() {
  const [name, setName] = useState("");
  const [vat, setVat] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertDenied, setShowAlertDenied] = useState(false);
  const [isChecked1, setisChecked1] = useState(false);
  const [isChecked2, setisChecked2] = useState(false);
  const navigate = useNavigate();
  const signup = "Sign Up";
  const title = "Sign Up";

  const handleName = (name) => {
    setName(name);
  };

  const handleVat = (vat) => {
    setVat(vat);
  };

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePassword = (password) => {
    setPassword(password);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gi;
    return emailRegex.test(email) ? true : false;
  };

  const validatePass = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[._-])[a-zA-Z0-9._-]{8,}$/gi;
    return passwordRegex.test(password) ? true : false;
  };

  const handleChecked1 = () => {
    setisChecked1(!isChecked1);
  };

  const handleChecked2 = () => {
    setisChecked2(!isChecked2);
  };

  const handleSignUp = async () => {
    if (
      validateEmail(email) &&
      validatePass(password) &&
      isChecked1 === true &&
      isChecked2 === true
    ) {
      const signCompany = await companySignUp(
        name.target.value,
        vat.target.value,
        email,
        password
      );
      if (signCompany) {
        setShowAlertSuccess(!showAlertSuccess);
        const delay = setTimeout(() => {
          //navigate('/login')
        }, 2000);
        return () => clearTimeout(delay);
      } else {
        setShowAlertDenied(true);
        const delay = setTimeout(() => {
          setShowAlertDenied(!showAlertDenied);
        }, 2000);
        return () => clearTimeout(delay);
      }
    } else {
      setShowAlertDenied(true);
      const delay = setTimeout(() => {
        setShowAlertDenied(!showAlertDenied);
      }, 2000);
      return () => clearTimeout(delay);
    }
  };

  return (
    <div className="flex items-center h-screen w-full justify-center ">
      <div className="grid auto-rows-r justify-items-stretch gap-y-3 place-content-center content-center items-center border-solid border-2 border-blue-calypso p-6 rounded-sm">
        <h1 className="text-3xl font-extrabold text-blue-calypso text-center">
          {title}
        </h1>

        <div>
          <label
            htmlFor="company-name"
            className="block mb-2 text-sm font-medium text-blue-calypso"
          >
            Company Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"></div>
            <input
              type="text"
              id="company-name"
              className="bg-white-sand border-blue-calypso text-blue-calypso text-sm rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block w-full pl-10 p-2.5 "
              placeholder="Company LTD"
              onChange={handleName}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="vat"
            className="block mb-2 text-sm font-medium text-blue-calypso"
          >
            VAT
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"></div>
            <input
              type="text"
              id="vat"
              className="bg-white-sand border-blue-calypso text-blue-calypso text-sm rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block w-full pl-10 p-2.5 "
              placeholder="ESB1234567"
              onChange={handleVat}
            />
          </div>
        </div>

        <Email text="Email" id="email-address" onChange={handleEmail} />
        <Password text="Password" onChange={handlePassword} showHelper={true} />
        <div className="grid-cols-1 items-center space-y-3">
          <div>
            <input
              id="link-checkbox"
              type="checkbox"
              value="term"
              className="w-4 h-4 text-blue-calypso bg-white-sand border-gray-l rounded focus:ring-blue-glacier "
              required
              checked={isChecked1}
              onChange={handleChecked1}
            />
            <label
              htmlFor="link-checkbox"
              className="ml-2 text-sm font-medium text-blue-calypso"
            >
              I agree with the{" "}
              <Link className="text-yellow-sandy" to={"/terms"}>
                terms and conditions
              </Link>
              .
            </label>
          </div>
          <div>
            <input
              id="link-checkbox"
              type="checkbox"
              value="own"
              className="w-4 h-4 text-blue-calypso bg-white-sand border-gray-l rounded focus:ring-blue-glacier"
              required
              checked={isChecked2}
              onChange={handleChecked2}
            />
            <label
              htmlFor="link-checkbox"
              className="ml-2 text-sm font-medium text-blue-calypso"
            >
              I declare to be owner or responsible of this company.
            </label>
          </div>
        </div>

        <div className=" text-blue-calypso hover:text-yellow-sandy ">
          <Link to="/login">I already have an account.</Link>
        </div>
        {showAlertSuccess && (
          <Alert color="green-bay" text="Welcome to SchedulePRO" />
        )}
        {showAlertDenied && (
          <Alert color="red-chestnut" text="Please, check your details." />
        )}
        <div className="flex justify-end">
          <ButtonCustom
            onClick={handleSignUp}
            text={signup}
            bcolor={"blue-calypso"}
            bhover={"blue-glacier"}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
