import { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Navbar from "./component/Navbar";
import ProductDetails from "./component/Products/ProductDetails";
import Sidebar from "./component/Sidebar";
import ViewCart from "./component/Products/ViewCart";
import Login from "./component/Login/Login";
import Dashboard from "./component/Users/Dashboard";
import Register from "./Pages/Register";
export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);

  function changeLoggedIn(value) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.clear();
    }
  }

  return (
    <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/productDetails/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/viewCart" element={<ViewCart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
