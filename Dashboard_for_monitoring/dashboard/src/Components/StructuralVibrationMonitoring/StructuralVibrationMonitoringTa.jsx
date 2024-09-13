import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaCheckCircle } from 'react-icons/fa';
import 'react-circular-progressbar/dist/styles.css';

// Function to generate vibration data between 10 and 30 dB (Normal levels)
const generateVibrationData = () => {
  return Math.floor(Math.random() * 21) + 10; // Vibration levels between 10 and 30 dB
};

const StructuralMonitoring = () => {
  const [vibration, setVibration] = useState(generateVibrationData());

  useEffect(() => {
    const interval = setInterval(() => {
      setVibration(generateVibrationData());
    }, 5000); // Update vibration data every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const vibrationStatus = 'சாதாரணம்'; // Normal in Tamil
  const vibrationColor = '#6ee7b7'; // Lighter green
  const Icon = FaCheckCircle; // Check icon for normal status

  return (
    <div className="flex flex-col p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold uppercase tracking-widest mb-4 text-white">அணுக்கம்பனகள் கண்காணிப்பு</h2> {/* Vibration Monitoring in Tamil */}

      <div className="mb-4" style={{ width: '120px', height: '120px', margin: '0 auto' }}>
        <CircularProgressbar
          value={vibration}
          text={`${vibration} dB`}
          styles={buildStyles({
            pathColor: vibrationColor,
            textColor: vibrationColor,
            trailColor: '#ffffff',
            textSize: '16px',
          })}
        />
      </div>

      <div className="flex justify-center items-center mt-2">
        <Icon size={30} color={vibrationColor} />
        <p className="text-md ml-2 text-white">{vibrationStatus}</p>
      </div>
    </div>
  );
};

const MonitoringExplanation = () => {
  return (
    <div className="flex flex-col p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold uppercase tracking-widest mb-4 text-white">எது உருவக கண்காணிப்பு?</h2> {/* What is Structural Monitoring? in Tamil */}
      <p className="text-white text-sm">
        உருவக கண்காணிப்பு என்பது கட்டிடம் அல்லது அடிப்படையினரின் நிலையை தொடர்ச்சியாக கண்காணிக்கும் செயல்முறை ஆகும், இது அதன் பாதுகாப்பும் நிலைத்தன்மையும் உறுதி செய்யும். அதில் கம்பனிகள், மாற்றங்கள் மற்றும் பிற அளவுகோல்களை அளவிடுதல் அடங்கும், இது முக்கியமான समस्यைகளை முன்கூட்டியே கண்டறிய உதவுகிறது. முறைமையான கண்காணிப்பு, கட்டிடத்தின் முழுமை மற்றும் எதிர்பாராத தோல்விகளைத் தடுப்பதில் உதவுகிறது.
      </p>
    </div>
  );
};

const StructuralVibrationMonitoringTa = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StructuralMonitoring />
          <MonitoringExplanation />
        </div>
      </div>
    </div>
  );
};

export default StructuralVibrationMonitoringTa;
