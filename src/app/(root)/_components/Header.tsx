import HeaderLogo from "./components/HeaderLogo";
import HeaderNav from "./components/HeaderNav";
import HeaderSignWrapper from "./components/HeaderSignWrapper";

function Header() {
  return (
    <header className="flex items-center px-8 h-16">
      <HeaderLogo />
      <HeaderNav />
      <HeaderSignWrapper />
    </header>
  );
}

export default Header;
