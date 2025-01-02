import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './menuSlice/menuSlice';
import cartSlice from './cartSlice/cartSlice';
import modalSlice from './modalSlice/modalSlice';

const store = configureStore({
  reducer: {
    menu: menuSlice,
    cart: cartSlice,
    modal: modalSlice,
  },
});

export default store;
