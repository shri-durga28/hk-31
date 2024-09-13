import React, { useState, useEffect } from 'react';

const TemperatureAndHumidityMonitoringKn = () => {
  const [outsideTemp, setOutsideTemp] = useState(35); // ಪ್ರಾರಂಭಿಕ ತಾಪಮಾನ ಸೆಲ್ಸಿಯಸ್‌ನಲ್ಲಿ
  const [insideTemp, setInsideTemp] = useState(28);
  const [outsideHumidity, setOutsideHumidity] = useState(40); // ಪ್ರಾರಂಭಿಕ ತೇವಾಂಶ ಶೇಕಡಾ ಪ್ರಮಾಣದಲ್ಲಿ
  const [insideHumidity, setInsideHumidity] = useState(50);
  const [alert, setAlert] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const newOutsideTemp = (Math.random() * 10 + 25).toFixed(1);
      const newInsideTemp = (Math.random() * 5 + 25).toFixed(1);
      const newOutsideHumidity = (Math.random() * 20 + 50).toFixed(1);
      const newInsideHumidity = (Math.random() * 20 + 40).toFixed(1);

      setOutsideTemp(newOutsideTemp);
      setInsideTemp(newInsideTemp);
      setOutsideHumidity(newOutsideHumidity);
      setInsideHumidity(newInsideHumidity);

      if (newOutsideTemp > 50 || newInsideTemp > 50 || newOutsideHumidity > 80 || newInsideHumidity > 80) {
        setAlert('ಎಚ್ಚರಿಕೆ: ತೀವ್ರ ಪರಿಸ್ಥಿತಿಗಳು ಕಂಡುಬಂದಿವೆ. ರಚನಾ ಅಖಂಡತೆಯನ್ನು ಗಮನಿಸಿ.');
      } else {
        setAlert('');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
      <h2 className="mb-6 text-xl font-semibold text-white uppercase tracking-wide">ತಾಪಮಾನ ಮತ್ತು ತೇವಾಂಶ ಮೇಲ್ವಿಚಾರಣೆ</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* ಹೊರಗಿನ ತಾಪಮಾನ ಕಾರ್ಡ್ */}
        <div className="p-6 bg-blue-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">ಹೊರಗಿನ ತಾಪಮಾನ</h3>
          <p className="text-4xl font-bold mt-2">{outsideTemp}°C</p>
        </div>

        {/* ಒಳಗಿನ ತಾಪಮಾನ ಕಾರ್ಡ್ */}
        <div className="p-6 bg-green-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">ಒಳಗಿನ ತಾಪಮಾನ</h3>
          <p className="text-4xl font-bold mt-2">{insideTemp}°C</p>
        </div>

        {/* ಹೊರಗಿನ ತೇವಾಂಶ ಕಾರ್ಡ್ */}
        <div className="p-6 bg-blue-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">ಹೊರಗಿನ <br /> ತೇವಾಂಶ</h3>
          <p className="text-4xl font-bold mt-2">{outsideHumidity}%</p>
        </div>

        {/* ಒಳಗಿನ ತೇವಾಂಶ ಕಾರ್ಡ್ */}
        <div className="p-6 bg-green-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">ಒಳಗಿನ <br /> ತೇವಾಂಶ</h3>
          <p className="text-4xl font-bold mt-2">{insideHumidity}%</p>
        </div>
      </div>

      {alert && (
        <div className="p-4 mt-6 text-red-800 bg-red-200 rounded-lg">
          <strong>{alert}</strong>
          <p>ಗ್ರಾನೈಟ್ ತೀವ್ರ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ತಡೆದುಕೊಳ್ಳಲು ಸಾಧ್ಯ, ಆದರೆ ಮೇಲ್ವಿಚಾರಣೆ ಅತ್ಯಗತ್ಯ.</p>
        </div>
      )}
    </div>
  );
};

export default TemperatureAndHumidityMonitoringKn;
