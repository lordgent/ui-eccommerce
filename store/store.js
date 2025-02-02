import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart_action';
import loadingReducer from './reducers/loading_action'

import { saveStateToLocalStorage, loadStateFromLocalStorage } from '../utils/localStorage';

const preloadedState = {
  cart: loadStateFromLocalStorage(),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    loading: loadingReducer,

  },
  preloadedState, 
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState().cart);
});

export default store;
