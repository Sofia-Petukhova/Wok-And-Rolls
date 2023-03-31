import React, { useContext, useRef, useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";
import styles from "../Search/Search.module.scss";
import SearchIcon from "../Icons/SearchIcon";
import SearchCrossIcon from "../Icons/SearchCrossIcon";

const Search = () => {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <SearchIcon />
      </div>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
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
