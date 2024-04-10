import React, { useContext } from "react";
//import cart context
import { CartContext } from "./Context/CartContext";
import ViewCartItem from "./ViewCartItem";
const ViewCart = () => {
  const { cart, total } = useContext(CartContext);
  const Sum = parseFloat(total).toFixed(2);

  return (
    <section className=" py-16 mt-[80px]">
      <div className=" container mx-auto">
        <div>
          <div className=" flex ">
            <div className="text-center  bg-slate-700 px-2 rounded-3xl py-3 w-[100px] text-[15px] font-semibold text-white cursor-pointer">
              1. Cart
            </div>
            <div className="w-[50px] h-[5px] mt-5 bg-stone-700 "></div>
            <div className="text-center  bg-slate-700 px-2 rounded-3xl py-3 w-[100px] text-[15px] font-semibold text-white cursor-pointer">
              2. Details
            </div>
            <div className="w-[50px] h-[5px] mt-5 bg-stone-300 "></div>
            <div className="text-center  bg-slate-300 px-2 rounded-3xl py-3 w-[100px] text-[15px] font-semibold text-slate-700 cursor-pointer">
              3. Payment
            </div>
            <div className="w-[50px] h-[5px] mt-5 bg-stone-300 "></div>
            <div className="text-center  bg-slate-300 px-2 rounded-3xl py-3 w-[100px] text-[15px] font-semibold text-slate-700 cursor-pointer">
              4. Review
            </div>
          </div>
        </div>
        {/* value cart */}
        <div className="mx-auto -mt-[10px] justify-between md:flex md:space-x-6 xl:px-0">
          <div className="mt-[40px]">
            {cart.map((item) => {
              return <ViewCartItem item={item} key={item.id} />;
            })}
          </div>
          {/*Sub total*/}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700 text-lg font-medium ">Total :</p>
              <p className="text-gray-900 text-xl font-medium">${Sum}</p>
            </div>
            <hr className="my-4" />
            <div>
              <div>
                <h1 className="text-gray-700 text-lg font-medium mb-3">
                  Additional Comments :
                </h1>
              </div>
              <div>
                <textarea
                  id="textArea"
                  rows="6"
                  className="border border-slate-300 w-full rounded-lg"
                ></textarea>
              </div>
              <hr className="my-4" />
              <div>
                <input
                  placeholder="Voucher"
                  className="w-full rounded-lg border border-slate-300 px-2 py-3"
                />
              </div>
            </div>
            <div>
              <button className="w-full border border-gray-900 bg-white text-gray-900 rounded-lg px-2 py-3 mt-4 hover:bg-gray-900 hover:text-white">
                Apply Voucher
              </button>
              <button className=" w-full rounded-lg bg-gray-900 font-medium text-white px-2 py-3 mt-3 hover:bg-black ">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewCart;
