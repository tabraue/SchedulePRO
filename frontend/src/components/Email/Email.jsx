import React from "react";
import Icon from "../Icon/Icon";

function Email({ text, id, onChange }) {
  const handleChange = (e) => {
    if(onChange) onChange(e.target.value)
  }

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-blue-calypso"
      >
        {text}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <Icon
            color="blue"
            d={
              "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            }
          />
        </div>
        <input
          type="email"
          id={id}
          className="bg-white-sand border-blue-calypso text-blue-calypso text-sm rounded-sm focus:ring-blue-calypso focus:border-blue-calypso block w-full pl-10 p-2.5"
          placeholder="email@schedule-pro.com"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Email;
