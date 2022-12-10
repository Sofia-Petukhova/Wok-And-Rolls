import React from 'react'; 
import './scss/app.scss'
import Header from './components/Header.jsx'
import Categories from './components/Categories.jsx'
import Sort from './components/Sort.jsx'
import ProductCard from './components/ProductCard.jsx'
import menu from './menu.json'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Вcе и сразу</h2>
          <div className="content__items">
            {
              menu.map((dish) => (
                <ProductCard
                key={dish.id} 
                dish={dish}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
