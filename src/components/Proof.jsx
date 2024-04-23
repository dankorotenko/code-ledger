import miniLogo from "../assets/miniLogo.svg";
import blobBg from "../assets/main_blob.png";
import blob4Bg from "../assets/blob4.png";
import proof1 from "../assets/proof1.svg";
import proof2 from "../assets/proof2.svg";
import proof3 from "../assets/proof3.svg";
import aptos from "../assets/aptos.svg";
import bapt from "../assets/bapt.svg";
import renegades from "../assets/renegades.svg";
import sphera from "../assets/sphera.png";
import townespace from "../assets/townespace.svg";
import townesquare from "../assets/townesquare.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

const Proof = () => {
  useGSAP(() => {
    mm.add("(min-width: 576px)", () => {
      gsap.to("#proof", {
        scrollTrigger: {
          trigger: "#proof",
          start: "top 40%",
          end: "bottom 30%",
          scrub: 1,
        },
        ease: "linear",
        backgroundSize: "110%"
      });
    });
  });
  return (
    <>
      <section className="w-full px-2.5 md:px-5 lg:px-10 xl:px-0 xl:max-w-[1140px] mx-auto mt-20 md:mt-12">
        <div
          className="bg-center shadow-[0px_50px_200px_0px_#967fc44d] rounded-[20px] p-5 md:p-10 gap-6 lg:gap-0 border border-solid border-[#967FC480] flex lg:items-center flex-col md:flex-row items-start"
          style={{ backgroundImage: `url(${blobBg.src})` }}
        >
          <div className="flex-0 lg:flex-1 flex justify-center">
            <img
              src={miniLogo.src}
              alt={"Code & Ledger Logo"}
              width={miniLogo.width}
              height={miniLogo.height}
              className="max-w-none"
            />
          </div>
          <div className="flex-3.5 flex flex-col gap-6">
            <h2 className="font-bold text-text font-mont text-2xl md:text-4xl">
              Proof of Collaboration Protocol
            </h2>
            <p className="font-inter text-textAccent font-normal text-sm md:text-base">
              Introducing our feature - the Code & Ledger NFT Certification,
              known as "PoCP." Each successful collaboration results in a
              soulbound NFT, a digital testament to our commitment to excellence
              and security in every project...
            </p>
            <a
              href="/"
              className="font-inter font-normal text-text underline text-sm md:text-base"
            >
              Read more
            </a>
          </div>
        </div>
      </section>

      <section
        className="bg-[length:110%] bg-[300%_65%] md:bg-[length:120%] md:bg-[20%_100%] lg:bg-[length:70%] lg:bg-[40%_20%] xl:bg-[length:95%] xl:bg-[160%_40%] bg-no-repeat w-full px-2.5 md:px-5 lg:px-10 xl:px-0 xl:max-w-[1140px] mx-auto pt-[120px] xl:pt-[290px]"
        style={{ backgroundImage: `url(${blob4Bg.src})` }}
        id="proof"
      >
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-0 pb-[100px]">
          <h2 className="font-bold text-[32px] md:text-5xl xl:text-6xl text-text font-inter text-stroke mt-0 md:mt-7">
            What Proof of Collaboration Includes
          </h2>
          <div className="border-[#967FC480] border rounded-[20px] p-[10px] bg-[#050C31] w-full">
            <div className="p-2.5 sm:p-5 flex flex-col md:flex-row lg:flex-col gap-4 items-start">
              <img
                src={proof1.src}
                alt="proof1"
                width={proof1.width}
                height={proof1.height}
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-mont font-semibold text-[20px] sm:text-2xl text-text">
                  Project Approval Metadata
                </h3>
                <p className="font-inter font-normal text-base text-textAccent">
                  Clearly states Code & Ledger's approval of the project.
                </p>
              </div>
            </div>
            <div className="p-2.5 sm:p-5 flex flex-col md:flex-row lg:flex-col gap-4 items-start">
              <img
                src={proof2.src}
                alt="proof2"
                width={proof2.width}
                height={proof2.height}
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-mont font-semibold text-[20px] sm:text-2xl text-text">
                  Audit Status
                </h3>
                <p className="font-inter font-normal text-base text-textAccent">
                  Indicates whether the developed protocol underwent a
                  comprehensive audit before deployment.
                </p>
              </div>
            </div>
            <div className="p-2.5 sm:p-5 flex flex-col md:flex-row lg:flex-col gap-4 items-start">
              <img
                src={proof3.src}
                alt="proof3"
                width={proof3.width}
                height={proof3.height}
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-mont font-semibold text-[20px] sm:text-2xl text-text">
                  Project Details
                </h3>
                <p className="font-inter font-normal text-base text-textAccent">
                  Key information about the project, encapsulated within the
                  metadata
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-2.5 md:px-5 lg:px-10 xl:px-0 xl:max-w-[1140px] mx-auto mt-5 mb-24 md:mt-11 md:mb-28 xl:mt-16 xl:mb-36">
          <h2 className="font-mont text-text font-bold text-2xl sm:text-4xl text-center">
            Co-built by us
          </h2>
          <div className="flex flex-col flex-nowrap justify-center items-center gap-10 mt-9 md:flex-wrap md:flex-row">
            <img
              src={aptos.src}
              alt="Aptos"
              width={aptos.width}
              height={aptos.height}
            />
            <img
              src={bapt.src}
              alt="Bapt"
              width={bapt.width}
              height={bapt.height}
            />
            <img
              src={renegades.src}
              alt="Renegades"
              width={renegades.width}
              height={renegades.height}
            />
            <img
              src={sphera.src}
              alt="Sphera"
              width={sphera.width}
              height={sphera.height}
            />
            <img
              src={townespace.src}
              alt="Townespace"
              width={townespace.width}
              height={townespace.height}
            />
            <img
              src={townesquare.src}
              alt="Townesquare"
              width={townesquare.width}
              height={townesquare.height}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Proof;
