import React,  {useState, useEffect, useContext} from 'react';

import { SearchContext } from '../App';
import Categories from '../components/Categories.jsx'
import Sort from '../components/Sort.jsx'
import ProductCard from '../components/ProductCard/ProductCard.jsx'
import Placeholder from '../components/ProductCard/Placeholder.jsx'
import Pagination from '../components/Pagination/Pagination.jsx'

import { useSelector, useDispatch } from 'react-redux';
import {setCategoryId} from '../redux/slices/filterSlice'


  const Home = () => {

    const {searchValue} = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
  
    const dispatch = useDispatch();
    const categoryId = useSelector(({filter}) => filter.categoryId)
    const sortType = useSelector(({filter}) => filter.sort.sortProperty)

    const onClickCategory = (id) => {
       dispatch(setCategoryId(id))
    }

    useEffect(() => {
      setIsLoading(true); 
      const sortBy =  sortType.replace('-', '');
      const order = sortType.includes('-') ? 'asc' : 'desc';
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const search = searchValue ? `&search=${searchValue}` : '';

      // limit = 16
      fetch(
        `https://63a6c641f8f3f6d4ab11fc8d.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => 
          res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);  
      });
      window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage])
  
    const dishes = items.map((dish) => (<ProductCard key={dish.id} {... dish}/>))
    const placeholders = [...new Array(6)].map((_, index) => <Placeholder key={index}/>) ;

    return (
      <div className="container">
        <div className="content__top">
          <Categories categoryId={categoryId} onClickCategory = {onClickCategory}/>
          <Sort />
        </div>
        <h2 className="content__title">Вcе и сразу</h2>
        <div className="content__items">
          { isLoading ? placeholders : dishes }
        </div>
        <Pagination onChangePage={number => setCurrentPage(number)}/>
      </div>
    )
  }

export default Home;