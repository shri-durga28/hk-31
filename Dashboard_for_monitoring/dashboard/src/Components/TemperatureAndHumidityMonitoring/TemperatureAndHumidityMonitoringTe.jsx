import React, { useState, useEffect } from 'react';

const TemperatureAndHumidityMonitoringTe = () => {
  const [outsideTemp, setOutsideTemp] = useState(35); // ప్రారంభ ఉష్ణోగ్రత సెల్సియస్‌లో
  const [insideTemp, setInsideTemp] = useState(28);
  const [outsideHumidity, setOutsideHumidity] = useState(40); // ప్రారంభ ఆర్ద్రత శాతంలో
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
        setAlert('హెచ్చరిక: తీవ్రమైన పరిస్థితులు గుర్తించబడ్డాయి. నిర్మాణ సమగ్రతను పర్యవేక్షించండి.');
      } else {
        setAlert('');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
      <h2 className="mb-6 text-xl font-semibold text-white uppercase tracking-wide">ఉష్ణోగ్రత మరియు ఆర్ద్రత పర్యవేక్షణ</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* బయట ఉష్ణోగ్రత కార్డ్ */}
        <div className="p-6 bg-blue-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">బయట ఉష్ణోగ్రత</h3>
          <p className="text-4xl font-bold mt-2">{outsideTemp}°C</p>
        </div>

        {/* లోపల ఉష్ణోగ్రత కార్డ్ */}
        <div className="p-6 bg-green-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">లోపల ఉష్ణోగ్రత</h3>
          <p className="text-4xl font-bold mt-2">{insideTemp}°C</p>
        </div>

        {/* బయట ఆర్ద్రత కార్డ్ */}
        <div className="p-6 bg-blue-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">బయట <br /> ఆర్ద్రత</h3>
          <p className="text-4xl font-bold mt-2">{outsideHumidity}%</p>
        </div>

        {/* లోపల ఆర్ద్రత కార్డ్ */}
        <div className="p-6 bg-green-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">లోపల <br /> ఆర్ద్రత</h3>
          <p className="text-4xl font-bold mt-2">{insideHumidity}%</p>
        </div>
      </div>

      {alert && (
        <div className="p-4 mt-6 text-red-800 bg-red-200 rounded-lg">
          <strong>{alert}</strong>
          <p>గ్రానైట్ తీవ్రమైన పరిస్థితులను తట్టుకోగలదు, కానీ పర్యవేక్షణ కీలకం.</p>
        </div>
      )}
    </div>
  );
};

export default TemperatureAndHumidityMonitoringTe;
