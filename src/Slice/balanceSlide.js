// src/features/balanceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [10, 20, 15, 25, 22, 30, 100],
  total: 0,
  lastExpense: 0,
  percentageChange: 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    calculateTotal: (state) => {
      state.total = state.data.reduce((acc, value) => acc + value, 0);
      state.lastExpense = state.data[state.data.length - 1]; // Actualizar el último valor
    },
    calculatePercentageChange: (state) => {
      const ds = state.data[state.data.length - 2];
      const dg = state.data[state.data.length - 1];
      state.percentageChange = ((dg - ds) / ds) * 100;
    },
  },
});

export const { calculateTotal, calculatePercentageChange } = balanceSlice.actions;
export default balanceSlice.reducer;

