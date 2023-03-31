import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSort, setSort } from "../../redux/slices/filterSlice";
import ArrowSortIcon from "../Icons/ArrowSortIcon";
import useHandleClickOutside from "../Hook/useHandleClickOutside";
import styles from "./Sort.module.scss";

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const [open, setOpen] = useState(false);
  const sortTypes = [
    { name: "популярности ↓", sortProperty: "rating" },
    { name: "популярности ↑", sortProperty: "-rating" },
    { name: "цене ↓", sortProperty: "price" },
    { name: "цене ↑", sortProperty: "-price" },
    { name: "алфавиту ↓", sortProperty: "title" },
    { name: "алфавиту ↑", sortProperty: "-title" },
  ];

  useHandleClickOutside(["sort"], () => {
    setOpen(false);
  });

  const handleChangeSortType = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };
  return (
    <div className={styles.sort}>
      <div className={styles.sort__label}>
        <div>
          <ArrowSortIcon />
          <b>Сортировка по:</b>
        </div>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className={styles.sort__popup}>
          <ul>
            {sortTypes.map((sortType, index) => (
              <li
                key={index}
                onClick={(e) => handleChangeSortType(sortType)}
                className={
                  sort.sortProperty === sortType.sortProperty
                    ? styles.selected
                    : null
                }
                id="sort"
              >
                {sortType.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
