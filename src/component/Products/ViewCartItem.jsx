import React, { useContext } from "react";
// * import cart context
import { CartContext } from "./Context/CartContext";
//* import icon
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

const ViewCartItem = ({ item }) => {
  const { increaseAmount, decreaseAmount, addToCart, removeFromCart } =
    useContext(CartContext);

  //* destructure product
  const { id, title, price, image, amount } = item;
  console.log(item);
  return (
    <section>
      {/* cart value */}

      <div className="mx-auto justify-center md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg  md:w-3/3  ">
          <div className="justify-between mb-6 w-[800px]  rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src={image}
              alt="product-image"
              className="rounded-lg w-[110px]  h-[110px] sm:w-40"
            />
            <div className="sm:ml-10 sm:flex sm:w-full sm:justify-between">
              <div className="flex flex-col items-start justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                </div>
                <div className="flex items-center space-x-4">
                  <p className=" font-semibold text-xl">$ {price}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-col justify-between items-end sm:space-y-6 sm:mt-0 sm:space-x-6">
                <div onClick={() => removeFromCart(id)}>
                  <IoMdClose className="h-6 w-6 cursor-pointer duration-150 hover:text-red-500" />
                </div>
                <div className="mb-4 mr-4 lg:mb-0">
                  <div className="w-28">
                    <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                      <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer  hover:text-gray-700  hover:bg-gray-300">
                        <span
                          onClick={() => decreaseAmount(+id)}
                          className="flex justify-center items-center text-lg font-thin"
                        >
                          <IoMdRemove />
                        </span>
                      </button>
                      <span className="flex justify-center items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none  focus:outline-none text-md hover:text-black">
                        {amount}
                      </span>
                      <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer     hover:text-gray-700 hover:bg-gray-300">
                        <span
                          onClick={() => {
                            increaseAmount(id);
                            addToCart(product, product.id);
                          }}
                          className="flex justify-center items-center text-lg font-thin"
                        >
                          <IoMdAdd />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewCartItem;
