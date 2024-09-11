import React from 'react';

const Card = ({ title, value, bgColor, textColor }) => {
  return (
    <div className={`p-6 ${bgColor} rounded-lg shadow-md`}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className={`text-3xl font-bold ${textColor}`}>{value}</p>
    </div>
  );
};

export default Card;
