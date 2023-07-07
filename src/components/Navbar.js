// Navbar.js
import React from 'react';

const Navbar = ({ getUsersData }) => {
  return (
    <nav>
      <div className="brand">Your Brand Name</div>
      <button onClick={getUsersData}>Get Users</button>
    </nav>
  );
};

export default Navbar;
