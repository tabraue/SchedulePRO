import React from "react";
import Icon from "../Icon/Icon";

function Password({ text, onChange, showHelper }) {

  //showHelper if true shows a helper text to user
  

  const handleChange = (e) => {
    if(onChange) onChange(e.target.value)
  }

  return (
    <div>
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-blue-calypso"
      >
        {text}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <Icon
            color={"blue-calypso"}
            d={
              "M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            }
          />
        </div>
        <input
          type="password"
          id="password"
          className="bg-white-sand border-blue-calypso text-blue-calypso text-sm rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block w-full pl-10 p-2.5 "
          placeholder="········"
          onChange={handleChange}
        />
      </div>
      {showHelper && <p id="helper-text-explanation" className="text-sm text-blue-calypso ">Password must contain at least 8 characters with 1 number and 1 special character . - _</p>}
    </div>
  );
}

export default Password;

/*
OJO ABIERTO

<svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"/>
    </g>
  </svg>



*/
