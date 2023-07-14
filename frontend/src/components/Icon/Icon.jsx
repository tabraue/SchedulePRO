import React from "react";

function Icon({ color, d }) {
  //d = is the icon itself
  //color = in case color changes
//z-50
  const colorGenerator = () => {
    let style = "cursor-pointer ";
    switch (color) {
      case "blue":
        style += " w-4 h-4 text-blue-calypso";
        break;
      case "white":
        style += " w-12 h-12 text-white-sand";
        break;
      case "black":
        style += " w-9 h-9 text-black";
        break;
        case "green":
          style += " w-12 h-12 text-green-paradiso ml-2";
          break;
      default:
        style += " w-4 h-4 text-blue-calypso";
        break;
    }
    return style;
  };

  return (
    <svg
      className={colorGenerator()}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d={d}
      />
    </svg>
  );
}

export default Icon;
