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
      <footer class="text-white body-font bg-[#004687]">
        <div class="px-20 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-1/2 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={Logo} alt="Logo" className="w-44" />
            </a>
            <p class="mt-4 text-sm text-white">
              Copyright &copy; 2023 PT Bogadong Anugerah Indonesia
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:mt-0 mt-10 md:text-left text-center">
            <div class="md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-whitetracking-widest text-sm mb-3">
                Contact Us
              </h2>
              <nav class="list-none mb-10 flex-col flex gap-3">
                <div>
                  <a class="text-white hover:text-gray-800 cursor-pointer">
                    Email :{" "}
                    <span className="underline underline-offset-2">
                      Manadong@gmail.com
                    </span>
                  </a>
                </div>
                <div>
                  <a class="text-white hover:text-gray-800 cursor-pointer">
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
            <div class="md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-whitetracking-widest text-sm mb-3">
                Available On
              </h2>
              <nav class="list-none mb-10 flex flex-col gap-3">
                <div>
                  <a class="text-white hover:text-gray-800 cursor-pointer underline underline-offset-2">
                    Grab Food
                  </a>
                </div>
                <div>
                  <a class="text-white hover:text-gray-800 cursor-pointer underline underline-offset-2">
                    GoFood
                  </a>
                </div>
                <div>
                  <a class="text-white hover:text-gray-800 cursor-pointer underline underline-offset-2">
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
