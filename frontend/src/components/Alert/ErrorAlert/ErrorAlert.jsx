import React from 'react'
import CloseIcon from '../../Icon/CloseIcon'

function ErrorAlert() {
  return (
    <div
    id="alert-additional-content
      "
    className="p-2 text-red-chestnut border border-red-300 rounded-md bg-red-50"
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
        Error adding to schedule.
      </h3>
    </div>
    <div className="flex">
       
    </div>
  </div>
  )
}

export default ErrorAlert