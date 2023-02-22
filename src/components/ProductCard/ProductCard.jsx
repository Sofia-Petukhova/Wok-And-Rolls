import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, selectProducts } from "../../redux/slices/cartSlice";

function ProductCard({ id, imageUrl, title, sauces, amount, price }) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [activeSauce, setActiveSauce] = useState(sauces[0]);
  const [activeAmount, setActiveAmount] = useState(0);
  const isSaucesLength = sauces.length !== 0;
  
  const onClickAdd = () => {
    const product = {
      id,
      title,
      price,
      imageUrl,
      sauce: activeSauce,
      amount: activeAmount,
    };
    dispatch(addProduct(product));
  };

const handleProductCounter = () => {
   const count = products.reduce((acc, product) => {
    if (id === product.id) {
      return acc = acc + product.count
    }
    return acc
   }, 0)
   return (count || 0)
}

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
                onClick={() => setActiveAmount(index)}
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
          <div className="product-card__price">{price}</div>
          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{handleProductCounter()}</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
