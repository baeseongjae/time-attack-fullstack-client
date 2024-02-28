import HeaderLogo from "./components/HeaderLogo";
import HeaderNav from "./components/HeaderNav";
import HeaderSignWrapper from "./components/HeaderSignWrapper";

function Header() {
  return (
    <header className="px-8 sticky top-0 bg-white border-b z-5 shrink-0 shadow-xl	">
      <div className="flex items-center h-16 max-w-screen-lg mx-auto">
        <HeaderLogo />
        <HeaderNav />
        <HeaderSignWrapper />
      </div>
    </header>
  );
}

export default Header;
