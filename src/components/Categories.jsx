import React from "react";

function Categories({ categoryId, onClickCategory }) {
  const categories = ["Все", "Сеты", "Роллы", "Суши", "Wok", "Напитки"];
 
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(category, index)}
            className={categoryId === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
