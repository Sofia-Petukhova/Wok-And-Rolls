import React from "react";
import emptyCart from "../../../img/empty-cart.png";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import styles from "./CartEmpty.module.scss"

const CartEmpty = () => {
  return ( 
    <>
      <div className={styles.empty__cart}>
        <img src={emptyCart} alt="empty cart" />
        <div className={styles.empty__cart__wrapper}>
          <div className={styles.empty__cart__text}>
            Упс! Ваша корзина пуста 😟
          </div>
          <Link to="/">
            <Button className={styles.empty__cart__button}>
              <span>Назад за покупками</span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;