import React from "react";
import styles from "./Categories.module.scss"

function Categories({ categoryId, onClickCategory }) {
  const categories = ["Все", "Сеты", "Роллы", "Суши", "Wok", "Напитки"];
 
  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(category, index)}
            className={categoryId === index ? styles.selected : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
