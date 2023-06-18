import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import CGLogo from "../img/CGLogo.png";
import avatar from "../img/profile.jpg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-10 shadow-xl">
      <Link to="/" className="flex items-center">
        <img src={CGLogo} alt="CG-White-Logo" className="h-20 mb-4 md:mb-0" />
      </Link>
      <div className="hidden md:flex drop-shadow-xl w-96">
        <div className="w-full">
          <Search value="Search by city name, area, or property" />
        </div>
      </div>
      <div className="flex items-center">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-14 cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-14 cursor-pointer hidden md:block mx-auto"
          onClick={toggleMenu}
        />
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute flex-col justify-center mb-4 top-20 -right-10 items-start gap-4 w-56 h-60 bg-primary bg-opacity-75 rounded-xl px-10`}
      >
        <Link to="/other" className="text-white hover:text-gray-200">
          Profile
        </Link>
        <Link to="/other" className="text-white hover:text-gray-200">
          Chats
        </Link>
        <Link to="/other" className="text-white hover:text-gray-200">
          Wishlist
        </Link>
        <Link to="/other" className="text-white hover:text-gray-200">
          Notifications
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
