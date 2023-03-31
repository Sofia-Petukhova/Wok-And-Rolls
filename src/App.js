import React, { useState } from "react";
import "./scss/app.scss";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart/Cart.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import { Routes, Route } from "react-router-dom";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
