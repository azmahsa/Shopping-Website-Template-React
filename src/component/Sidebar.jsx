import React, { useContext } from "react";
//import Link
import { Link } from "react-router-dom";
//import icon
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash } from "react-icons/fi";
//import component
import CartItem from "./Products/CartItem";
//import sidebar context
import { SidebarContext } from "./Products/Context/SidebarContext";
//import cart context
import { CartContext } from "./Products/Context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-screen h-screen z-[98] bg-black/40 fixed top-0 right-0"
            onClick={handleClose}
          ></motion.div>
        )}
      </AnimatePresence>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } "w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] w-[100%] transition-all duration-300 z-[100] px-4 lg:px-[35px] `}
      >
        <div className=" flex items-center justify-between py-6 border-b">
          <div className=" uppercase text-sm font-semibold ">
            Shopping bag({itemAmount})
          </div>
          {/* icon */}
          <div
            onClick={handleClose}
            className=" cursor-pointer h-8 w-8 flex justify-center items-center"
          >
            <IoMdArrowForward className=" text-2xl" />
          </div>
        </div>
        <div className=" flex flex-col border-b h-[420px] lg:[620px] gap-y-2  overflow-y-auto">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>

        <div className=" flex flex-col gap-y-3 py-4 mt-4 ">
          <div className=" w-full justify-between flex h-12 items-center">
            {/* total */}
            <div className=" uppercase  font-semibold">
              <span className="mr-2">Total:</span>${" "}
              {parseFloat(total).toFixed(2)}
            </div>
            {/* clear cart icon */}
            <div
              onClick={clearCart}
              className=" cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
            >
              <FiTrash />
            </div>
          </div>
          <Link
            to={"/viewCart"}
            className=" bg-gray-200 flex p-3 justify-center w-full font-medium items-center text-gray-900"
          >
            View Cart
          </Link>
          <Link className=" bg-gray-900 flex p-3 justify-center w-full font-medium items-center text-gray-200">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
