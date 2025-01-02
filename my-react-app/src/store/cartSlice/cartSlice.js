import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isOpen: false,
    content: null,
    isEmpty: true,
    count: 0,
  },
  reducers: {
    toggleOpenCart: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    addToCart: (state, action) => {
      state.content = action.payload.product;
      if (state.count > 0) {
        state.isEmpty = false;
      } else {
        state.isEmpty = true;
      }
      state.count = action.payload.count;
    },
    deleteFromCart: (state) => {
      state.content = null;
      if (state.content) {
        state.isEmpty = false;
      } else {
        state.isEmpty = true;
      }
    },
    increaseCount: (state, action) => {
      state.count++;
    },
    decreaseCount: (state, action) => {
      state.count--;
      if (state.count <= 0) {
        state.isEmpty = true;
      }
    },
  },
});

export const {
  toggleOpenCart,
  addToCart,
  deleteFromCart,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;
export default cartSlice.reducer;
