import React,  {useState, useEffect} from 'react';
import Categories from '../components/Categories.jsx'
import Sort from '../components/Sort.jsx'
import ProductCard from '../components/ProductCard/ProductCard.jsx'
import Placeholder from '../components/ProductCard/Placeholder.jsx'

 const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
 
   useEffect(() => {
     fetch('https://63a6c641f8f3f6d4ab11fc8d.mockapi.io/items')
     .then((res) => res.json())
     .then((arr) => {
       setItems(arr);
       setIsLoading(false);
     });
   }, []);
  return (
    <>
    <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Вcе и сразу</h2>
          <div className="content__items">
            {
              isLoading 
              ? [...new Array(6)].map((_, index) => <Placeholder key={index}/>)
              : items.map((dish) => (
                <ProductCard 
                key={dish.id}
                {... dish}
                />
              ))
            }
          </div>
    </>
  )
}

export default Home;