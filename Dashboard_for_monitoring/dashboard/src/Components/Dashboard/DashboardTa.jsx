import React from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material'; // Importing the arrow icon
import TemperatureAndHumidityMonitoringTa from '../TemperatureAndHumidityMonitoring/TemperatureAndHumidityMonitoringTa';
import VisitorStatisticsTa from '../VisitorStatistics/VisitorStatisticsTa';
import StructuralVibrationMonitoringTa from '../StructuralVibrationMonitoring/StructuralVibrationMonitoringTa';
import TrafficDensityMapTa from '../TrafficDensityMap/TrafficDensityMapTa';
import CustomTempleMapTa from '../CustomTempleMap/CustomTempleMapTa';

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
  <div className={`p-6 rounded-2xl shadow-lg flex-1 min-w-[200px] ${color}`}>
    <h3 className="text-base uppercase tracking-wide text-white">{title}</h3>
    <p className="text-4xl text-white mt-2 font-semibold">{value}</p>
  </div>
);

// Main Dashboard Component
const DashboardTa = () => {
  const navigate = useNavigate();
  const templeAge = calculateTempleAge();
  const currentDate = getCurrentDate();
  const airQualityIndex = 17; // Hardcoded AQI value
  const templeConditionIndex = 85; // Hardcoded condition index (e.g., out of 100)
  const isOpen = isTempleOpen(); // Dynamic temple status

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background1.jpg')" }}>
      {/* Dark overlay for better contrast */}
      <div className="min-h-screen bg-black bg-opacity-50 flex">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 flex items-center text-white hover:font-bold"
        >
          <ArrowBack />
          <span className="ml-2">முகப்புக்கு மடங்கு</span>
        </button>

        {/* Main Content */}
        <main className="flex-1 p-10 space-y-8 bg-white/20 backdrop-blur-lg rounded-lg">
          {/* Header */}
          <header className="flex justify-between items-center p-6 bg-white/30 backdrop-blur-lg rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold tracking-widest text-white">மாணிடரிங் டாஷ் பீப்</h1>
            <div className="flex items-center space-x-4">
              <span className="text-white">வணக்கம்! பயனர்</span>
              <img src="/icon.png" alt="Profile" className="w-10 h-10 rounded-full" />
            </div>
          </header>

          {/* Date, Temple Age, and Open Status */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard title="இன்றைய தேதி" value={currentDate} color="bg-yellow-600" /> {/* Warm Yellow */}
            <StatCard title="மந்திரசாலை வயது" value={`${templeAge} ஆண்டுகள்`} color="bg-orange-600" /> {/* Deep Orange */}
            <StatCard title="மந்திரசாலை திறந்த நிலை" value={isOpen ? 'திறந்தது' : 'மூடப்பட்டது'} color={isOpen ? 'bg-green-600' : 'bg-red-600'} /> {/* Open: Green, Closed: Red */}
            <StatCard title="மந்திரசாலை நிலை குறியீடு" value={`${templeConditionIndex} / 100`} color="bg-amber-700" /> {/* Amber */}
          </section>

          {/* Stats Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard title="மொத்த நுகர்வோர்" value="1259" color="bg-amber-900" /> {/* Brown */}
            <StatCard title="வாயு தரம் குறியீடு (AQI)" value={airQualityIndex} color="bg-orange-500" /> {/* Burnt Orange */}
          </section>

          {/* Temperature and Humidity Monitoring */}
          <TemperatureAndHumidityMonitoringTa />

          {/* Visitor Statistics */}
          <section className="mt-8">
            <h2 className="text-xl font-medium uppercase tracking-widest mb-4 text-white">சந்தர்க்கர் புள்ளிவிவரங்கள்</h2>
            <VisitorStatisticsTa />
          </section>

          {/* Vibration Monitoring */}
          <section className="mt-8">
            <h2 className="text-xl font-medium uppercase tracking-widest mb-4 text-white">சரும புலனாய்வு கண்காணிப்பு</h2>
            <StructuralVibrationMonitoringTa />
          </section>

          {/* Traffic Density Map */}
          <section className="mt-8">
            <h2 className="text-xl font-medium uppercase tracking-widest mb-4 text-white">வர்த்தக பரிமாண வரைபடம்</h2>
            <TrafficDensityMapTa />
          </section>

          {/* Temple Location */}
          <section className="mt-8">
            <h2 className="text-xl font-medium uppercase tracking-widest mb-4 text-white">மந்திரசாலை இடம்</h2>
            <CustomTempleMapTa />
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardTa;
