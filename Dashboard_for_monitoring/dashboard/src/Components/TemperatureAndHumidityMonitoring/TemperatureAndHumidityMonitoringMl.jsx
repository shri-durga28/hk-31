import React, { useState, useEffect } from 'react';

const TemperatureAndHumidityMonitoringMl = () => {
  const [outsideTemp, setOutsideTemp] = useState(35); // ആരംഭ താപനില സെൽഷ്യസിൽ
  const [insideTemp, setInsideTemp] = useState(28);
  const [outsideHumidity, setOutsideHumidity] = useState(40); // ആരംഭം നിശ്ചിതമാണ് നൈർമ്മാണപരമായ വാതകം
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
        setAlert('മുന്നറിയിപ്പ്: അത്യന്തപായരായ സാഹചര്യങ്ങൾ കണ്ടെത്തി. ഘടനാ സമഗ്രത നിരീക്ഷിക്കുക.');
      } else {
        setAlert('');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
      <h2 className="mb-6 text-xl font-semibold text-white uppercase tracking-wide">താപനിലയും ഈർപ്പവും നിരീക്ഷിക്കൽ</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* പുറത്തെ താപനില കാർഡ് */}
        <div className="p-6 bg-blue-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">പുറത്തെ താപനില</h3>
          <p className="text-4xl font-bold mt-2">{outsideTemp}°C</p>
        </div>

        {/* അകത്തെ താപനില കാർഡ് */}
        <div className="p-6 bg-green-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">അകത്തെ താപനില</h3>
          <p className="text-4xl font-bold mt-2">{insideTemp}°C</p>
        </div>

        {/* പുറത്തെ ഈർപ്പം കാർഡ് */}
        <div className="p-6 bg-blue-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">പുറത്തെ <br /> ഈർപ്പം</h3>
          <p className="text-4xl font-bold mt-2">{outsideHumidity}%</p>
        </div>

        {/* അകത്തെ ഈർപ്പം കാർഡ് */}
        <div className="p-6 bg-green-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">അകത്തെ <br /> ഈർപ്പം</h3>
          <p className="text-4xl font-bold mt-2">{insideHumidity}%</p>
        </div>
      </div>

      {alert && (
        <div className="p-4 mt-6 text-red-800 bg-red-200 rounded-lg">
          <strong>{alert}</strong>
          <p>ഗ്രാനൈറ്റ് അത്യന്തപായരായ സാഹചര്യങ്ങളെ എതിര്‍ക്കാൻ കഴിയും, പക്ഷേ നിരീക്ഷണം നിർബന്ധമാണ്.</p>
        </div>
      )}
    </div>
  );
};

export default TemperatureAndHumidityMonitoringMl;
