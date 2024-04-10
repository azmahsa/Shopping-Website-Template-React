import React, { useState, useContext, createContext } from "react";
import logo from "../assets/logo.png";
//* import icon
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdOutlineAccountCircle, MdLogout } from "react-icons/md";
import { FaXmark, FaBars } from "react-icons/fa6";

//* import Link
import { Link } from "react-router-dom";
//* sidebar context
import { SidebarContext } from "./Products/Context/SidebarContext";
//*import cart context
import { CartContext } from "./Products/Context/CartContext";
import { LoginContext } from "../App";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="text-gray-700 body-font border-b fixed mx-auto  top-0 right-0 left-0 bg-white z-[99]">
        <div className="container  text-xl mx-auto p-5 flex items-center justify-between ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-[70px]" src={logo} alt="" />
            <span className="ml-3 text-2xl">Online Store</span>
          </a>
          <ul className="md:mr-auto text-lg md:ml-4 md:py-1 md:pl-4 md:border-l  md:border-gray-400	md:flex  items-center hidden  justify-center">
            <Link to={"/"} className="mr-5 cursor-pointer hover:text-gray-900">
              Home
            </Link>
            <Link
              to={"/products"}
              className="mr-5 cursor-pointer hover:text-gray-900"
            >
              Products
            </Link>
            <a className="mr-5 cursor-pointer hover:text-gray-900">About</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">Contact</a>
          </ul>
          <div className=" flex gap-x-5 text-3xl">
            <div className="flex ml-24 gap-6">
              <MdOutlineLocalGroceryStore
                onClick={() => setIsOpen(!isOpen)}
                className=" relative  cursor-pointer"
              />
              <div className=" bg-black text-white absolute -ml-2 mt-3  w-[15px]  rounded-full flex justify-center items-center h-[15px] text-[12px]">
                {itemAmount}
              </div>
            </div>
            <div>
              {loggedIn ? (
                <Link to={"/login"}>
                  <MdLogout
                    className=" cursor-pointer"
                    onClick={() => {
                      setLoggedIn(false);
                      localStorage.clear();
                    }}
                  />
                </Link>
              ) : (
                <Link to={"/login"}>
                  <MdOutlineAccountCircle className=" cursor-pointer" />
                </Link>
              )}
            </div>
          </div>

          <div className="md:hidden ">
            <button onClick={toggleMenu} className=" text-gray-900  ">
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`md:hidden pt-[100px] pb-5  text-xl z-[99] ${
          isMenuOpen ? " block fixed top-0 right-0 left-0 " : "hidden"
        }`}
      >
        <ul className=" flex text-gray-700 flex-col space-y-4 px-8 py-4 transition-all cursor-pointer bg-gray-200">
          <a
            onClick={toggleMenu}
            className="mr-5 cursor-pointer hover:text-gray-900"
          >
            Home
          </a>
          <Link
            to="/products"
            onClick={toggleMenu}
            className="mr-5 cursor-pointer hover:text-gray-900"
          >
            Products
          </Link>
          <a
            onClick={toggleMenu}
            className="mr-5 cursor-pointer hover:text-gray-900"
          >
            About
          </a>
          <a
            onClick={toggleMenu}
            className="mr-5 cursor-pointer hover:text-gray-900"
          >
            Contact
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
