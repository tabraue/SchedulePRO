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
    <div className="min-w-screen h-screen relative">
      <div className="absolute inset-0 ">
        <img
          src="https://source.unsplash.com/random?technology,business"
          alt="business"
          className="w-[100%] h-[100%] object-cover relative"
        />
      </div>
      <div className="min-w-screen min-h-screen flex items-center justify-center z-50">
        <div className="shadow-md bg-white-sand min-w-[600px] min-h-[500px] w-64 h-64 grid auto-rows-r justify-items-stretch gap-y-3 place-content-center content-center items-center border-solid border-2 border-blue-calypso p-6 z-50">
          <h1 className="text-3xl font-extrabold text-blue-calypso text-center z-50">
            {title}
          </h1>

          <Email text="Email" id="email-address" onChange={handleEmail} />
          <Password
            text="Password"
            onChange={handlePassword}
            showHelper={false}
          />

          <div className=" hover:text-blue-calypso font-bold text-yellow-sandy pt-3">
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
    </div>
  );
}

export default LogIn;
