"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import bannerImg1 from "../../../public/assets/images/banner/1.jpg";
import bannerImg2 from "../../../public/assets/images/banner/2.jpg";
import bannerImg3 from "../../../public/assets/images/banner/3.jpg";
import bannerImg4 from "../../../public/assets/images/banner/4.jpg";
import bannerImg5 from "../../../public/assets/images/banner/5.jpg";
import bannerImg6 from "../../../public/assets/images/banner/6.jpg";

import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

const Banner = () => {
  const banners = [
    { src: bannerImg1, alt: "banner1" },
    { src: bannerImg2, alt: "banner2" },
    { src: bannerImg3, alt: "banner3" },
    { src: bannerImg4, alt: "banner4" },
    { src: bannerImg5, alt: "banner5" },
    { src: bannerImg6, alt: "banner6" },
  ];

  // refs for custom buttons
  const swiperRef = useRef(null);
  const prvRef = useRef(null);
  const nextRef = useRef(null);

  // State to track when Swiper is ready
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    if (isSwiperReady && swiperRef.current) {
      // Assign custom navigation elements after Swiper is initialized
      swiperRef.current.params.navigation.prevEl = prvRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      // Re-init navigation
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [isSwiperReady]);

  return (
    <div className="relative">
      <Swiper
        effect={"fade"}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prvRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full"
        onInit={(swiper) => {
          swiperRef.current = swiper;
          setIsSwiperReady(true);
        }}
      >
        {banners.map((banner, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full min-h-96 lg:min-h-[calc(100vh-65px)]">
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  style={{ objectFit: "cover" }}
                ></Image>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* custom navigation button */}
      <div className="absolute bottom-10 right-10 flex gap-2 z-20">
        <button
          ref={prvRef}
          className="bg-primary hover:bg-primary/80 cursor-pointer text-white p-3 rounded-full"
        >
          <IoChevronBackCircleOutline size={30} />
        </button>
        <button
          ref={nextRef}
          className="bg-primary hover:bg-primary/80 cursor-pointer text-white p-3 rounded-full"
        >
          <IoChevronForwardCircleOutline size={30} />
        </button>
      </div>
      {/* banner content */}
      <div className="absolute inset-0 flex items-center z-10 bg-gradient-to-r from-black/80 from-20% to-black/20 to-90%">
        <div className="w-11/12 max-w-7xl mx-auto text-white space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Affordable Price <br /> For Car <br /> Servicing
          </h2>
          <p>
            There are many variations of passages of available,
            <br />
            but the majority have suffered alteration in some form
          </p>
          <div className="flex flex-row gap-2 items-center">
            <button className="btn btn-primary rounded-md">
              Discover More
            </button>
            <button className="btn btn-primary btn-outline rounded-md">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
