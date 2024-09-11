import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <FaBell className="text-xl text-gray-500" />
        <FaUserCircle className="text-2xl text-gray-500" />
        <span className="font-semibold">Femi John</span>
      </div>
    </div>
  );
};

export default Navbar;
