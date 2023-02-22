import { createSlice } from "@reduxjs/toolkit";

export const selectProducts = ({ cart }) => cart.products;
export const selectTotalCount = ({ cart }) => {
  const count = cart.products.reduce((acc, product) => {
    return (acc = acc + product.count);
  }, 0);
  return count || 0;
};
export const selectTotalPrice = ({ cart }) => cart.totalPrice;

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, { payload }) {
      let isCheck = false;
      const updateProducts = state.products.map((prod) => {
        if (
          prod.id === payload.id &&
          prod.amount === payload.amount &&
          prod.sauce === payload.sauce
        ) {
          isCheck = true;
          state.totalPrice = state.totalPrice + prod.price;
          return { ...prod, count: prod.count + 1 };
        }
        return prod;
      });
      if (!isCheck) {
        state.totalPrice = state.totalPrice + payload.price;
        updateProducts.push({
          ...payload,
          count: 1,
        });
      }
      state.products = updateProducts;
    },
    deleteProduct(state, { payload }) {
      state.products.filter((product) => product.id !== payload);
    },
    cleanProducts(state) {
      state.products = [];
    },
  },
});
export const { addProduct, deleteProduct, cleanProducts } = cartSlice.actions;

export default cartSlice.reducer;
