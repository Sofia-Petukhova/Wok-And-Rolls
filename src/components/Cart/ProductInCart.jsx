import React from "react";
import { useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  decreaseProduct,
} from "../../redux/slices/cartSlice";
import Button from "../Button/Button";
import CrossIcon from "../Icons/CrossIcon";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";

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
    <div className="cart__item-wrapper">
      <div className="cart__item">
        <div className="cart__item-img">
          <img className="product-card__image" src={imageUrl} alt="Roll" />
        </div>
        <div className="cart__item-info">
          <h3>{title}</h3>
          <p>
            {sauce}, {amount}.
          </p>
        </div>
        <div className="cart__item-count">
          <Button
            onClick={onClickMinus}
            className=" button--outline button--circle cart__item-count-minus"
          >
            <MinusIcon />
          </Button>
          <b>{count}</b>
          <Button
            onClick={onClickPlus}
            className="button--outline button--circle cart__item-count-plus"
          >
            <PlusIcon />
          </Button>
        </div>
        <div className="cart__item-price">
          <b>{price * count} ₽</b>
        </div>
        <div className="cart__item-remove">
          <Button
            onClick={onClickDelete}
            className="button--outline button--circle"
          >
            <CrossIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
