import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart1 = () => {
  const data = {
    labels: ['Plastic', 'Glass', 'Paper', 'Metal', 'Organic'],
    datasets: [{
      label: 'Collected Waste (kg)',
      data: [50, 30, 70, 20, 90],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      borderWidth: 1
    }]
  };

  return <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />;
};

export default Chart1;
