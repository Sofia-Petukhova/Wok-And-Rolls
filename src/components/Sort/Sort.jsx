import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";
import ArrowSortIcon from "../Icons/ArrowSortIcon";

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector(({ filter }) => filter.sort);

  const [open, setOpen] = useState(false);
  const sortTypes = [
    { name: "популярности ↓", sortProperty: "rating" },
    { name: "популярности ↑", sortProperty: "-rating" },
    { name: "цене ↓", sortProperty: "price" },
    { name: "цене ↑", sortProperty: "-price" },
    { name: "алфавиту ↓", sortProperty: "title" },
    { name: "алфавиту ↑", sortProperty: "-title" },
  ];

  const handleChangeSortType = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <div className="sort__label-wrapper">
          <ArrowSortIcon/>
          <b>Сортировка по:</b>
        </div>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortTypes.map((item, index) => (
              <li
                key={index}
                onClick={() => handleChangeSortType(item)}
                className={
                  sort.sortProperty === item.sortProperty ? "active" : ""
                }
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
