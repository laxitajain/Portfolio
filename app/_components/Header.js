import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-5 bg-primary-90/95 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo location="header" />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
