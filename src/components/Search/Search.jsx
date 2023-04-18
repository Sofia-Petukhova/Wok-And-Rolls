import React, { useRef, useCallback } from "react";
import debounce from "lodash.debounce";
import styles from "../Search/Search.module.scss";
import SearchIcon from "../Icons/SearchIcon";
import SearchCrossIcon from "../Icons/SearchCrossIcon";
import { selectSearchValue, setSearchValue } from "../../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slices/productsSlice";

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const value = useSelector(selectSearchValue);
 
  const onClickClear = () => {
    dispatch(setSearchValue(""));
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  const onChangeSearch = (str) => {
    dispatch(setSearchValue(str));
    updateSearchValue(str);
    dispatch(fetchProducts());
  };

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <SearchIcon />
      </div>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChangeSearch(e.target.value)}
        className={styles.input}
        placeholder="Поиск по названию..."
      />
      {value && (
        <div onClick={onClickClear} className={styles.clearIcon}>
          <SearchCrossIcon />
        </div>
      )} 
    </div>
  );
};

export default Search;