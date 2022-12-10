import React, {useState} from 'react';

function Categories() {

  const [activeCategory, setActiveCategory] = useState(0);

  const categories = ['Все', 'Сеты', 'Роллы', 'Суши', 'Wok', 'Напитки']

  const onClickCategory = (index) => {
    setActiveCategory(index);
  }

  return (
    <div className="categories">
      <ul>
        {
          categories.map((value, index) => (
            <li key={index} onClick = {() => onClickCategory(index)} className= {activeCategory === index ? "active" : ''}>
              {value}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

  export default Categories;

  