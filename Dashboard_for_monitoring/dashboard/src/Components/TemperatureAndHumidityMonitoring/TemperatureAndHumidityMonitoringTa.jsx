import React, { useState, useEffect } from 'react';

const TemperatureAndHumidityMonitoringTa = () => {
  const [outsideTemp, setOutsideTemp] = useState(35); // ஆரம்ப வெப்பநிலை செல்சியஸில்
  const [insideTemp, setInsideTemp] = useState(28);
  const [outsideHumidity, setOutsideHumidity] = useState(40); // ஆரம்ப ஈரப்பதம் சதவீதத்தில்
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
        setAlert('எச்சரிக்கை: தீவிர நிலைமைகள் கண்டறியப்பட்டுள்ளன. கட்டமைப்பு மூலப்பொருளை கண்காணிக்கவும்.');
      } else {
        setAlert('');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
      <h2 className="mb-6 text-xl font-semibold text-white uppercase tracking-wide">வெப்பநிலை மற்றும் ஈரப்பதம் கண்காணிப்பு</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* வெளிப்புற வெப்பநிலை அட்டை */}
        <div className="p-6 bg-blue-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">வெளிப்புற வெப்பநிலை</h3>
          <p className="text-4xl font-bold mt-2">{outsideTemp}°C</p>
        </div>

        {/* உள்ளக வெப்பநிலை அட்டை */}
        <div className="p-6 bg-green-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">உள்ளக வெப்பநிலை</h3>
          <p className="text-4xl font-bold mt-2">{insideTemp}°C</p>
        </div>

        {/* வெளிப்புற ஈரப்பதம் அட்டை */}
        <div className="p-6 bg-blue-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">வெளிப்புற <br /> ஈரப்பதம்</h3>
          <p className="text-4xl font-bold mt-2">{outsideHumidity}%</p>
        </div>

        {/* உள்ளக ஈரப்பதம் அட்டை */}
        <div className="p-6 bg-green-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">உள்ளக <br /> ஈரப்பதம்</h3>
          <p className="text-4xl font-bold mt-2">{insideHumidity}%</p>
        </div>
      </div>

      {alert && (
        <div className="p-4 mt-6 text-red-800 bg-red-200 rounded-lg">
          <strong>{alert}</strong>
          <p>கிரானைட் தீவிர நிலைமைகளை தாங்கும், ஆனால் கண்காணிப்பு முக்கியம்.</p>
        </div>
      )}
    </div>
  );
};

export default TemperatureAndHumidityMonitoringTa;
