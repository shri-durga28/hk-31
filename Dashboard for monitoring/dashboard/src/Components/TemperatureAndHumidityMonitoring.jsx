import React, { useState, useEffect } from 'react';

const TemperatureAndHumidityMonitoring = () => {
  const [outsideTemp, setOutsideTemp] = useState(35); // Initial temperature in Celsius
  const [insideTemp, setInsideTemp] = useState(28);
  const [outsideHumidity, setOutsideHumidity] = useState(40); // Initial humidity in percentage
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
        setAlert('Warning: Extreme conditions detected. Monitor structural integrity.');
      } else {
        setAlert('');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-5 bg-gray-100">
      <h2 className="mb-4 text-xl uppercase tracking-[0.4rem] font-medium">Temperature and Humidity Monitoring</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Outside Temperature Card */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg uppercase tracking-widest font-medium">Outside Temperature</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">{outsideTemp}°C</p>
        </div>

        {/* Inside Temperature Card */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg uppercase tracking-widest font-medium">Inside Temperature</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">{insideTemp}°C</p>
        </div>

        {/* Outside Humidity Card */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg uppercase tracking-widest font-medium">Outside <br></br> Humidity</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">{outsideHumidity}%</p>
        </div>

        {/* Inside Humidity Card */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg uppercase tracking-widest font-medium">Inside <br></br> Humidity</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">{insideHumidity}%</p>
        </div>
      </div>

      {alert && (
        <div className="p-4 mt-6 text-red-800 bg-red-200 rounded-lg">
          <strong>{alert}</strong>
          <p>Granite can withstand extreme conditions, but monitoring is crucial.</p>
        </div>
      )}
    </div>
  );
};

export default TemperatureAndHumidityMonitoring;
