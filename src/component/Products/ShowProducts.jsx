import React, { useContext } from "react";
//import products context
import { ProductContext } from "./Context/ProductContext";
import Product from "./Product";
const ShowProducts = () => {
  // get product from productscontext

  const products = useContext(ProductContext);
  const fillteredProduct = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <section className="py-16 mt-[60px]">
        <div className=" container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {fillteredProduct.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowProducts;
