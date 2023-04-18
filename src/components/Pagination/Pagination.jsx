import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage, setCurrentPage } from "../../redux/slices/filterSlice";
import { fetchProducts } from "../../redux/slices/productsSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
    dispatch(fetchProducts())
  };
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;