import { Link } from "react-router-dom";
import { X } from "react-feather";

export default function SideBar({ navLinks, toggleSidebar }) {
  return (
    <div className="w-40 h-50 bg-red-300 fixed top-0 right-0 md:hidden sm:flex justify-center">
      <ul className="flex flex-col items-center gap-y-4 pt-5">
        {navLinks.map((link) => (
          <li key={link.path} className="text-lg cursor-pointer">
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
        <button onClick={toggleSidebar} className="md:hidden cursor-pointer">
          <X size={30} />
        </button>
      </ul>
    </div>
  );
}
