import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import LanguageSelectionPage from './Components/Home/LanguageSelection';
import Dashboard from './Components/Dashboard'; // Import the Dashboard component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for Language Selection Page */}
        <Route path="/language-selection" element={<LanguageSelectionPage />} />

        {/* Route for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
};

export default App;
