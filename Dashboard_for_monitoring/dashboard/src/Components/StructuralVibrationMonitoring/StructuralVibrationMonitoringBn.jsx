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

  const vibrationStatus = 'সাধারণ'; // Normal in Bengali
  const vibrationColor = '#6ee7b7'; // Lighter green
  const Icon = FaCheckCircle; // Check icon for normal status

  return (
    <div className="flex flex-col p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold uppercase tracking-widest mb-4 text-white">কম্পন মনিটরিং</h2> {/* Vibration Monitoring in Bengali */}

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
      <h2 className="text-lg font-semibold uppercase tracking-widest mb-4 text-white">স্ট্রাকচারাল মনিটরিং কি?</h2> {/* What is Structural Monitoring? in Bengali */}
      <p className="text-white text-sm">
        স্ট্রাকচারাল মনিটরিং একটি ভবন বা অবকাঠামোর অবস্থা ধারাবাহিকভাবে পর্যবেক্ষণ করার প্রক্রিয়া যা এর নিরাপত্তা এবং স্থিতিশীলতা নিশ্চিত করে। এতে কম্পন, স্থানান্তর এবং অন্যান্য পরামিতি পরিমাপ করা হয় যাতে কোনও সম্ভাব্য সমস্যা আবিষ্কৃত হতে পারে যা গুরুতর হয়ে উঠতে পারে। নিয়মিত মনিটরিং কাঠামোর অখণ্ডতা বজায় রাখতে সহায়ক এবং অপ্রত্যাশিত ব্যর্থতা প্রতিরোধ করে।
      </p>
    </div>
  );
};

const StructuralVibrationMonitoringBn = () => {
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

export default StructuralVibrationMonitoringBn;
