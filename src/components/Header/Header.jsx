import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";
import {
  selectTotalCount,
  selectTotalPrice,
} from "../../redux/slices/cartSlice";
import { setCategory } from "../../redux/slices/filterSlice";
import Button from "../Button/Button";
import CartIcon from "../Icons/CartIcon";
import Search from "../Search/Search.jsx";

function Header() {
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const totalCount = useSelector(selectTotalCount);

  const resetCategory = () => {
    dispatch(
      setCategory({
        categoryId: 0,
        categoryTitle: "Все",
      })
    );
  };

  return (
    <div className="header">
      <div className="container">
        <Link to="/" onClick={resetCategory}>
          <div className="header__logo">
            <img width="80" src={logo} alt="roll logo" />
            <div>
              <h1>Wok And Rolls</h1>
              <p>Самые вкусные азиатские блюда c быстрой доставкой</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>
              <CartIcon />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
