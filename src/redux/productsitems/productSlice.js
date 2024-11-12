import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartProducts: [],
  TotalPros: [],
};

const productSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    StoreProducts: (state, action) => {
      const CartItem = action.payload;
      state.CartProducts = [...state.CartProducts, CartItem];
      console.log(CartItem);
    },
    DeletProduct: (state, action) => {
      state.CartProducts = state.CartProducts.filter(
        (item) => item.id !== action.payload.id
      );
    },
     
  },
});

export default productSlice.reducer;

export const { StoreProducts, DeletProduct } = productSlice.actions;
