// dashboard.js
import React from 'react';
import './styles/dashboard.css';
import Chart1 from './dashboardCharts/chart1';
import Chart2 from './dashboardCharts/chart2';
import Chart3 from './dashboardCharts/chart3';

const Dashboard = () => {
  return (
    <div className="container-dash">
      <div className="est1"><h2>Contenedores: 1</h2></div>
      <div className="est2"><h2>Contenedores activos: 1</h2></div>
      <div className="chart-1">
        <Chart1 />
      </div>
      <div className="chart-2">
        <Chart2 />
      </div>
      <div className="chart-3">
        <Chart3 />
      </div>
    </div>
  );
};

export default Dashboard;
