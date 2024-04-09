import logo from "../assets/logo.svg";
import burger from "../assets/burger.svg";

const Header = () => (
  <header className="w-full px-2.5 md:px-5 lg:px-10 xl:px-0 xl:max-w-[1140px] mx-auto flex justify-between items-center py-3.5 md:py-6 xl:py-10 relative z-[1]">
    <img
      src={logo.src}
      alt="Code & Ledger Logo"
      width="100"
      height="40"
      loading="eager"
      className="w-[63px] h-[25px] md:w-[100px] md:h-[40px]"
    />
    <nav className="font-inter gap-10 hidden sm:flex ">
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
        href="/#docs"
        className="text-textAccent text-sm hover:text-text transition-all"
      >
        Docs
      </a>
      <a
        href="/"
        className="text-textAccent text-sm hover:text-text transition-all"
      >
        Connect
      </a>
    </nav>
    <button
      className="flex items-center justify-center sm:hidden"
      aria-label="Mobile Menu"
    >
      <img src={burger.src} alt="burger" width={19.5} height={7.5} />
    </button>
  </header>
);

export default Header;
