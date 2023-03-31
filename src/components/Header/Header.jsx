import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Header/Header.module.scss";

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
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/" onClick={resetCategory}>
          <div className={styles.header__logo}>
            <img width="80" src={logo} alt="roll logo" />
            <div>
              <h1>Wok And Rolls</h1>
              <p>Самые вкусные азиатские блюда c быстрой доставкой</p>
            </div>
          </div>
        </Link>
        <div className={styles.wrapper}>
          <Search />
          <Link to="/cart">
            <div className={styles.header__cart}>
              <Button className={styles.button__cart}>
                <span>{totalPrice} ₽</span>
                <div className={styles.button__delimiter}></div>
                <CartIcon />
                <span>{totalCount}</span>
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
