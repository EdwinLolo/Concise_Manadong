import React, { useState } from "react";

import Logo from "../assets/Assets_Manadong/image 22.svg";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="block w-full bg-[#004687] bg-opacity-90 top-3 px-8 md:px-12 lg:px-24 lg:py-3 backdrop-blur-lg backdrop-saturate-150">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-white">
        <a className="mr-4 block cursor-pointer py-1.5 text-base text-white font-semibold">
          <img src={Logo} alt="Logo" className="h-9 md:h-12" />
        </a>

        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>

        <div
          className={`w-full ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center justify-center p-1 text-sm text-white cursor-pointer gap-x-2">
              <a
                href="/"
                className="flex items-center hover:text-red-600 hover:font-bold hover:underline"
              >
                Home
              </a>
            </li>
            <li className="flex items-center justify-center p-1 text-sm text-white cursor-pointer gap-x-2">
              <a
                href="#"
                className="flex items-center hover:text-red-600 hover:font-bold hover:underline"
              >
                Eatery
              </a>
            </li>
            <li className="flex items-center justify-center p-1 text-sm text-white cursor-pointer gap-x-2">
              <a
                href="#"
                className="flex items-center hover:text-red-600 hover:font-bold hover:underline"
              >
                News
              </a>
            </li>
            <li className="flex items-center justify-center p-1 text-sm text-white cursor-pointer gap-x-2">
              <a
                href="/about"
                className="flex items-center hover:text-red-600 hover:font-bold hover:underline"
              >
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
