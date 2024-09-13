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

  const vibrationStatus = 'ಸಾಧಾರಣ'; // Normal in Kannada
  const vibrationColor = '#6ee7b7'; // Lighter green
  const Icon = FaCheckCircle; // Check icon for normal status

  return (
    <div className="flex flex-col p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold uppercase tracking-widest mb-4 text-white">ಕಂಪನ ನಿಗಾ</h2> {/* Vibration Monitoring in Kannada */}

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
      <h2 className="text-lg font-semibold uppercase tracking-widest mb-4 text-white">ಬರೀ ನಿಗಾ ಏನು?</h2> {/* What is Structural Monitoring? in Kannada */}
      <p className="text-white text-sm">
        ಸಾರಿಗೆ ನಿಗಾ ಎಂದರೆ ಕಟ್ಟಡ ಅಥವಾ ಮೂಲಸಾಧನದ ಸ್ಥಿತಿಯನ್ನು ನಿರಂತರವಾಗಿ ಗಮನಿಸುವ ಕಾರ್ಯವಿದೆ, ಇದರಿಂದ ಸುರಕ್ಷತೆ ಮತ್ತು ಸ್ಥಿರತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ. ಇದು ಕಂಪನಗಳು, ಸ್ಥಳಾಂತರಗಳು ಮತ್ತು ಇತರ ಪರಿಮಾಣಗಳನ್ನು ಅಳೆಯುವುದು ಮತ್ತು ಬದಲಾಗದ ಸಮಸ್ಯೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುವುದಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ. ನಿಯಮಿತ ನಿಗಾ ಶ್ರೇಣಿಯ ಸ್ಥಿತಿಯನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಲು ಮತ್ತು ಅಪ್ರತ್ಯಾಶಿತ ವಿಫಲತೆಗಳನ್ನು ತಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
      </p>
    </div>
  );
};

const StructuralVibrationMonitoringKn = () => {
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

export default StructuralVibrationMonitoringKn;
