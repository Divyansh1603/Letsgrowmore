import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots color="#000000" height={80} width={80} />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
