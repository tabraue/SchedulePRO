import React from "react";

function MailSentAlert() {
  return (
    <div
      className="p-4 text-md text-black rounded-md bg-green-vista text-center flex"
      role="alert"
    >
      <svg
        className="w-6 h-6 text-gray-800 ml-10"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 8v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8M1 8a1 1 0 0 1 .4-.8l8-5.75a1 1 0 0 1 1.2 0l8 5.75a1 1 0 0 1 .4.8M1 8l8.4 6.05a1 1 0 0 0 1.2 0L19 8"
        />
      </svg>
      <span className="font-medium ml-28">Schedules sent</span>
    </div>
  );
}

export default MailSentAlert;
