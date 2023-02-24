import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { SearchContext } from "../../App";
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import Placeholder from "../ProductCard/Placeholder.jsx";
import Pagination from "../Pagination/Pagination.jsx";

import { useSelector, useDispatch } from "react-redux";
import {
  setCategory,
  setCurrentPage,
  selectCategoryId,
  selectSortProperty,
  selectCurrentPage,
  selectCategoryTitle,
} from "../../redux/slices/filterSlice";

const Home = () => {
  const dispatch = useDispatch();
  
  const categoryId = useSelector(selectCategoryId);
  const sortType = useSelector(selectSortProperty);
  const currentPage = useSelector(selectCurrentPage);
  const activCategory = useSelector(selectCategoryTitle);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const onClickCategory = (categoryTitle, categoryId) => {
    dispatch(
      setCategory({
        categoryId,
        categoryTitle,
      })
    );
    onChangePage(1);
  };

  useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://63a6c641f8f3f6d4ab11fc8d.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
      )

      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const dishes = items.map((dish) => <ProductCard key={dish.id} {...dish} />);
  const placeholders = [...new Array(6)].map((_, index) => (
    <Placeholder key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">{activCategory}</h2>
      <div className="content__items">{isLoading ? placeholders : dishes}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
