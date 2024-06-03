import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    [320, 128, 457, 95, 210, 340, 400], // Semana 1
    [150, 200, 300, 400, 500, 600, 700], // Semana 2
    [100, 200, 150, 300, 250, 400, 450], // Semana 3
    [120, 180, 220, 280, 350, 370, 400], // Semana 4
    [110, 130, 210, 240, 260, 280, 300], // Semana 5
  ],
  total: 0,
  lastExpense: 0,
  percentageChange: 0,
  currentWeek: 4, // La semana actual es la quinta (índice 4)
  currentDay: new Date().getDay() - 1, // Detectar el día de la semana actual (0=Domingo, 6=Sábado). Ajustar para 0=Lunes, 6=Domingo.
  dailyPercentageChange: 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    calculateTotal: (state) => {
      const currentData = state.data[state.currentWeek];
      state.total = currentData.reduce((acc, value) => acc + value, 0);
      state.lastExpense = currentData[currentData.length - 1];
    },
    calculatePercentageChange: (state) => {
      const currentData = state.data[state.currentWeek];
      const previousData = state.currentWeek > 0 ? state.data[state.currentWeek - 1] : [0];
      const ds = previousData[previousData.length - 1];
      const dg = currentData[currentData.length - 1];
      state.percentageChange = ds ? ((dg - ds) / ds) * 100 : 0;
    },
    calculateDailyPercentageChange: (state) => {
      const currentData = state.data[state.currentWeek];
      const currentDay = state.currentDay;

      if (currentDay === 0) {
        const previousWeek = state.currentWeek > 0 ? state.currentWeek - 1 : null;
        if (previousWeek !== null) {
          const previousData = state.data[previousWeek];
          const sundayValue = previousData[6];
          const mondayValue = currentData[0];
          const difference = Math.abs(mondayValue - sundayValue);
          const mean = (mondayValue + sundayValue) / 2;
          state.dailyPercentageChange = mean ? (difference / mean) * 100 : 0;
        } else {
          state.dailyPercentageChange = 0;
        }
      } else if (currentDay > 0) {
        const todayValue = currentData[currentDay];
        const yesterdayValue = currentData[currentDay - 1];
        const difference = Math.abs(todayValue - yesterdayValue);
        const mean = (todayValue + yesterdayValue) / 2;
        state.dailyPercentageChange = mean ? (difference / mean) * 100 : 0;
      } else {
        state.dailyPercentageChange = 0;
      }
    },
    setCurrentWeek: (state, action) => {
      state.currentWeek = action.payload;
    },
  },
});

export const { calculateTotal, calculatePercentageChange, calculateDailyPercentageChange, setCurrentWeek } = balanceSlice.actions;
export default balanceSlice.reducer;











