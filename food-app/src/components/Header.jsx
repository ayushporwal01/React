import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full max-w-8xl h-18 px-25 flex justify-between items-center border border-black ">
      <img
        className="w-15 cursor-pointer"
        src={LOGO_URL}
        alt="Namaste Food Logo"
      />
      <div className="">
        <ul className="flex gap-x-10 text-lg [&_li]:cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
