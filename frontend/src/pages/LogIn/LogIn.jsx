import React, { useState } from "react";
import Email from "../../components/Email/Email";
import Password from "../../components/Password/Password";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { companyLogIn } from "../../services/auth.service";

function LogIn() {
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertDenied, setShowAlertDenied] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const title = "Log In";
  const login = "Log in";

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePassword = (password) => {
    setPassword(password);
  };

  const handleLogIn = async () => {
    const logcompany = await companyLogIn(email, password);
    if (logcompany) {
      setShowAlertSuccess(!showAlertSuccess);
      const delay = setTimeout(() => {
        navigate("/home/dashboard");
      }, 100);
      return () => clearTimeout(setShowAlertSuccess(!showAlertSuccess), delay);
    } else {
      setShowAlertDenied(true);
      const delay = setTimeout(() => {
        setShowAlertDenied(false);
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

        <Email text="Email" id="email-address" onChange={handleEmail} />
        <Password
          text="Password"
          onChange={handlePassword}
          showHelper={false}
        />

        <div className=" text-blue-calypso hover:text-yellow-sandy ">
          <Link to="/signup">I do not have an account yet.</Link>
        </div>
        {showAlertSuccess && (
          <Alert type="green" svg="green" text="Welcome to SchedulePRO!" />
        )}
        {showAlertDenied && (
          <Alert type="red" svg="red" text="Please, check your details." />
        )}
        <div className="flex justify-end">
          <ButtonCustom onClick={handleLogIn} text={login} type="blue" />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
