import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-4">
      <h1 className="text-3xl font-bold">Heritage Preservation Dashboard</h1>
      <div className="flex items-center">
        <p className="mr-4">Femi John</p>
        <img src="/profile.png" alt="profile" className="w-10 h-10 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
