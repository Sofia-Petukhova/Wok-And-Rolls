import React from 'react';

function Categories({categoryId, onClickCategory}) {

  const categories = ['Все', 'Сеты', 'Роллы', 'Суши', 'Wok', 'Напитки']

  return (
    <div className="categories">
      <ul>
        {
          categories.map((value, index) => (
            <li 
              key={index} 
              onClick = {() => onClickCategory(index)} 
              className= {categoryId === index ? "active" : ''}
            >
              {value}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

  export default Categories;

  