import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const Chart2 = () => {
  const data = {
    labels: ['Plastic', 'Glass', 'Paper', 'Metal', 'Organic'],
    datasets: [{
      label: 'Waste Distribution',
      data: [50, 30, 70, 20, 90],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      hoverOffset: 4
    }]
  };

  return <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />;
};

export default Chart2;
