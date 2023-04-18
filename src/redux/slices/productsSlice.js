import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      const currentPage = state.filter.currentPage;
      const order = state.filter.sort.sortProperty.includes("-") ? "asc" : "desc";
      const sortBy = state.filter.sort.sortProperty.replace("-", "");
      const category =state.filter.categoryId > 0 ? `category=${state.filter.categoryId}` : "";
      const search = state.filter.searchValue ? `&search=${state.filter.searchValue}` : "";

      const response = await fetch(
        `https://63a6c641f8f3f6d4ab11fc8d.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&${order}${search}`
      );

      if (!response.ok) {
        throw new Error("Error");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  status: null,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "pending";
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
