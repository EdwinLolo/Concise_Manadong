import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import { Pagination, Keyboard, Mousewheel } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    name: "Jennifer",
    text: "Such a good value for your money. Really good Manadonese Food. Well recommended!",
  },
  {
    name: "Alexa",
    text: "Cakalangnya terbaikkkkkkk, the best cakalang everrrr",
  },
  {
    name: "Nadia",
    text: "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab",
  },
  {
    name: "Jennifer",
    text: "Such a good value for your money. Really good Manadonese Food. Well recommended!",
  },
  {
    name: "Alexa",
    text: "Cakalangnya terbaikkkkkkk, the best cakalang everrrr",
  },
  {
    name: "Nadia",
    text: "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab",
  },
  {
    name: "Jennifer",
    text: "Such a good value for your money. Really good Manadonese Food. Well recommended!",
  },
  {
    name: "Alexa",
    text: "Cakalangnya terbaikkkkkkk, the best cakalang everrrr",
  },
  {
    name: "Nadia",
    text: "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab",
  },
];

export default function Reviews() {
  return (
    <div className="px-20 py-10 bg-blue-100">
      <div className="mb-8 ReviewsTitle">
        <h1 className="text-2xl font-bold text-blue-600">
          <span className="underline decoration-[3px] underline-offset-[6px] decoration-red-500">
            Revi
          </span>
          ews
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        mousewheel={{ invert: true }}
        modules={[Pagination, Keyboard, Mousewheel]}
        className="mySwiper"
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="px-3 py-2 bg-white rounded-md h-fit"
          >
            <div className="flex flex-col">
              <div>
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ color: "#FFD43B" }}
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col p-3">
                <h1 className="font-bold text-blue-600 text-md">
                  {review.name}
                </h1>
                <p>{review.text}</p>
              </div>
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  style={{ color: "#FFD43B" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
