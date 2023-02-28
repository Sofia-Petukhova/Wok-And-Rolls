import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, selectProducts } from "../../redux/slices/cartSlice";
import PlusIcon from "../Icons/PlusIcon";

function ProductCard({ id, imageUrl, title, sauces, amount, price }) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [activeSauce, setActiveSauce] = useState(sauces[0]);
  const [activeAmount, setActiveAmount] = useState(0);
  const [activePrice, setActivePrice] = useState(price[0]);
  const isSaucesLength = sauces.length !== 0;

  const onClickAmount = (index) => {
    setActiveAmount(index);
    setActivePrice(price[index]);
  };

  const onClickAdd = () => {
    const product = {
      id,
      title,
      price: activePrice,
      imageUrl,
      sauce: activeSauce,
      amount: amount[activeAmount],
    };
    dispatch(addProduct(product));
  };

  const handleProductCounter = () => {
    const count = products.reduce((acc, product) => {
      if (id === product.id) {
        return (acc = acc + product.count);
      }
      return acc;
    }, 0);
    return count || 0;
  };

  return (
    <div className="product-card-wrapper">
      <div className="product-card">
        <img className="product-card__image" src={imageUrl} alt="roll" />
        <h4 className="product-card__title">{title}</h4>
        <div className="product-card__selector">
          {isSaucesLength && (
            <ul>
              {sauces.map((sauce) => (
                <li
                  key={sauce}
                  onClick={() => setActiveSauce(sauce)}
                  className={activeSauce === sauce ? "active" : ""}
                >
                  {sauce}
                </li>
              ))}
            </ul>
          )}
          <ul className={!isSaucesLength ? "product-card__amount-drink" : ""}>
            {amount.map((amount, index) => (
              <li
                key={amount}
                onClick={() => onClickAmount(index)}
                className={activeAmount === index ? "active" : ""}
              >
                {amount}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={
            isSaucesLength
              ? "product-card__bottom"
              : "product-card__bottom-drink"
          }
        >
          <div className="product-card__price">{activePrice} ₽</div>
          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <PlusIcon />
            <span>Добавить</span>
            <i>{handleProductCounter()}</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
