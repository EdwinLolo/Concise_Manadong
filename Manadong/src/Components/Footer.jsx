import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../assets/Assets_Manadong/image 22.svg";

function Footer() {
  return (
    <div>
      <footer className="text-white body-font bg-[#004687]">
        <div className="flex flex-col flex-wrap px-20 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
          <div className="flex-shrink-0 w-1/2 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <img src={Logo} alt="Logo" className="w-44" />
            </a>
            <p className="mt-4 text-sm text-white">
              Copyright &copy; 2023 PT Bogadong Anugerah Indonesia
            </p>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 text-center md:mt-0 md:text-left">
            <div className="w-full px-4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium title-font text-whitetracking-widest">
                Contact Us
              </h2>
              <nav className="flex flex-col gap-3 mb-10 list-none">
                <div>
                  <a className="text-white cursor-pointer hover:text-gray-800">
                    Email :{" "}
                    <span className="underline underline-offset-2">
                      Manadong@gmail.com
                    </span>
                  </a>
                </div>
                <div>
                  <a className="text-white cursor-pointer hover:text-gray-800">
                    Telp :{" "}
                    <span className="underline underline-offset-2">
                      {" "}
                      +62-811-1009-115{" "}
                    </span>
                  </a>
                </div>
                <div className="flex items-center justify-center w-full gap-2">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: "#ffffff" }}
                    className="cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#ffffff" }}
                    className="cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#ffffff" }}
                    className="cursor-pointer"
                  />
                </div>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium title-font text-whitetracking-widest">
                Available On
              </h2>
              <nav className="flex flex-col gap-3 mb-10 list-none">
                <div>
                  <a className="text-white underline cursor-pointer hover:text-gray-800 underline-offset-2">
                    Grab Food
                  </a>
                </div>
                <div>
                  <a className="text-white underline cursor-pointer hover:text-gray-800 underline-offset-2">
                    GoFood
                  </a>
                </div>
                <div>
                  <a className="text-white underline cursor-pointer hover:text-gray-800 underline-offset-2">
                    Shopee Food
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
