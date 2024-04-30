import Navbar from "./navbar/navbar";
import Logo from "../ui/logo";
import HeaderIcons from "./header-icons";

function Header() {
  return (
    <div className="m-auto sticky">
      <header className="m-auto max-w-7xl flex items-center justify-between">
        <Logo />
        <Navbar />
        <HeaderIcons />
      </header>
    </div>
  );
}

export default Header;
