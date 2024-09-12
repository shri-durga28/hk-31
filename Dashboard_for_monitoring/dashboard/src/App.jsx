import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import NotFoundPage from './Components/Home/NotFoundPage';
import Dashboard from './Components/Dashboard';
import LanguageSelectionPage from './Components/Home/LanguageSelection';

function App() {
  return (
    <>    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes here as needed */}
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
      </Routes>
    </Router>
    </>

  );
}

export default App;
