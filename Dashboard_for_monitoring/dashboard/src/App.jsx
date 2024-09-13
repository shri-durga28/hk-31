import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import LanguageSelectionPage from './Components/Home/LanguageSelection';
import Dashboard from './Components/Dashboard'; // Import the generic Dashboard component
import DashboardTa from './Components/Dashboard/DashboardTa'; // Import the Tamil Dashboard component
import DashboardTe from './Components/Dashboard/DashboardTe';
import DashboardMl from './Components/Dashboard/DashboardMl';
import DashboardMr from './Components/Dashboard/DashboardMr';
import DashboardBn from './Components/Dashboard/DashboardBn';
import DashboardKn from './Components/Dashboard/DashboardKn';
import DashboardGu from './Components/Dashboard/DashboardGu';
import DashboardHi from './Components/Dashboard/DashboardHi';
// Import other language-specific dashboards if needed

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for Language Selection Page */}
        <Route path="/language-selection" element={<LanguageSelectionPage />} />

        {/* Route for the Generic Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Route for Tamil Dashboard */}
        <Route path="/dashboard/ta" element={<DashboardTa />} />
        <Route path="/dashboard/te" element={<DashboardTe />} />
  
        <Route path="/dashboard/ml" element={<DashboardMl />} /> 
        <Route path="/dashboard/mr" element={<DashboardMr />} /> 
         <Route path="/dashboard/bn" element={<DashboardBn />} /> 
        <Route path="/dashboard/kn" element={<DashboardKn />} /> 
         <Route path="/dashboard/gu" element={<DashboardGu />} /> 
        <Route path="/dashboard/hi" element={<DashboardHi />} /> 

      </Routes>
    </Router>
  );
};

export default App;
