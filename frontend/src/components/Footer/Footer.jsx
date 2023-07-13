import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-calypso rounded-sm w-full bottom-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 text-center">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center justify-center text-center space-x-12 mb-6 text-sm font-medium text-white-sand sm:mb-0">
            <li className="ml-4 sm:ml-6">
              <a href="#" className="mr-4 hover:underline md:mr-6">
                About us
              </a>
            </li>
            <li className="ml-4 sm:ml-6">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-white-sand sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white-sand text-center">
          © 2023{" "}
          <a href="https://github.com/tabraue" className="hover:underline">
            SchedulePRO™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
