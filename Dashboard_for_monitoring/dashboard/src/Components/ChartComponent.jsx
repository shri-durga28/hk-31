import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Visitor Statistics',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const ChartComponent = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default ChartComponent;
