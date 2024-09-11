import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaCheckCircle } from 'react-icons/fa'; // Only the normal icon will be used
import 'react-circular-progressbar/dist/styles.css';

// Function to generate vibration data between 10 and 30 dB (Normal levels)
const generateVibrationData = () => {
  return Math.floor(Math.random() * 21) + 10; // Vibration levels between 10 and 30 dB
};

const StructuralVibrationMonitoring = () => {
  const [vibration, setVibration] = useState(generateVibrationData());

  useEffect(() => {
    const interval = setInterval(() => {
      setVibration(generateVibrationData());
    }, 5000); // Update vibration data every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const vibrationStatus = 'Normal'; // Always 'Normal' for this version
  const vibrationColor = '#28a745'; // Green for normal levels
  const Icon = FaCheckCircle; // Check icon for normal status

  return (
    <div className="p-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 shadow-lg rounded-lg text-center w-64 mx-auto">
      <h2 className="text-lg font-medium uppercase tracking-[0.4rem] mb-4">Vibration Monitoring</h2>

      <div className="mb-2" style={{ width: '120px', height: '120px', margin: '0 auto' }}>
        <CircularProgressbar
          value={vibration}
          text={`${vibration} dB`}
          styles={buildStyles({
            pathColor: vibrationColor,
            textColor: vibrationColor,
            trailColor: '#d6d6d6',
            textSize: '16px', // Reduced text size inside the circular progress bar
          })}
        />
      </div>

      <div className="flex justify-center items-center mt-2">
        <Icon size={30} color={vibrationColor} />
        <p className={`text-md ml-2`} style={{ color: vibrationColor }}>
          {vibrationStatus}
        </p>
      </div>
    </div>
  );
};

export default StructuralVibrationMonitoring;
