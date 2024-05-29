// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from '../Slice/balanceSlide';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});

export default store;


