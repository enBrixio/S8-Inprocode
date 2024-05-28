import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function ChartCostes() {
    const data = {
        labels: ['dl', 'dt', 'dc', 'dj', 'dv', 'ds', 'dg'],
        datasets: [
            {
                data: [10, 20, 15, 25, 22, 30, 28],
                backgroundColor: [
                    'rgba(249,115,22,1)', // dl
                    'rgba(249,115,22,1)', // dt
                    'rgba(249,115,22,1)', // dc
                    'rgba(249,115,22,1)', // dj
                    'rgba(249,115,22,1)', // dv
                    'rgba(249, 115, 22, 1)', // ds
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
    };

    return <Bar data={data} options={options} />;
}

export default ChartCostes;


