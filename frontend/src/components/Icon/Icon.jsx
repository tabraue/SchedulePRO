import React from "react";

function Icon({ color, d}) {
  //d = is the icon itself
  //color = in case color changes

  const colorGenerator = () => {
    let style = 'cursor-pointer z-50'
    if(color === 'blue') style += ' w-4 h-4 text-blue-calypso'
    if(color === 'white') style += ' w-12 h-12 text-white-sand'
    if(color === 'black') style+= ' w-9 h-9 text-black'
    return style
  }

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
