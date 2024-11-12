import React from "react";

// Import Image
import Promo1 from "../assets/Assets_Manadong/Promotion_1.jpg";

function Promotion() {
  return (
    <div className="flex flex-col w-full h-full px-20 py-10 bg-pink-200 md:flex-row">
      <div className="w-4/12 PromotionTitle">
        <div className="flex flex-col justify-start h-full mb-3 md:mb-0 lg:justify-center ">
          <h1 className="text-2xl font-bold text-blue-600">
            <span className="underline decoration-[3px] underline-offset-[6px] decoration-red-500">
              Pro
            </span>
            motion
          </h1>
        </div>
      </div>
      <div className="grid w-full grid-flow-row grid-cols-1 gap-4 md:w-8/12 md:grid-cols-2 lg:grid-cols-3 GambarPromo">
        <div className="w-full overflow-hidden bg-white rounded shadow-lg h-fit">
          <img className="w-full" src={Promo1} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold text-blue-600">
              Buy 2 Get 1
            </div>
            <p className="text-base text-gray-700">
              Buy 2 and get 1 free, applicable to select vaiants.
            </p>
          </div>
        </div>
        <div className="w-full overflow-hidden bg-white rounded shadow-lg h-fit">
          <img className="w-full" src={Promo1} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold text-blue-600">
              Discount 20%
            </div>
            <p className="text-base text-gray-700">
              Get a 20% discount on all purchases this weekend. Minimum purchase
              Rp. 50,000.
            </p>
          </div>
        </div>
        <div className="w-full overflow-hidden bg-white rounded shadow-lg h-fit">
          <img className="w-full" src={Promo1} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold text-blue-600">
              Bundle Deal
            </div>
            <p className="text-base text-gray-700">
              Purchase Ayam Woku and Ayam Rica can save 30% on the total cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
