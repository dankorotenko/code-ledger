import blob2 from "../assets/blob2.png";
import commitment1 from "../assets/commitment1.svg";
import commitment2 from "../assets/commitment2.svg";
import commitment3 from "../assets/commitment3.svg";
import blob from "../assets/blob3.png";
import aptosLogo from "../assets/aptosLogo.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

const Commitment = () => {
  useGSAP(() => {
    mm.add("(min-width: 576px)", () => {
      gsap.to("#blob2", {
        scrollTrigger: {
          trigger: "#commitment",
          start: "top 30%",
          end: "bottom 80%",
          scrub: 1,
        },
        ease: "linear",
        translateX: "40%",
        translateY: "-20%",
      });
      gsap.to("#aptos-logo", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 30%",
          end: "bottom 50%",
          scrub: 1,
        },
        ease: "linear",
        translateY: "20%",
      });
      gsap.to("#aptos-bg", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 30%",
          end: "bottom 50%",
          scrub: 1,
        },
        ease: "linear",
        translateY: "-10%",
      });
    });
  });
  return (
    <section
      id="commitment"
      className="relative w-full px-2.5 md:px-5 lg:px-10 xl:px-0 xl:max-w-[1140px] mx-auto mt-20 md:mt-16 lg:mt-32"
    >
      <img
        src={blob2.src}
        alt="blob2"
        width="700"
        height="700"
        className="absolute z-0 top-[10%]"
        id="blob2"
      />
      <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl text-text font-mont mb-8 lg:mb-9">
        Our Commitment
      </h2>
      <div className="relative grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-2.5 md:gap-5 pb-32 md:pb-[90px] lg:pb-44 z-10">
        <div className="px-5 lg:px-10 py-5 lg:py-8 flex flex-col items-start rounded-[20px] gap-5 bg-[#050C31] border border-[#34576f]">
          <img
            src={commitment1.src}
            alt="commitment1"
            width={commitment1.width}
            height={commitment1.height}
          />
          <h3 className="w-full xl:w-[85%] font-mont font-semibold text-text text-xl md:text-2xl lg:text-3xl">
            Secure Protocols
          </h3>
          <p className="flex lg:min-h-36 flex-col text-base font-normal text-textAccent justify-end">
            Security is our top priority. We ensure that your ideas are shielded
            from potential threats where every line of code is crafted with
            precision.
          </p>
        </div>
        <div className="px-5 lg:px-10 py-5 lg:py-8 flex flex-col items-start rounded-[20px] gap-5 bg-[#050C31] border border-[#34576f]">
          <img
            src={commitment2.src}
            alt="commitment2"
            width={commitment2.width}
            height={commitment2.height}
          />
          <h3 className="w-full xl:w-[85%] font-mont font-semibold text-text text-xl md:text-2xl lg:text-3xl">
            Client-Centric Approach
          </h3>
          <p className="flex lg:min-h-36 flex-col text-base font-normal text-textAccent justify-end">
            Strong client relations define us. We value clear communication and
            client satisfaction. Our multilingual team ensures seamless
            collaboration, bridging language gaps to create an environment of
            understanding and cooperation.
          </p>
        </div>
        <div className="px-5 lg:px-10 py-5 lg:py-8 flex flex-col items-start rounded-[20px] gap-5 bg-[#050C31] border border-[#34576f]">
          <img
            src={commitment3.src}
            alt="commitment3"
            width={commitment3.width}
            height={commitment3.height}
          />
          <h3 className="w-full xl:w-[85%] font-mont font-semibold text-text text-xl md:text-2xl lg:text-3xl">
            Unwavering Commitment
          </h3>
          <p className="flex lg:min-h-36 flex-col text-base font-normal text-textAccent justify-end">
            Our commitments are not taken lightly. We uphold deadlines and
            promises with utmost dedication. Our commitment to excellence drives
            us to exceed expectations, delivering solutions with integrity and
            reliability.
          </p>
        </div>
      </div>
      <div id="about">
        <h2 className="relative text-center font-bold text-xl md:text-2xl lg:text-4xl text-text font-mont mb-2.5 md:mb-14 z-10">
          <span className="block text-stroke text-2xl md:text-4xl">
            Is Blockchain the Future?
          </span>
          We Can Help You Find Out.
        </h2>
        <div className="flex justify-between gap-4 md:gap-16 lg:gap-28 flex-col md:flex-row">
          <div className="flex-1 font-inter font-light text-sm md:text-xl md:leading-6 lg:text-2xl text-textAccent flex flex-col gap-6 pt-7 md:pt-11 lg:pt-16 max-w-[265px] md:max-w-none mx-auto md:mx-0">
            <p>
              We leverage <span className="font-bold">Aptos</span>, a blazingly
              fast blockchain, harnessing{" "}
              <span className="font-bold">Move</span>, the leading language for
              secure and generic smart-contract programming.
            </p>
            <p>
              We strive to serve as a trusted resource in{" "}
              <span className="font-medium">Belgium</span>. And we collaborate
              with clients locally and{" "}
              <span className="font-bold">globally</span>.
            </p>
          </div>
          <div className="lg:flex-1 relative mx-auto md:mx-0">
            <img
              src={blob.src}
              alt="blob"
              width="411"
              height="411"
              className="w-[306px] h-[306px] lg:w-[411px] lg:h-[411px]"
              id="aptos-bg"
            />
            <img
              src={aptosLogo.src}
              alt="Aptos Logo"
              width="342"
              height="84"
              className="absolute w-[216px] h-[53px] left-1/2 -translate-x-1/2 top-[40%] md:top-[112px] md:-left-[47px] md:translate-x-0"
              id="aptos-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
