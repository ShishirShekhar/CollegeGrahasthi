import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import whiteLogo from "../../../img/whiteLogo.png";
import Button from "../../Button";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between">
      <Link to="/">
        <img
          src={whiteLogo}
          alt="CG-White-Logo"
          className="h-20 mb-4 md:mb-0"
        />
      </Link>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <IoClose className="text-primary text-3xl" />
          ) : (
            <BiMenu className="text-primary text-3xl" />
          )}
        </button>
      </div>
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex items-center justify-between space-x-4 mx-auto">
          <Link to="/other">Solutions</Link>
          <Link to="/other">Company</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/other">Contact us</Link>
        </div>
        <div className="w-full flex justify-center md:w-auto">
          <Button value="Sign up" to="/other" />
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "absolute top-20 -right-10" : "hidden"
        }`}
      ></div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute flex-col justify-center mb-4 top-20 -right-10 items-start gap-4 w-56 h-60 bg-primary bg-opacity-75 rounded-xl px-10`}
      >
        <Link to="/other">Solutions</Link>
        <Link to="/other">Company</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/other">Contact us</Link>
        <Button value="Sign up" to="/other" />
      </div>
    </nav>
  );
};

export default Nav;
