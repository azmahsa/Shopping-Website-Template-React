import React, { useContext, useEffect } from "react";
//* import useParams
import { useParams } from "react-router-dom";
// * import cart context
import { CartContext } from "./Context/CartContext";
//* import product context
import { ProductContext } from "./Context/ProductContext";
// import icons
import { FaRegStar, FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const ProductDetails = () => {
  //* get the product id from the url
  const { id } = useParams();
  const products = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //* get the single product based on the id
  const product = products.find((item) => {
    return item.id == id;
  });
  if (!product) {
    return (
      <section className="h-screen text-lg font-medium flex justify-center items-center">
        Loading...
      </section>
    );
  }
  //* destructure product
  const { title, price, description, image } = product;
  return (
    <section>
      <div className="max-w-6xl mt-[100px]  mx-auto md:px-6">
        <div className=" container flex flex-wrap ">
          <div className="w-full px-4 md:w-1/2 ">
            <div className="sticky top-0 z-50 overflow-hidden ">
              {/*image */}
              <div className="relative mt-10 mb-6 lg:mb-10">
                <img
                  src={image}
                  alt=""
                  className="object-contain w-[450px] h-[450px] "
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 ">
            <div className="lg:pl-20">
              {/* title, dscription,price */}
              <div className="pb-6 mb-8 border-b border-gray-200 ">
                <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold md:text-4xl">
                  {title}
                </h2>
                <div className="flex flex-wrap items-center mb-6">
                  <ul className="flex mb-4 mr-2 lg:mb-0">
                    <li>
                      <a href="#">
                        <FaRegStar className="w-5  text-red-500  " />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaRegStar className="w-5  text-red-500  " />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaRegStar className="w-5  text-red-500  " />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaRegStar className="w-5  text-red-500 " />
                      </a>
                    </li>
                  </ul>
                  <a className="mb-4 text-xs underline  lg:mb-0" href="#">
                    Be the first to review the product
                  </a>
                </div>
                <p className="max-w-md mb-8 text-gray-700 text-justify">
                  {description}
                </p>

                <p className="inline-block text-2xl font-semibold text-gray-700  ">
                  <span>${price}</span>
                </p>
              </div>
              <div className="mb-8">
                <h2 className="mb-2 text-xl font-bold">Color</h2>
                <div className="flex flex-wrap -mb-2">
                  <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400">
                    <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                  </button>
                  <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </button>
                  <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                  </button>
                  <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400">
                    <div className="w-6 h-6 rounded-full bg-sky-400"></div>
                  </button>
                </div>
              </div>
              <div className="pb-6 mb-8 border-b border-gray-30">
                <h2 className="mb-2 text-xl font-bold">Size</h2>
                <div className="flex flex-wrap -mb-2">
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400  hover:text-blue-600">
                    XL
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600">
                    S
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600">
                    M
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600">
                    XS
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-8 ">
                <div
                  onClick={() => {
                    addToCart(product, product.id);
                  }}
                  className="mb-4 mr-4 lg:mb-0"
                >
                  <button className="w-full h-10 p-2 mr-4 bg-slate-900 text-gray-50 hover:bg-slate-400 ">
                    Add To Cart
                  </button>
                </div>

                <div className="mb-4 mr-4 lg:mb-0">
                  <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-white  hover:bg-slate-800  ">
                    <MdOutlineLocalGroceryStore />
                  </button>
                </div>
                <div className="mb-4 lg:mb-0">
                  <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-white  hover:bg-slate-800">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
