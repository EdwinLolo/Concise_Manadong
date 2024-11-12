import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faLaravel,
  faPhp,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

// import images menu
import AyamRica from "../assets/Assets_Manadong/AyamRica.png";
import CumiHitam from "../assets/Assets_Manadong/CumiHitam.png";
import CakalangTinorasak from "../assets/Assets_Manadong/CakalangTinorasak.png";
import PerkedelJagung from "../assets/Assets_Manadong/PerkedelJagung.png";
import AyamWoku from "../assets/Assets_Manadong/AyamWoku.png";
import LaukFrozen from "../assets/Assets_Manadong/LaukFrozen.png";
import CakalangRabe from "../assets/Assets_Manadong/CakalangRica.png";

function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);

  return (
    <div className="flex flex-col w-full px-3 pt-10 pb-5 md:px-20" id="Menu">
      <div className="flex w-full mb-6 MenuTitle">
        <h1 className="text-2xl font-bold text-blue-600">
          <span className="underline decoration-[3px] underline-offset-[6px] decoration-red-500">
            Our
          </span>{" "}
          Menu
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 MenuList">
        <div className="Menu1">
          <button
            className="w-full text-sm font-bold text-black transition-all duration-150 rounded-md outline-none ease-linearrounded active:bg-slate-300- hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <img src={AyamRica} className="w-full" alt="Ayam Rica" />
            <h1 className="mt-2">Ayam Rica</h1>
          </button>
          {showModal ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-sm mx-auto my-6">
                  <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    <div className="relative flex flex-col">
                      <div className="w-full">
                        <button
                          className="absolute p-1 text-3xl font-semibold text-black bg-transparent bg-white border-0 outline-none right-2 top-2 rounded-3xl focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="w-6 h-6 text-black bg-transparent outline-none rounded-3xl focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>

                        <img
                          src={AyamRica}
                          className="w-full h-[90%] object-cover"
                          alt="Ayam Rica"
                        />
                      </div>
                      <div className="w-full p-4">
                        <h1 className="mb-1 text-lg font-bold text-blue-600">
                          Ayam Rica
                        </h1>
                        <p className="text-sm leading-relaxed text-blueGray-500">
                          Steamed Rice, 2 pices of corn fritters, and spicy
                          fried chicken.
                        </p>
                        <h2 className="font-bold text-red-500">Rp. 40,000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
            </>
          ) : null}
        </div>
        <div className="Menu2">
          <button
            className="w-full text-sm font-bold text-black transition-all duration-150 rounded-md outline-none ease-linearrounded active:bg-slate-300- hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => setShowModal2(true)}
          >
            <img src={CumiHitam} className="w-full" alt="Cumi Hitam" />
            <h1>Cumi Hitam</h1>
          </button>
          {showModal2 ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-sm mx-auto my-6">
                  <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    <div className="relative flex flex-col">
                      <div className="w-full">
                        <button
                          className="absolute p-1 text-3xl font-semibold text-black bg-transparent bg-white border-0 outline-none right-2 top-2 rounded-3xl focus:outline-none"
                          onClick={() => setShowModal2(false)}
                        >
                          <span className="w-6 h-6 text-black bg-transparent outline-none rounded-3xl focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>

                        <img
                          src={CumiHitam}
                          className="w-full h-[90%] object-cover"
                          alt="Cumi Hitam"
                        />
                      </div>
                      <div className="w-full p-4">
                        <h1 className="mb-1 text-lg font-bold text-blue-600">
                          Cumi Hitam
                        </h1>
                        <p className="text-sm leading-relaxed text-blueGray-500">
                          Steamed Rice, 2 pices of corn fritters, and squid with
                          black sauce.
                        </p>
                        <h2 className="font-bold text-red-500">Rp. 40,000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
            </>
          ) : null}
        </div>
        <div className="Menu3">
          <button
            className="w-full text-sm font-bold text-black transition-all duration-150 rounded-md outline-none ease-linearrounded active:bg-slate-300- hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => setShowModal3(true)}
          >
            <img
              src={CakalangTinorasak}
              className="w-full"
              alt="Cakalang Tinorasak"
            />
            <h1>Cakalang Tinorasak</h1>
          </button>
          {showModal3 ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-sm mx-auto my-6">
                  <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    <div className="relative flex flex-col">
                      <div className="w-full">
                        <button
                          className="absolute p-1 text-3xl font-semibold text-black bg-transparent bg-white border-0 outline-none right-2 top-2 rounded-3xl focus:outline-none"
                          onClick={() => setShowModal3(false)}
                        >
                          <span className="w-6 h-6 text-black bg-transparent outline-none rounded-3xl focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>

                        <img
                          src={CakalangTinorasak}
                          className="w-full h-[90%] object-cover"
                          alt="Cakalang Tinorasak"
                        />
                      </div>
                      <div className="w-full p-4">
                        <h1 className="mb-1 text-lg font-bold text-blue-600">
                          Cakalang Tinorasak
                        </h1>
                        <p className="text-sm leading-relaxed text-blueGray-500">
                          Steamed Rice, 2 pices of corn fritters, and Cakalang
                          Tinorasak.
                        </p>
                        <h2 className="font-bold text-red-500">Rp. 40,000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
            </>
          ) : null}
        </div>
        <div className="Menu4">
          <button
            className="w-full text-sm font-bold text-black transition-all duration-150 rounded-md outline-none ease-linearrounded active:bg-slate-300- hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => setShowModal4(true)}
          >
            <img
              src={PerkedelJagung}
              className="w-full"
              alt="Perkedel Jagung"
            />
            <h1>Perkedel Jagung</h1>
          </button>
          {showModal4 ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-sm mx-auto my-6">
                  <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    <div className="relative flex flex-col">
                      <div className="w-full">
                        <button
                          className="absolute p-1 text-3xl font-semibold text-black bg-transparent bg-white border-0 outline-none right-2 top-2 rounded-3xl focus:outline-none"
                          onClick={() => setShowModal4(false)}
                        >
                          <span className="w-6 h-6 text-black bg-transparent outline-none rounded-3xl focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>

                        <img
                          src={PerkedelJagung}
                          className="w-full h-[90%] object-cover"
                          alt="Perkedel Jagung"
                        />
                      </div>
                      <div className="w-full p-4">
                        <h1 className="mb-1 text-lg font-bold text-blue-600">
                          Perkedel Jagung
                        </h1>
                        <p className="text-sm leading-relaxed text-blueGray-500">
                          Steamed Rice, 2 pices of corn fritters, and Perkedel
                          Jagung.
                        </p>
                        <h2 className="font-bold text-red-500">Rp. 40,000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
            </>
          ) : null}
        </div>
        <div className="Menu5">
          <button
            className="w-full text-sm font-bold text-black transition-all duration-150 rounded-md outline-none ease-linearrounded active:bg-slate-300- hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => setShowModal5(true)}
          >
            <img src={AyamWoku} className="w-full" alt="Ayam Woku" />
            <h1>Ayam Woku</h1>
          </button>
          {showModal5 ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-sm mx-auto my-6">
                  <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    <div className="relative flex flex-col">
                      <div className="w-full">
                        <button
                          className="absolute p-1 text-3xl font-semibold text-black bg-transparent bg-white border-0 outline-none right-2 top-2 rounded-3xl focus:outline-none"
                          onClick={() => setShowModal5(false)}
                        >
                          <span className="w-6 h-6 text-black bg-transparent outline-none rounded-3xl focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>

                        <img
                          src={AyamWoku}
                          className="w-full h-[90%] object-cover"
                          alt="Ayam Woku"
                        />
                      </div>
                      <div className="w-full p-4">
                        <h1 className="mb-1 text-lg font-bold text-blue-600">
                          Ayam Woku
                        </h1>
                        <p className="text-sm leading-relaxed text-blueGray-500">
                          Steamed Rice, 2 pices of corn fritters, and Ayam Woku.
                        </p>
                        <h2 className="font-bold text-red-500">Rp. 40,000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
            </>
          ) : null}
        </div>
        <div className="Menu6">
          <button
            className="w-full text-sm font-bold text-black transition-all duration-150 rounded-md outline-none ease-linearrounded active:bg-slate-300- hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => setShowModal6(true)}
          >
            <img src={LaukFrozen} className="w-full" alt="Lauk Frozen" />
            <h1>Lauk Frozen</h1>
          </button>
          {showModal6 ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-sm mx-auto my-6">
                  <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    <div className="relative flex flex-col">
                      <div className="w-full">
                        <button
                          className="absolute p-1 text-3xl font-semibold text-black bg-transparent bg-white border-0 outline-none right-2 top-2 rounded-3xl focus:outline-none"
                          onClick={() => setShowModal6(false)}
                        >
                          <span className="w-6 h-6 text-black bg-transparent outline-none rounded-3xl focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>

                        <img
                          src={LaukFrozen}
                          className="w-full h-[90%] object-cover"
                          alt="Lauk Frozen"
                        />
                      </div>
                      <div className="w-full p-4">
                        <h1 className="mb-1 text-lg font-bold text-blue-600">
                          Lauk Frozen
                        </h1>
                        <p className="text-sm leading-relaxed text-blueGray-500">
                          Frozen side dishes that are ready to be cooked.
                        </p>
                        <h2 className="font-bold text-red-500">Rp. 40,000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
            </>
          ) : null}
        </div>
        <div className="Menu7">
          <button
            className="w-full text-sm font-bold text-black transition-all duration-150 rounded-md outline-none ease-linearrounded active:bg-slate-300- hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => setShowModal7(true)}
          >
            <img src={CakalangRabe} className="w-full" alt="Cakalang Rabe" />
            <h1>Cakalang Rabe</h1>
          </button>
          {showModal7 ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-sm mx-auto my-6">
                  <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    <div className="relative flex flex-col">
                      <div className="w-full">
                        <button
                          className="absolute p-1 text-3xl font-semibold text-black bg-transparent bg-white border-0 outline-none right-2 top-2 rounded-3xl focus:outline-none"
                          onClick={() => setShowModal7(false)}
                        >
                          <span className="w-6 h-6 text-black bg-transparent outline-none rounded-3xl focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>

                        <img
                          src={CakalangRabe}
                          className="w-full h-[90%] object-cover"
                          alt="Cakalang Rabe"
                        />
                      </div>
                      <div className="w-full p-4">
                        <h1 className="mb-1 text-lg font-bold text-blue-600">
                          Cakalang Rabe
                        </h1>
                        <p className="text-sm leading-relaxed text-blueGray-500">
                          Steamed Rice, 2 pices of corn fritters, and Cakalang
                          Rabe.
                        </p>
                        <h2 className="font-bold text-red-500">Rp. 40,000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
            </>
          ) : null}
        </div>
      </div>
      <div className="flex justify-center">
        <a href="/order">
          <button className="px-4 py-2 mt-6 text-blue-600 font-bold bg-[#ffffff00] border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white w-fit">
            Order Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Menu;
