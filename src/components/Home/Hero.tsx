"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {  Sparkles } from "lucide-react";
import Image from "next/image";

import bg1 from "@/assets/images/home/banner/banner-bg1.jpg";
import bg2 from "@/assets/images/home/banner/banner-bg2.jpg";
import img from "@/assets/images/home/banner/banner1.jpg";
import img2 from "@/assets/images/home/banner/banner2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import Button from "../ui/Button";

const heroSlides = [
  {
    id: 1,
    subtitle: "WELCOME TO THE FUTURE OF AI",
    title: "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING REVOLUTION",
    description:
      "Transform your business with cutting-edge AI solutions that drive innovation and growth in the digital age.",
    primaryButton: "Event Explore",
    secondaryButton: "Register now",
    image: img,
    backgroundImage: bg1,
  },
  {
    id: 2,
    subtitle: "NEXT GENERATION TECHNOLOGY",
    title: "DEEP LEARNING & NEURAL NETWORKS MASTERY",
    description:
      "Harness the power of advanced algorithms to solve complex problems and unlock new possibilities.",
    primaryButton: "Event Explore",
    secondaryButton: "Register now",
    image: img2,
    backgroundImage: bg2,
  },
];


export default function AIHeroSlider() {


  const handleEploreEvent = () => {

  }



  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        speed={1000}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <Image
                src={slide.backgroundImage}
                alt="Background"
                fill
                priority
                className="absolute inset-0 object-cover"
              />

              {/* Red Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/80 to-red-900/70" />

              {/* Geometric Pattern Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
              </div>

              <div className="relative z-10 h-full">
                <div className="grid lg:grid-cols-2 h-full">
                  {/* Left Column - Content */}
                  <div className="flex items-center justify-center px-8 lg:px-16">
                    <div className="space-y-6 max-w-xl">
                      {/* Subtitle */}
                      <div className="transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="w-5 h-5 text-yellow-400" />
                          <span className="text-sm font-bold tracking-wider text-yellow-400 uppercase">
                            {slide.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Main Title */}
                      <div className="transform transition-all duration-1000 ease-out delay-200 translate-y-0 opacity-100">
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                          <span className="text-balance">{slide.title}</span>
                        </h1>
                      </div>

                     

                      {/* Buttons */}
                     
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">

                          <Button variant="black" buttonEvent={handleEploreEvent} >{slide.primaryButton}</Button>
                          <Button variant="white" buttonEvent={handleEploreEvent} >{slide.secondaryButton}</Button>
                          
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="flex items-center justify-center p-8">
                    <div className="transform transition-all duration-1000 ease-out delay-800 translate-y-0 opacity-100">
                      <div className="relative w-full h-[500px] lg:h-[600px]">
                        <Image
                          src={slide.image}
                          alt="AI Technology"
                          width={600}
                          height={500}
                          // priority
                          className="object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-700"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-8 left-8 flex gap-3 z-20">
                {heroSlides.map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      slideIndex === index ? "bg-white w-12" : "bg-white/50 w-6"
                    }`}
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
