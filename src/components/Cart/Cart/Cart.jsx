import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  cleanCart,
  selectProducts,
  selectTotalCount,
  selectTotalPrice,
} from "../../../redux/slices/cartSlice";
import ProductInCart from "../ProductInCart/ProductInCart";

import CartEmpty from "../CartEmpty/CartEmpty";
import CartIcon from "../../Icons/CartIcon";
import TrashIcon from "../../Icons/TrashIcon";
import Button from "../../Button/Button";
import styles from "../Cart/Cart.module.scss"

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
    <div className={styles.container__cart}>
      <div className={styles.cart}>
        <div className={styles.cart__top}>
          <h2 className={styles.content__title}>
            <CartIcon />
            Корзина
          </h2>
          <div className={isEmpty ? styles.cart__clear__disabled : styles.cart__clear}>
            <TrashIcon />
            <span onClick={OnClickCleanCart}>Очистить корзину</span>
          </div>
        </div>
        <div className={styles.content__items}>
          {isEmpty ? (
            <CartEmpty />
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
        <div className={styles.cart__bottom}>
          <div className={styles.cart__bottom__details}>
            <span>
              Всего: <b>{totalCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span> 
          </div>
          {products.length !== 0 && (
            <div className={styles.cart__bottom__buttons}>
              <Link to="/">
                <Button className={styles.go_back_btn}>
                  <span>Вернуться назад</span>
                </Button>
              </Link>
              <Button className={styles.pay__btn}>
                <span>Оплатить сейчас</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
