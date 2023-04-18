import { createSlice } from "@reduxjs/toolkit";

export const selectProducts = ({ cart }) => cart.productsInCart;
export const selectTotalCount = ({ cart }) => {
  const count = cart.productsInCart.reduce((acc, product) => {
    return (acc = acc + product.count);
  }, 0);
  return count || 0;
};
export const selectTotalPrice = ({ cart }) => {
  const count = cart.productsInCart.reduce((acc, product) => {
    return (acc = acc + product.price * product.count);
  }, 0);
  return count || 0;
};

const initialState = {
  productsInCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, { payload }) {
      let isCheck = false;
      const updateProducts = state.productsInCart.map((prod) => {
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
      state.productsInCart = updateProducts;
    },
    decreaseProduct(state, { payload }) {
      state.productsInCart = state.productsInCart.map((prod) => {
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
      state.productsInCart = state.productsInCart.filter((prod) => {
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
      state.productsInCart = [];
    },
  },
});
export const { addProduct, decreaseProduct, deleteProduct, cleanCart } =
  cartSlice.actions;

export default cartSlice.reducer;