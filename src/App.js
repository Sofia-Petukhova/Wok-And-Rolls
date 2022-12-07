import React from 'react'; 
import './scss/app.scss'
import Header from './components/Header.jsx'
import Categories from './components/Categories.jsx'
import Sort from './components/Sort.jsx'
import ProductCard from './components/ProductCard.jsx'

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
            <ProductCard title="roll" price={500}/>
            <ProductCard title="roll" price={500}/>
            <ProductCard title="roll" price={500}/>
            <ProductCard title="roll" price={500}/>
            <ProductCard title="roll" price={500}/>
            <ProductCard title="roll" price={500}/>
            <ProductCard title="roll" price={500}/>
            <ProductCard title="roll" price={500}/>
            <ProductCard title="roll" price={500}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
