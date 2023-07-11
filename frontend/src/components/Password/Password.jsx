import React, { useState } from "react";
import Icon from "../Icon/Icon";

function Password({ text, onChange, showHelper }) {
  //showHelper if true shows a helper text to user
  // 8 characters
  // at least 1 number
  // 1 special character . - _
  // text-gray-400
  // text-green-bay

  const [lengthValid, setLengthValid] = useState(false);
  const [specialValid, setSpecialValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);
  const [viewPass, setViewPass] = useState(false);

  const handleChange = (e) => {
    if (showHelper === true) {
      const pass = e.target.value;
      const length = pass.length >= 8;
      const special = /[._-]/.test(pass);
      const numbers = /[0-9]/.test(pass);

      if (length) setLengthValid(true);
      if (special) setSpecialValid(true);
      if (numbers) setNumberValid(true);
    }
    if (onChange) onChange(e.target.value);
  };

  const handleViewPass = () => {
    setViewPass(!viewPass);
  };

  const eyeOpen = (
    <svg
      className="w-4 h-4 cursor-pointer z-50 text-blue-calypso"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
      </g>
    </svg>
  );
  return (
    <div>
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-blue-calypso "
      >
        {text}
      </label>
      <div className="relative cursor-pointer">
        <div
          className="absolute inset-y-0 left-0 flex items-center pl-3.5 cursor-pointer"
          onClick={handleViewPass}
        >
          {viewPass ? (
            eyeOpen
          ) : (
            <Icon
              color="blue"
              d={
                "M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              }
            />
          )}
        </div>
        <input
          type={viewPass ? "text" : "password"}
          id="password"
          className="bg-white-sand border-blue-calypso text-blue-calypso text-sm rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block w-full pl-10 p-2.5 "
          placeholder="········"
          onChange={handleChange}
        />
      </div>
      {showHelper && (
        <>
          <ul className="max-w-md space-y-1 text-gray-400 list-inside pl-2 pt-2 text-xs">
            <li className="flex items-center">
              <svg
                className={`w-3.5 h-3.5 mr-2 ${
                  lengthValid ? "text-green-bay" : "text-gray-400"
                } flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              At least 8 characters
            </li>
            <li className="flex items-center">
              <svg
                className={`w-3.5 h-3.5 mr-2 ${
                  numberValid ? "text-green-bay" : "text-gray-400"
                } flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              At least one number
            </li>
            <li className="flex items-center">
              <svg
                className={`w-3.5 h-3.5 mr-2 ${
                  specialValid ? "text-green-bay" : "text-gray-400"
                } flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              At least one special character, e.g., . - _
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Password;
