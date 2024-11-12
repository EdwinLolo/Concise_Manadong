import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Reviews() {
  return (
    <div className="px-20 py-10 bg-blue-100">
      <div className="mb-3 ReviewsTitle">
        <h1 className="text-2xl font-bold text-blue-600">
          <span className="underline decoration-[3px] underline-offset-[6px] decoration-red-500">
            Revi
          </span>
          ews
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="px-3 py-2 bg-white rounded-md h-fit">
          <div className="flex flex-col">
            <div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                style={{ color: "#FFD43B" }}
              />
            </div>
            <div className="flex flex-col p-3">
              <h1>Jennifer</h1>
              <p>
                Such a good value for your money. Really good Manadonese Food.
                Well recommended!
              </p>
            </div>
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: "#FFD43B" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-3 py-2 bg-white rounded-md h-fit">
          <div className="flex flex-col">
            <div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                style={{ color: "#FFD43B" }}
              />
            </div>
            <div className="flex flex-col p-3">
              <h1>Jennifer</h1>
              <p>
                Such a good value for your money. Really good Manadonese Food.
                Well recommended!
              </p>
            </div>
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: "#FFD43B" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-3 py-2 bg-white rounded-md h-fit">
          <div className="flex flex-col">
            <div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                style={{ color: "#FFD43B" }}
              />
            </div>
            <div className="flex flex-col p-3">
              <h1>Jennifer</h1>
              <p>
                Such a good value for your money. Really good Manadonese Food.
                Well recommended!
              </p>
            </div>
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: "#FFD43B" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-3 py-2 bg-white rounded-md h-fit">
          <div className="flex flex-col">
            <div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                style={{ color: "#FFD43B" }}
              />
            </div>
            <div className="flex flex-col p-3">
              <h1>Jennifer</h1>
              <p>
                Such a good value for your money. Really good Manadonese Food.
                Well recommended!
              </p>
            </div>
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: "#FFD43B" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-3 py-2 bg-white rounded-md h-fit">
          <div className="flex flex-col">
            <div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                style={{ color: "#FFD43B" }}
              />
            </div>
            <div className="flex flex-col p-3">
              <h1>Jennifer</h1>
              <p>
                Such a good value for your money. Really good Manadonese Food.
                Well recommended!
              </p>
            </div>
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: "#FFD43B" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-3 py-2 bg-white rounded-md h-fit">
          <div className="flex flex-col">
            <div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                style={{ color: "#FFD43B" }}
              />
            </div>
            <div className="flex flex-col p-3">
              <h1>Jennifer</h1>
              <p>
                Such a good value for your money. Really good Manadonese Food.
                Well recommended!
              </p>
            </div>
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: "#FFD43B" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-3 py-2 bg-white rounded-md h-fit">
          <div className="flex flex-col">
            <div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                style={{ color: "#FFD43B" }}
              />
            </div>
            <div className="flex flex-col p-3">
              <h1>Jennifer</h1>
              <p>
                Such a good value for your money. Really good Manadonese Food.
                Well recommended!
              </p>
            </div>
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: "#FFD43B" }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
