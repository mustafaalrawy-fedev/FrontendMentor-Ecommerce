import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isClicked: false },
  reducers: {
    openModal: (state, action) => {
      state.isClicked = true;
    },
    closeModal: (state, action) => {
      state.isClicked = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
