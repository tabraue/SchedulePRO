import React from "react";

function AlertDelete({ text, onConfirm, onDecline }) {

  const onClickYes = () => {
    if (onConfirm) onConfirm();
  };

  const onClickNo = () => {
    if (onDecline) onDecline();
  };


  return (
    <div
      id="alert-additional-content
        "
      className="p-4 mb-4 text-red-chestnut border border-red-300 rounded-md bg-red-50"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>

        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium p-3">
          Do you want to delete {text}?
        </h3>
      </div>
      <div className="flex">
        <button
          type="button"
          className="text-white bg-red-chestnut hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center"
            onClick={onClickYes}
        >
          YES
        </button>
        <button
          type="button"
          className="text-red-800 bg-transparent border border-red-chestnut hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-xs px-3 py-1.5 text-center"
          data-dismiss-target="#alert-additional-content
            "
          aria-label="Close"
          onClick={onClickNo}
        >
          NO
        </button>
      </div>
    </div>
  );
}

export default AlertDelete;
