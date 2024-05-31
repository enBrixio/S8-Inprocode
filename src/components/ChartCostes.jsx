import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { calculateDailyPercentageChange } from '../Slice/balanceSlide';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registro de los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartCostes() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.balance.data);
  const currentWeek = useSelector((state) => state.balance.currentWeek);
  const currentDay = useSelector((state) => state.balance.currentDay);
  const dailyPercentageChange = useSelector((state) => state.balance.dailyPercentageChange);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(calculateDailyPercentageChange());
  }, [dispatch, currentWeek, currentDay]);

  const weekData = data[currentWeek];

  const chartData = {
    labels: [
      t('main.day1'), t('main.day2'), t('main.day3'),
      t('main.day4'), t('main.day5'), t('main.day6'), t('main.day7')
    ],
    datasets: [
      {
        label: t('main.costes'),
        data: weekData,
        backgroundColor: weekData.map((_, index) => index === currentDay ? 'rgba(2, 133, 78,1)' : 'rgba(255, 128, 0,0.8)'),
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const value = tooltipItem.raw;
            if (tooltipItem.dataIndex === currentDay) {
              return `${t('main.costes')}: ${value} € (${dailyPercentageChange.toFixed(2)}%)`;
            }
            return `${t('main.costes')}: ${value} €`;
          }
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
}

export default ChartCostes;







