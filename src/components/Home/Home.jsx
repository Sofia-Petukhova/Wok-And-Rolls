import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../Home/Home.module.scss";

import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import Placeholder from "../ProductCard/Placeholder.jsx";
import Pagination from "../Pagination/Pagination.jsx";

import { selectCategoryTitle } from "../../redux/slices/filterSlice";
import { requestProducts } from "../../redux/slices/productsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const activCategory = useSelector(selectCategoryTitle);
  const products = useSelector(({ products }) => products.products);
  const { status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(requestProducts());
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const sortBy = sortType.replace("-", "");
  //   const order = sortType.includes("-") ? "asc" : "desc";
  //   const category = categoryId > 0 ? `category=${categoryId}` : "";
  //   const search = searchValue ? `&search=${searchValue}` : "";

  //   axios
  //     .get(
  //       `https://63a6c641f8f3f6d4ab11fc8d.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
  //     )

  //     .then((response) => {
  //       setItems(response.data);
  //       setIsLoading(false);
  //     });

  //   
  // }, [categoryId, sortType, searchValue, currentPage]);

  const dishes = products.map((dish) => (
    <ProductCard key={dish.id} {...dish} />
  ));
  const placeholders = [...new Array(6)].map((_, index) => (
    <Placeholder key={index} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.content__top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.content__title}>{activCategory}</h2>

      {status === "pending" ? (
        <div className={styles.content__items}>{placeholders}</div>
      ) : (
        <div className={styles.content__items}>{dishes}</div>
      )}
      {error && (
        <div className={styles.error}>
          Произошла ошибка на сервере. Пожалуйста, перезагрузите страницу.
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default Home;
