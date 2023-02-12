import React, { useState } from "react";
import "./scss/app.scss";
import Header from "./components/Header.jsx";
import Home from "./components/Pages/Home.jsx";
import Cart from "./components/Pages/Cart.jsx";
import NotFoundPage from "./components/Pages/NotFoundPage.jsx";
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
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
