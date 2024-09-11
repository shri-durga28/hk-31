import React, { useState, useEffect } from 'react';
import TemperatureAndHumidityMonitoring from './TemperatureAndHumidityMonitoring';
import VisitorStatistics from './VisitorStatistics';
import 'tailwindcss/tailwind.css';
import StructuralVibrationMonitoring from './StructuralVibrationMonitoring';

// Function to calculate the age of the temple
const calculateTempleAge = () => {
  const currentYear = new Date().getFullYear();
  const foundationYear = 700; // Uthrakosamangai Temple estimated foundation year
  return currentYear - foundationYear;
};

// Function to get the current date in DD-MM-YYYY format
const getCurrentDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}-${month}-${year}`;
};

// Function to check if the temple is open based on the time of day
const isTempleOpen = () => {
  const now = new Date();
  const currentHour = now.getHours();

  // Define temple's opening hours (6:00-11:00 and 16:00-20:00)
  return (currentHour >= 6 && currentHour < 11) || (currentHour >= 16 && currentHour < 20);
};

// Reusable StatCard Component for Consistent UI
const StatCard = ({ title, value, color }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg flex-1 min-w-[200px]">
    <h3 className="text-lg uppercase tracking-widest font-medium">{title}</h3>
    <p className={`text-3xl ${color} mt-2`}>{value}</p>
  </div>
);

// Main Dashboard Component
const Dashboard = () => {
  const templeAge = calculateTempleAge();
  const currentDate = getCurrentDate();
  const airQualityIndex = 17; // Hardcoded AQI value
  const templeConditionIndex = 85; // Hardcoded condition index (e.g., out of 100)
  const isOpen = isTempleOpen(); // Dynamic temple status

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white h-full fixed">
        <div className="p-5">
          <h2 className="text-2xl font-medium uppercase tracking-[0.4rem]">Monument Monitoring</h2>
        </div>
        <ul>
          <li className="p-4 hover:bg-blue-800">Dashboard</li>
          <li className="p-4 hover:bg-blue-800">Temperature & Humidity</li>
          <li className="p-4 hover:bg-blue-800">Air Quality Index</li>
          <li className="p-4 hover:bg-blue-800">Vibration</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-6">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow-lg rounded-lg mb-6">
          <h1 className="text-xl font-medium uppercase tracking-[0.4rem]">Monitoring Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>Hi! User</span>
            <img src="/icon.png" alt="Profile" className="w-10 h-10 rounded-full" />
          </div>
        </header>

        {/* Date, Temple Age, and Open Status */}
        <section className="flex flex-wrap gap-6 mb-6">
          <StatCard title="Today's Date" value={currentDate} color="text-blue-600" />
          <StatCard title="Age of the Temple" value={`${templeAge} years`} color="text-green-600" />
          <StatCard title="Temple Open Status" value={isOpen ? 'Open' : 'Closed'} color={isOpen ? 'text-green-600' : 'text-red-600'} />
          <StatCard title="Temple Condition Index" value={`${templeConditionIndex} / 100`} color="text-yellow-600" />
        </section>

        {/* Stats Cards */}
        <section className="flex flex-wrap gap-6 mb-6">
          <StatCard title="Total Visitors" value="1259" color="text-blue-600" />
          <StatCard title="Air Quality Index (AQI)" value={airQualityIndex} color="text-green-600" />
        </section>

        {/* Temperature and Humidity Monitoring */}
        <TemperatureAndHumidityMonitoring />

        {/* Visitor Statistics */}
        <section className="mt-8">
          <h2 className="text-xl font-medium uppercase tracking-[0.4rem] mb-4">Visitor Statistics</h2>
          <VisitorStatistics />
        </section>

        {/* Vibration Monitoring */}
        <section className="mt-8">
          <h2 className="text-xl font-medium uppercase tracking-[0.4rem] mb-4">Structural Vibration Monitoring</h2>
          <StructuralVibrationMonitoring />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
