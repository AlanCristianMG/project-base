import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Chart3 = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Monthly Waste Collection (kg)',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
    }]
  };

  return <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />;
};

export default Chart3;
