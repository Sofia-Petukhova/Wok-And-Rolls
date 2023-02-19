import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  redusers: {
    addProducts(state, { payload }) {
      state.products.push(payload);
    },
    deleteProducts(state, { payload }) {
      state.products.filter((product) => product.id !== payload);
    },
    cleanProducts(state) {
      state.products = [];
    }
  },
});

export const { addProducts, deleteProducts, cleanProducts } = cartSlice.actions;

export default cartSlice.reducer;
