import { createSlice } from "@reduxjs/toolkit";

export const selectCategoryId = ({ filter }) => filter.categoryId;
export const selectSortProperty = ({ filter }) => filter.sort.sortProperty;
export const selectCurrentPage = ({ filter }) => filter.currentPage;
export const selectCategoryTitle = ({ filter }) => filter.categoryTitle;

const initialState = {
  categoryId: 0,
  categoryTitle: "Все",
  currentPage: 1, 
  sort: { name: "популярности ↓", sortProperty: "rating" },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, { payload }) {
      const {categoryId, categoryTitle} = payload;
      state.categoryId = categoryId;
      state.categoryTitle = categoryTitle;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategory, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
