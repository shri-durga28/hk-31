import React from 'react';
import { FaHome, FaTasks, FaUsers, FaCalendarAlt, FaChartPie } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed">
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Admin Logo</h1>
      </div>
      <nav className="mt-6">
        <ul className="space-y-4">
          <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaHome className="inline-block mr-3" /> Dashboard
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaTasks className="inline-block mr-3" /> Task
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaUsers className="inline-block mr-3" /> User
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaCalendarAlt className="inline-block mr-3" /> Calendar
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaChartPie className="inline-block mr-3" /> Reports
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
