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

  const vibrationStatus = 'సాధారణం'; // Normal in Telugu
  const vibrationColor = '#6ee7b7'; // Lighter green
  const Icon = FaCheckCircle; // Check icon for normal status

  return (
    <div className="flex flex-col p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold uppercase tracking-widest mb-4 text-white">కంపనల పర్యవేక్షణ</h2> {/* Vibration Monitoring in Telugu */}

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
      <h2 className="text-lg font-semibold uppercase tracking-widest mb-4 text-white">సంయుక్త పర్యవేక్షణ ఏమిటి?</h2> {/* What is Structural Monitoring? in Telugu */}
      <p className="text-white text-sm">
        సంయుక్త పర్యవేక్షణ అంటే ఒక భవనం లేదా మౌలిక సదుపాయాల పరిస్థితిని నిరంతరం పర్యవేక్షించే ప్రక్రియ, ఇది భద్రత మరియు స్థిరత్వాన్ని నిర్ధారిస్తుంది. ఇది కంపనల్ని, స్థానాంతరాలను మరియు ఇతర ప్రమాణాలను కొలుస్తుంది, ఇది మునుపే ప్రధాన సమస్యలను కనుగొనేందుకు సహాయపడుతుంది. నియమిత పర్యవేక్షణ నిర్మాణం యొక్క స్థిరత్వాన్ని కాపాడడంలో మరియు ఊహించని విఫలములను నివారించడంలో సహాయపడుతుంది.
      </p>
    </div>
  );
};

const StructuralVibrationMonitoringTe = () => {
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

export default StructuralVibrationMonitoringTe;
