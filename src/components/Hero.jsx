import Header from "./Header";
import mainBlob from "../assets/main_blob.png";
import arrow from "../assets/arrow.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

const Hero = () => {
  useGSAP(() => {
    mm.add("(min-width: 576px)", () => {
      gsap.to("#main-image", {
        scrollTrigger: {
          trigger: ".hero",
          start: "top 0%",
          end: "bottom 30%",
          scrub: 1,
        },
        ease: "linear",
        scale: 1.5,
      });
    });
  });
  return (
    <section className="hero relative">
      <Header />
      <img
        src={mainBlob.src}
        alt="blob"
        width="940"
        height="940"
        id="main-image"
        className="absolute left-1/2 -translate-x-1/2 z-0 top-0 md:-top-16 lg:-top-20 w-[375px] h-[378px] md:w-[731px] md:h-[737px] lg:w-[940px] lg:h-[900px]"
      />
      <div className="w-full px-2.5 md:px-5 lg:px-10 xl:px-0 xl:max-w-[1140px] mx-auto flex flex-col pt-28 md:pt-32 xl:pt-48 gap-5 md:gap-6 relative z-[1] items-center">
        <h1 className="font-mont text-4xl md:text-6xl lg:text-8xl text-center font-normal text-text">
          [ MOVE BEYOND ]
        </h1>
        <h2 className="font-inter text-base md:text-2xl lg:text-3xl text-center font-medium text-text mb-32 md:mb-48 lg:mb-40">
          Unleash Your Vision on Blockchain.
        </h2>
        <img src={arrow.src} alt="arrow" width="60" height="60" />
      </div>
    </section>
  );
};

export default Hero;
