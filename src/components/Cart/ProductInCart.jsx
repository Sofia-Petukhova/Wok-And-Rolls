import React from "react";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct, decreaseProduct } from "../../redux/slices/cartSlice";
import CrossIcon from "../Icons/CrossIcon";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon"

function ProductInCart({ product }) {
  const dispatch = useDispatch();
  const { imageUrl, title, sauce, amount, price, count } = product;

  const onClickPlus = () => {
    dispatch(addProduct(product));
  };

  const onClickMinus = () => {
    if (count > 1) {
      dispatch(decreaseProduct(product))
    }
  };

  const onClickDelete = () => {
    dispatch(deleteProduct(product))
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
      <div  className="cart__item-count">
        <div onClick={onClickMinus} className="button button--outline button--circle cart__item-count-minus">
          <MinusIcon/>
        </div>
        <b>{count}</b>
        <div
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus"
        >
          <PlusIcon/>
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div onClick={onClickDelete} className="button button--outline button--circle">
          <CrossIcon/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductInCart;
