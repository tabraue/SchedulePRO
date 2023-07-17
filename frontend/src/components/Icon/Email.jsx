import React from "react";

function Email({onClick}) {

  const handleClick = () => {
    if (onClick) onClick();
  };


  return (

      <svg
        className="w-8 h-8 text-green-paradiso hover:text-yellow-sandy"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
        onClick={handleClick}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
        />
      </svg>

  );
}

export default Email;
