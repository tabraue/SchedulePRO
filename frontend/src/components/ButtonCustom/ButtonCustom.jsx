import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonCustom({ onClick, text, type, navigate }) {
  // CUSTOMIZED BUTTON WITH ONCLICK, SOME TEXT TO BE ADDED, AND COLOR CHANGES DEPENDING ON THE REQUIREMENTS

  const go = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (navigate && navigate !== "") go(navigate);
  };

  const generateStyles = () => {
    let styles =
      "hover:text-black focus:ring-4 focus:outline-none font-lg rounded-sm text-base px-6 py-3 mr-2 mb-2";

    switch (type) {
      case "yellow":
        styles += " text-white-sand bg-yellow-sandy hover:bg-yellow-legend focus:ring-yellow-sandy p-5";
        break;
      case "icon":
        styles += " text-black bg-green-vista hover:bg-white-sand focus:ring-green-vista p-10";
        break;
      case "confirm":
        styles += " text-white-sand bg-green-bay hover:bg-green-paradiso focus:ring-green-bay";
        break;
      case "cancel":
        styles += " text-white-sand bg-red-chestnut hover:bg-red-legend focus:ring-red-chestnut p-5";
        break;
      case "blue":
        styles += " text-white-sand bg-blue-calypso hover:bg-blue-glacier focus:ring-blue-calypso p-5";
        break;
      default:
        styles += " text-white-sand bg-blue-calypso hover:bg-blue-glacier focus:ring-blue-calypso p-5";
        break;
    }
    return styles;
  };

  return (

      <button type="button" onClick={handleClick} className={generateStyles()}>
        {text}
      </button>

  );
}

export default ButtonCustom;
