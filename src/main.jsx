import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import product provider
import ProductProvider from "./component/Products/Context/ProductContext.jsx";
//import sidebar provider
import SidebarProvider from "./component/Products/Context/SidebarContext.jsx";
//import cart provider
import CartProvider from "./component/Products/Context/CartContext.jsx";
import { Toaster } from "react-hot-toast";
import UserProvider from "./component/Users/userContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <React.StrictMode>
            <App />
            <Toaster />
          </React.StrictMode>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </UserProvider>
);
