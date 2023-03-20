import React from "react";
import emptyCart from "../../img/empty-cart.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const CartEmpty = () => {
  return (
    <>
      <div className="empty-cart">
        <img src={emptyCart} alt="empty cart" />
        <div className="empty-cart__wrapper">
          <div className="empty-cart__wrapper__text">
            Упс! Ваша корзина пуста 😟
          </div>
          <Link to="/">
            <Button>
              <span>Назад за покупками</span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;