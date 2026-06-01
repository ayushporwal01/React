import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { Menu } from "react-feather";
import SideBar from "./SideBar";
import { useContext, useState } from "react";
import { AnimatePresence } from "motion/react";
import userContext from "../utils/userContext";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const { loggedInUser } = useContext(userContext);

  return (
    <div className="w-full max-w-8xl h-18 px-10 md:px-20 lg:px-25 flex justify-between items-center border border-black bg-white sticky top-0 left-0 right-0 z-100">
      <img
        className="w-15 cursor-pointer"
        src={LOGO_URL}
        alt="Namaste Food Logo"
      />

      <ul className="hidden md:flex gap-x-10 text-lg [&_li]:cursor-pointer">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
        <li>{loggedInUser}</li>
      </ul>
      <button onClick={toggleSidebar} className="md:hidden cursor-pointer">
        <Menu size={35} />
      </button>

      <AnimatePresence>
        {isSidebarOpen && (
          <SideBar navLinks={navLinks} toggleSidebar={toggleSidebar} />
        )}
      </AnimatePresence>
    </div>
  );
}
