import React, { useState } from "react";

// import images menu
import AyamRica from "../assets/Assets_Manadong/AyamRica.png";
import CumiHitam from "../assets/Assets_Manadong/CumiHitam.png";
import CakalangTinorasak from "../assets/Assets_Manadong/CakalangTinorasak.png";
import PerkedelJagung from "../assets/Assets_Manadong/PerkedelJagung.png";
import AyamWoku from "../assets/Assets_Manadong/AyamWoku.png";
import LaukFrozen from "../assets/Assets_Manadong/LaukFrozen.png";
import CakalangRabe from "../assets/Assets_Manadong/CakalangRica.png";

const menuItems = [
  {
    id: 1,
    name: "Ayam Rica",
    image: AyamRica,
    description:
      "Steamed Rice, 2 pieces of corn fritters, and spicy fried chicken.",
    price: "Rp. 40,000",
  },
  {
    id: 2,
    name: "Cumi Hitam",
    image: CumiHitam,
    description:
      "Steamed Rice, 2 pieces of corn fritters, and squid with black sauce.",
    price: "Rp. 40,000",
  },
  {
    id: 3,
    name: "Cakalang Tinorasak",
    image: CakalangTinorasak,
    description:
      "Steamed Rice, 2 pieces of corn fritters, and Cakalang Tinorasak.",
    price: "Rp. 40,000",
  },
  {
    id: 4,
    name: "Perkedel Jagung",
    image: PerkedelJagung,
    description:
      "Steamed Rice, 2 pieces of corn fritters, and Perkedel Jagung.",
    price: "Rp. 40,000",
  },
  {
    id: 5,
    name: "Ayam Woku",
    image: AyamWoku,
    description: "Steamed Rice, 2 pieces of corn fritters, and Ayam Woku.",
    price: "Rp. 40,000",
  },
  {
    id: 6,
    name: "Lauk Frozen",
    image: LaukFrozen,
    description: "Frozen side dishes that are ready to be cooked.",
    price: "Rp. 40,000",
  },
  {
    id: 7,
    name: "Cakalang Rabe",
    image: CakalangRabe,
    description: "Steamed Rice, 2 pieces of corn fritters, and Cakalang Rabe.",
    price: "Rp. 40,000",
  },
];

function Menu() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

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
        {menuItems.map((item) => (
          <div key={item.id} className={`Menu${item.id}`}>
            <button
              className="w-full text-sm font-bold text-black transition-all duration-150 rounded-md outline-none hover:shadow-lg focus:outline-none"
              type="button"
              onClick={() => setActiveModal(item)}
            >
              <img src={item.image} className="w-full" alt={item.name} />
              <h1 className="mt-2">{item.name}</h1>
            </button>
          </div>
        ))}
      </div>
      {activeModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-sm mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <button
                  className="absolute p-1 text-3xl font-semibold text-black bg-transparent bg-white border-0 outline-none right-2 top-2 rounded-3xl focus:outline-none"
                  onClick={closeModal}
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
                  src={activeModal.image}
                  className="w-full h-[90%] object-cover"
                  alt={activeModal.name}
                />
                <div className="w-full p-4">
                  <h1 className="mb-1 text-lg font-bold text-blue-600">
                    {activeModal.name}
                  </h1>
                  <p className="text-sm leading-relaxed text-blueGray-500">
                    {activeModal.description}
                  </p>
                  <h2 className="font-bold text-red-500">
                    {activeModal.price}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-40"
            onClick={closeModal}
          ></div>
        </>
      )}
      <div className="flex justify-center">
        <a href="/order">
          <button className="px-4 py-2 mt-6 font-bold text-blue-600 bg-transparent border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
            Order Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Menu;
