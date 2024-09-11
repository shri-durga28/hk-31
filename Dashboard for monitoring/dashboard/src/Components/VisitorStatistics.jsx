// VisitorStatistics.jsx
import React, { useState, useEffect } from 'react';
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

// Register Chart.js elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Function to generate random visitor data
const generateVisitorData = (days) => {
  return Array.from({ length: days }, (_, i) => Math.floor(Math.random() * 1000) + 500);
};

// Function to get the current date and the previous 6 days
const getLabels = () => {
  const labels = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    labels.push(date.toISOString().split('T')[0]); // Format YYYY-MM-DD
  }
  return labels;
};

const VisitorStatistics = () => {
  const [data, setData] = useState({
    labels: getLabels(),
    datasets: [
      {
        label: 'Visitor Statistics',
        data: generateVisitorData(7),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date();
      const labels = getLabels();
      const newVisitorData = [...data.datasets[0].data.slice(1), Math.floor(Math.random() * 1000) + 500];

      setData({
        labels,
        datasets: [
          {
            label: 'Visitor Statistics',
            data: newVisitorData,
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      });
    }, 86400000); // Update every 24 hours

    return () => clearInterval(interval);
  }, [data.datasets[0].data]);

  return <Line data={data} />;
};

export default VisitorStatistics;
