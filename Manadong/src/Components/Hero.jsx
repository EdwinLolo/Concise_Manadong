import React from "react";

// Importing Images
import HeroImg from "../assets/Assets_Manadong/image 14.png";

function Hero() {
  return (
    <div className="w-full h-[90%] bg-[#F5D2D2] flex flex-col md:flex-row box-border">
      <div className="box-border w-full px-10 py-10 lg:py-0 lg:px-16 md:w-1/3 kiri">
        <div className="container flex flex-col justify-center h-full mx-auto ">
          <h1 className="text-3xl font-bold text-red-500 lg:text-4xl">
            Manadong
          </h1>
          <p className="mt-4 text-black text-md lg:text-xl">
            is a Manado dish with a spicy and appetizing flavour.
          </p>
          <p className="mt-4 text-red-500 text-md lg:text-xl">
            #NikmatnyaGaPakeRibet
          </p>
          <button className="px-4 py-2 mt-6 text-blue-600 font-bold bg-[#ffffff00] border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white w-fit">
            Order Now
          </button>
        </div>
      </div>
      <div className="w-full md:w-2/3 kanan">
        <img src={HeroImg} alt="Hero Image" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Hero;
