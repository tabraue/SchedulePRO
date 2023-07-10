import React from "react";

function ButtonCustom({ onClick, text, bcolor, bhover }) {
  // CUSTOMIZED BUTTON WITH ONCLICK, SOME TEXT TO BE ADDED, AND COLOR CHANGES DEPENDING ON THE REQUIREMENTS
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <button
        type="button"
        onClick={handleClick}
        className={`text-white-sand bg-blue-calypso hover:bg-${bhover} hover:text-black focus:ring-4 focus:ring-${bcolor} focus:outline-none font-lg rounded-sm text-base px-6 py-3 mr-2 mb-2`}
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonCustom;