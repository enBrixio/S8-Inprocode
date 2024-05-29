// src/components/ChartCostes.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

function ChartCostes() {
  const dataPoints = useSelector((state) => state.balance.data);

  const data = {
    responsive: true,
    labels: ['dl', 'dt', 'dc', 'dj', 'dv', 'ds', 'dg'],
    datasets: [
      {
        data: dataPoints,
        backgroundColor: [
          'rgba(249,115,22,1)', // dl
          'rgba(249,115,22,1)', // dt
          'rgba(249,115,22,1)', // dc
          'rgba(249,115,22,1)', // dj
          'rgba(249,115,22,1)', // dv
          'rgba(249,115,22,1)', // ds
          'rgba(15, 118, 100, 1)', // dg
        ],
        borderColor: [
          'rgba(249,115,22,1)', // dl
          'rgba(249,115,22,1)', // dt
          'rgba(249,115,22,1)', // dc
          'rgba(249,115,22,1)', // dj
          'rgba(249,115,22,1)', // dv
          'rgba(249,115,22,1)', // ds
          'rgba(15, 118, 100, 1)', // dg
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Elimina las líneas verticales
        },
      },
      y: {
        grid: {
          display: true, // Muestra las líneas horizontales
          color: 'rgba(200, 200, 200, 0.2)', // Cambia el color de las líneas horizontales si lo deseas
        },
        beginAtZero: true, // Asegúrate de que la escala comience en cero
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default ChartCostes;



