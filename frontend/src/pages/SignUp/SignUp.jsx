import React, { useState } from "react";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { companySignUp } from "../../services/auth.service";
import Email from "../../components/Email/Email";
import Password from "../../components/Password/Password";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [vat, setVat] = useState("");
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (name) => {
    setName(name);
  };

  const handleVat = (vat) => {
    setVat(vat);
  };

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handleEmailCheck = (emailCheck) => {
    setEmailCheck(emailCheck);
  };

  const handlePass = (pass) => {
    setPassword(pass);
  };
  const signup = "Sign Up";
  const title = "Sign Up"

  const handleSignUp = async () => {
    const signUpSuccess = await companySignUp(
      name.target.value,
      vat.target.value,
      email.target.value,
      password.target.value
    );
    if (signUpSuccess) {
      console.log("Sign up successful");
    } else {
      console.log("Sign up failed");
    }
  };

  return (
    <div className="flex items-center h-screen w-screen justify-center ">
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
            />
          </div>
        </div>

        <Email text="Email" id="email-address" />
        <Email text="Confirm your email" id="email-conf-address" />
        <Password text="Password" />

        <div className="grid-cols-1 items-center space-y-3">
          <div>
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-calypso bg-white-sand border-gray-l rounded focus:ring-blue-glacier "
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
              value=""
              className="w-4 h-4 text-blue-calypso bg-white-sand border-gray-l rounded focus:ring-blue-glacier"
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
          <Link to='/'>I already have an account.</Link>
        </div>

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
