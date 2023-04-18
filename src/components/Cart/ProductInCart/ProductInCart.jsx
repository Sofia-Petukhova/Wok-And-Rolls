import React from "react";
import { useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  decreaseProduct,
} from "../../../redux/slices/cartSlice";
import Button from "../../Button/Button";
import CrossIcon from "../../Icons/CrossIcon";
import MinusIcon from "../../Icons/MinusIcon";
import PlusIcon from "../../Icons/PlusIcon";
import styles from "../ProductInCart/ProductInCart.module.scss";

function ProductInCart({ product }) {
  const dispatch = useDispatch();
  const { imageUrl, title, sauce, amount, price, count } = product;

  const onClickPlus = () => {
    dispatch(addProduct(product));
  };

  const onClickMinus = () => {
    if (count > 1) {
      dispatch(decreaseProduct(product));
    }
  };

  const onClickDelete = () => {
    dispatch(deleteProduct(product));
  };

  return (
    <div className={styles.cart__item__wrapper}>
      <div className={styles.cart__item}>
        <div className={styles.cart__item__img}>
          <img
            className={styles.product__card__image}
            src={imageUrl}
            alt="Roll"
          />
        </div>
        <div className={styles.cart__item__info}>
          <h3>{title}</h3>
          <p>
            {sauce}, {amount}.
          </p>
        </div>
        <div className={styles.cart__item__count}>
          <Button onClick={onClickMinus} className={styles.button__minus}>
            <MinusIcon />
          </Button>
          <b>{count}</b>
          <Button onClick={onClickPlus} className={styles.button__plus}>
            <PlusIcon />
          </Button>
        </div>
        <div className={styles.cart__item__price}>
          <b>{price * count} ₽</b>
        </div>
        <div className={styles.cart__item__remove}>
          <Button onClick={onClickDelete} className={styles.button__remove}>
            <CrossIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;