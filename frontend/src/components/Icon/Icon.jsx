import React from "react";

function Icon({ color, d }) {
  //d = is the icon itself
  //color = in case color changes

  return (
    <svg
      className={`w-4 h-4 text-${color}`}
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
