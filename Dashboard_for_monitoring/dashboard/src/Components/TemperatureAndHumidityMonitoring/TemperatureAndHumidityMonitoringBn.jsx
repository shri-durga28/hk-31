import React, { useState, useEffect } from 'react';

const TemperatureAndHumidityMonitoringBn = () => {
  const [outsideTemp, setOutsideTemp] = useState(35); // প্রাথমিক তাপমাত্রা সেলসিয়াসে
  const [insideTemp, setInsideTemp] = useState(28);
  const [outsideHumidity, setOutsideHumidity] = useState(40); // প্রাথমিক আর্দ্রতা শতাংশে
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
        setAlert('সতর্কতা: চরম পরিস্থিতি সনাক্ত হয়েছে। কাঠামোর অখণ্ডতা পর্যবেক্ষণ করুন।');
      } else {
        setAlert('');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
      <h2 className="mb-6 text-xl font-semibold text-white uppercase tracking-wide">তাপমাত্রা এবং আর্দ্রতা পর্যবেক্ষণ</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* বাহিরের তাপমাত্রা কার্ড */}
        <div className="p-6 bg-blue-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">বাহিরের তাপমাত্রা</h3>
          <p className="text-4xl font-bold mt-2">{outsideTemp}°C</p>
        </div>

        {/* ঘরের তাপমাত্রা কার্ড */}
        <div className="p-6 bg-green-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">ঘরের তাপমাত্রা</h3>
          <p className="text-4xl font-bold mt-2">{insideTemp}°C</p>
        </div>

        {/* বাহিরের আর্দ্রতা কার্ড */}
        <div className="p-6 bg-blue-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">বাহিরের <br /> আর্দ্রতা</h3>
          <p className="text-4xl font-bold mt-2">{outsideHumidity}%</p>
        </div>

        {/* ঘরের আর্দ্রতা কার্ড */}
        <div className="p-6 bg-green-700 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium uppercase tracking-widest">ঘরের <br /> আর্দ্রতা</h3>
          <p className="text-4xl font-bold mt-2">{insideHumidity}%</p>
        </div>
      </div>

      {alert && (
        <div className="p-4 mt-6 text-red-800 bg-red-200 rounded-lg">
          <strong>{alert}</strong>
          <p>গ্রানাইট চরম পরিস্থিতি সহ্য করতে পারে, তবে পর্যবেক্ষণ করা গুরুত্বপূর্ণ।</p>
        </div>
      )}
    </div>
  );
};

export default TemperatureAndHumidityMonitoringBn;
