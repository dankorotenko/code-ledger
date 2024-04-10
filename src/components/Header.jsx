import { useState, useRef } from "react";
import logo from "../assets/logo.svg";
import burger from "../assets/burger.svg";
import cross from "../assets/cross.svg";
import mainBlob from "../assets/main_blob.png";
import Envelope from "./Icons/Envelope";
import Telegram from "./Icons/Telegram";
import ArrowRight from "./Icons/ArrowRight";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  };
  return (
    <header className="w-full px-2.5 md:px-5 lg:px-10 xl:px-0 xl:max-w-[1140px] mx-auto flex justify-between items-center py-3.5 md:py-6 xl:py-10 relative z-10">
      <img
        src={logo.src}
        alt="Code & Ledger Logo"
        width="100"
        height="40"
        loading="eager"
        className="w-[63px] h-[25px] md:w-[100px] md:h-[40px]"
      />
      <nav className="relative font-inter gap-10 hidden sm:flex ">
        <a
          href="/#commitment"
          className="text-textAccent text-sm hover:text-text transition-all"
        >
          Commitment
        </a>
        <a
          href="/#about"
          className="text-textAccent text-sm hover:text-text transition-all"
        >
          About
        </a>
        <a
          href="https://codeandledger.gitbook.io/code-and-ledger/"
          target="_blank"
          className="text-textAccent text-sm hover:text-text transition-all"
        >
          Docs
        </a>
        <div
          className="text-textAccent text-sm hover:text-text transition-all cursor-pointer"
          onClick={() => setIsConnectOpen(!isConnectOpen)}
        >
          Connect
        </div>
        {isConnectOpen && (
          <div className="absolute rounded-[10px] bg-gradient top-8 right-0 p-[1px]">
            <div className="rounded-[10px] p-7 bg-[#050C31] flex flex-col gap-4">
              <a
                href="mailto:aladeen@codeandledger.com"
                aria-label="Mail"
                className="flex items-center gap-2 text-textAccent hover:text-text"
              >
                <Envelope className="flex-1" />
                <span className="flex-[3]">Mail</span>
                <ArrowRight className="flex-1" />
              </a>
              <a
                href="https://t.me/m/xXHWlBJGYTQ0"
                target="_blank"
                aria-label="Telegram"
                className="flex items-center gap-2 text-textAccent hover:text-text"
              >
                <Telegram className="flex-1" />
                <span className="flex-[3]">Telegram</span>
                <ArrowRight className="flex-1" />
              </a>
            </div>
          </div>
        )}
      </nav>
      <button
        className="flex items-center justify-center sm:hidden"
        aria-label="Open Mobile Menu"
        onClick={handleOpen}
      >
        <img src={burger.src} alt="burger" width={19.5} height={7.5} />
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 h-svh w-full bg-[#050C31] z-20 pt-44">
          <img
            src={logo.src}
            alt="Code & Ledger Logo"
            width={152}
            height={60}
            className="relative mx-auto z-30"
          />
          <div className="mt-32 flex flex-col gap-8 items-center relative z-30 mb-5">
            <a
              href="/#commitment"
              className="text-textAccent text-xl hover:text-text transition-all font-light"
              onClick={handleOpen}
            >
              Commitment
            </a>
            <a
              href="/#about"
              className="text-textAccent text-xl hover:text-text transition-all font-light"
              onClick={handleOpen}
            >
              About
            </a>
            <a
              href="https://codeandledger.gitbook.io/code-and-ledger/"
              target="_blank"
              className="text-textAccent text-xl hover:text-text transition-all font-light"
              onClick={handleOpen}
            >
              Docs
            </a>
            <div className="line"></div>
            <a
              href="/"
              className="text-textAccent text-xl hover:text-text transition-all font-light"
            >
              Connect
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:aladeen@codeandledger.com"
              className="flex flex-col gap-2 text-textAccent flex-1 items-center"
              aria-label="Mail"
            >
              <Envelope />
              <span className="font-inter font-light text-base">Mail</span>
            </a>
            <a
              href="https://t.me/m/xXHWlBJGYTQ0"
              target="_blank"
              aria-label="Telegram"
              className="flex flex-col gap-2 text-textAccent flex-1 items-center"
            >
              <Telegram />
              <span className="font-inter font-light text-base">Telegram</span>
            </a>
          </div>
          <button
            className="absolute top-2.5 right-[6px] flex items-center justify-center z-30"
            aria-label="Clode Mobile Menu"
            onClick={handleOpen}
          >
            <img src={cross.src} alt="cross" width={32} height={32} />
          </button>
          <img
            src={mainBlob.src}
            alt="blob"
            width={520}
            height={520}
            className="absolute left-1/2 -translate-x-1/2 -top-[106px] min-w-[520px] min-h-[520px]"
          />
        </div>
      )}
    </header>
  );
};
export default Header;
