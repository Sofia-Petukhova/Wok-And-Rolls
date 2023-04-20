import React from "react";
import styles from "./Categories.module.scss"; 
import { selectCategoryId, setCategory, setCurrentPage } from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { requestProducts } from "../../redux/slices/productsSlice";

function Categories() {
  const dispatch = useDispatch();
  const categories = ["Все", "Сеты", "Роллы", "Суши", "Wok", "Напитки"];
  const categoryId = useSelector(selectCategoryId);
  const onClickCategory = (categoryTitle, categoryId) => {
    dispatch(
      setCategory({
        categoryId,
        categoryTitle,
      })
    );
    dispatch(setCurrentPage(1));
    dispatch(requestProducts())
  };
 
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