import React from "react";

function Alert({ text, type, svg }) {
  //borderColor: if wrong red-chestnut
  //             if correct green-bay

  const styleGenerator = () =>{
    let style = 'flex items-center p-4 mb-4 text-sm text-black border-solid border-2 rounded-md bg-white-sand'
    if (type === 'red') style += ' border-red-chestnut'
    if (type === 'green') style += ' border-green-bay'

    return style
  }

  const styleSvg = () =>{
    let style = 'flex-shrink-0 inline w-4 h-4 mr-3 '
    if (type === 'red') style += ' fill-red-chestnut'
    if (type === 'green') style += ' fill-green-bay'

    return style
  }


  return (
    <>
      <div
        className={styleGenerator()}
        role="alert"
      >
        <svg
          className={styleSvg()}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className='font-medium text-black'>{text}</span>
        </div>
      </div>
    </>
  );
}

export default Alert;
