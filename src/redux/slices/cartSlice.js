import { createSlice } from "@reduxjs/toolkit";

export const selectProducts = ({ cart }) => cart.products;
export const selectTotalCount = ({ cart }) => {
  const count = cart.products.reduce((acc, product) => {
    return (acc = acc + product.count);
  }, 0);
  return count || 0;
};
export const selectTotalPrice = ({ cart }) => {
  const count = cart.products.reduce((acc, product) => {
    return (acc = acc + (product.price * product.count));
  }, 0);
  return count || 0;
};

const initialState = {
  products: [],
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
        
          return { ...prod, count: prod.count + 1 };
        }
        return prod;
      });
      if (!isCheck) {
        
        updateProducts.push({
          ...payload,
          count: 1,
        });
      }
      state.products = updateProducts;
    },
    decreaseProduct(state, { payload }) {
      state.products = state.products.map((prod) => {
        if (
          prod.id === payload.id &&
          prod.amount === payload.amount &&
          prod.sauce === payload.sauce
        ) {
          return { ...prod, count: prod.count - 1 };
        }
        return prod;
      });
    },
    deleteProduct(state, { payload }) {
      state.products = state.products.filter((prod) => {
        if (
          prod.id === payload.id &&
          prod.amount === payload.amount &&
          prod.sauce === payload.sauce
        ) {
          state.totalPrice = state.totalPrice - prod.price;
          return false;
        }
        return true;
      });
    },
    cleanCart(state) {
      state.products = [];
    },
  },
});
export const { addProduct, decreaseProduct, deleteProduct, cleanCart } =
  cartSlice.actions;

export default cartSlice.reducer;
