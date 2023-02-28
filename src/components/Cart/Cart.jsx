import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  cleanCart,
  selectProducts,
  selectTotalCount,
  selectTotalPrice,
} from "../../redux/slices/cartSlice";
import ProductInCart from "./ProductInCart";

import CartEmpty from "./CartEmpty"
import CartIcon from "../Icons/CartIcon";
import TrashIcon from "../Icons/TrashIcon";
import ArrowBackIcon from "../Icons/ArrowBackIcon";


const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);
  const totalCount = useSelector(selectTotalCount);
  const isEmpty = products.length === 0;
  const OnClickCleanCart = () => {
    if (isEmpty) return;
    dispatch(cleanCart());
  };

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartIcon />
            Корзина
          </h2>
          <div className={isEmpty ? "cart__clear__disabled" : "cart__clear"}>
            <TrashIcon />
            <span onClick={OnClickCleanCart}>Очистить корзину</span>
          </div>
        </div>
        <div className="content__items">
          {isEmpty ? (
            <CartEmpty/>
          ) : (
            <>
              {products.map((product, index) => (
                <ProductInCart
                  key={`${product.id}-${index}`}
                  product={product}
                />
              ))}
            </>
          )}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего: <b>{totalCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span>
          </div>
          {products.length !== 0 && (
            <div className="cart__bottom-buttons">
              <Link
                to="/"
                className="button button--outline button--add go-back-btn"
              >
                <ArrowBackIcon/>
                <span>Вернуться назад</span>
              </Link>
              <div className="button pay-btn">
                <span>Оплатить сейчас</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
