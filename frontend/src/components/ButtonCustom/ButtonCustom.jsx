import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonCustom({ onClick, text, type, navigate }) {
  // CUSTOMIZED BUTTON WITH ONCLICK, SOME TEXT TO BE ADDED, AND COLOR CHANGES DEPENDING ON THE REQUIREMENTS

  const go = useNavigate()

  const handleClick = () => {
    if (onClick) onClick() 
    if (navigate && navigate !== '')  go(navigate) 
  }



  const generateStyles = () => {
    let styles = 'text-white-sand hover:text-black focus:ring-4 focus:outline-none font-lg rounded-sm text-base px-6 py-3 mr-2 mb-2'
    if (type === 'yellow') styles += ' bg-yellow-sandy hover:bg-yellow-legend focus:ring-yellow-sandy'
    if (type === 'icon') styles += ' bg-green-vista hover:bg-green-vista focus:ring-green-vista'
    if (type === 'confirm') styles += ' bg-green-bay hover:bg-green-paradiso focus:ring-green-bay'
    if (type === 'cancel') styles += ' bg-red-chestnut hover:bg-red-legend focus:ring-red-chestnut'
    if (type === 'blue') styles += ' bg-blue-calypso hover:bg-blue-glacier focus:ring-blue-calypso'
    return styles
  }
  
  return (
    <div style={{ padding: "10px" }}>
      <button
        type="button"
        onClick={handleClick}
        className={generateStyles()}
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonCustom;