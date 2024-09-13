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

  const vibrationStatus = 'സാധാരണ'; // Normal in Malayalam
  const vibrationColor = '#6ee7b7'; // Lighter green
  const Icon = FaCheckCircle; // Check icon for normal status

  return (
    <div className="flex flex-col p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold uppercase tracking-widest mb-4 text-white">കമ്പന നിരീക്ഷണം</h2> {/* Vibration Monitoring in Malayalam */}

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
      <h2 className="text-lg font-semibold uppercase tracking-widest mb-4 text-white">സ്റ്റ്രക്ചറൽ മോണിറ്ററിംഗ് എന്ത്?</h2> {/* What is Structural Monitoring? in Malayalam */}
      <p className="text-white text-sm">
        സ്റ്റ്രക്ചറൽ മോണിറ്ററിംഗ് ഒരു കെട്ടിടം അല്ലെങ്കിൽ അടിസ്ഥാന ഘടകത്തിന്റെ നില തുടർച്ചയായി നിരീക്ഷിക്കുന്ന പ്രക്രിയയാണ്, ഇത് സുരക്ഷയും സ്ഥിരതയും ഉറപ്പാക്കുന്നു. കംപനുകൾ, മാറ്റങ്ങൾ, മറ്റ് പാരാമീറ്ററുകൾ അളക്കുന്നത് ഉൾപ്പെടുന്നു, ഇതിലൂടെ ഗുരുതരമാകുന്ന മുൻകൂർ പ്രശ്നങ്ങൾ കണ്ടെത്താം. ക്രമീകൃത മോണിറ്ററിംഗ് ഘടനയുടെ സമഗ്രത നിലനിര്‍ത്തുകയും പ്രതീക്ഷിക്കപ്പെടാത്ത പരാജയങ്ങൾ തടയുകയും ചെയ്യുന്നു.
      </p>
    </div>
  );
};

const StructuralVibrationMonitoringMl = () => {
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

export default StructuralVibrationMonitoringMl;
