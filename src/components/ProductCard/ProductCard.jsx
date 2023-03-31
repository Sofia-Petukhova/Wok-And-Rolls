import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, selectProducts } from "../../redux/slices/cartSlice";
import Button from "../Button/Button";
import PlusIcon from "../Icons/PlusIcon";
import styles from "./ProductCard.module.scss"

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
    <div className={styles.product_card_wrapper}>
      <div className={styles.product_card}>
        <img className={styles.product_card__image} src={imageUrl} alt="roll" />
        <h4 className={styles.product_card__title}>{title}</h4>
        <div className={styles.product_card__selector}>
          {isSaucesLength && (
            <ul>
              {sauces.map((sauce) => (
                <li
                  key={sauce}
                  onClick={() => setActiveSauce(sauce)}
                  className={activeSauce === sauce ? styles.active : ""}
                >
                  {sauce}
                </li>
              ))}
            </ul>
          )}
          <ul className={!isSaucesLength ? styles.product_card__amount_drink : ""}>
            {amount.map((amount, index) => (
              <li
                key={amount}
                onClick={() => onClickAmount(index)}
                className={activeAmount === index ? styles.active : ""}
              >
                {amount}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={
            isSaucesLength
              ? styles.product_card__bottom
              : styles.product_card__bottom_drink
          }
        >
          <div className={styles.product_card__price}>{activePrice} ₽</div>
          <Button onClick={onClickAdd} className={styles.button_add}>
            <PlusIcon />
            <span>Добавить</span>
            <i>{handleProductCounter()}</i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
