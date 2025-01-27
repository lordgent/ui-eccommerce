// reducers/loading_action.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true, // Memulai dengan true agar loading muncul saat halaman pertama kali dimuat
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true; // Set isLoading ke true saat mulai loading
    },
    stopLoading: (state) => {
      state.isLoading = false; // Set isLoading ke false saat selesai loading
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
