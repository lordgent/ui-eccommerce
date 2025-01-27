import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items.find(item => item.id === action.payload.id);

      if (existingProduct) {
        existingProduct.qty += action.payload.qty;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const product = state.items.find(item => item.id === action.payload.id);

      if (product) {
        product.qty = action.payload.qty;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
