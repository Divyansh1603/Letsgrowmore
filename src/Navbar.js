import React from 'react';

const Navbar = ({ getUsersData }) => {
  return (
    <nav className="navbar">
      <div className="brand">Your Brand Name</div>
      <button onClick={getUsersData} className="btn">
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
