import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    stripeResponse: {},
    successPageCarts: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    setStripeResponse: (state, action) => {
      state.stripeResponse = action.payload;
    },
    setSuccessPageCarts: (state, action) => {
      state.successPageCarts = action.payload;
    },
  },
});

export const { addProduct, setStripeResponse, setSuccessPageCarts } =
  cartSlice.actions;
export default cartSlice.reducer;
