import React from 'react';

const Skimmer = () => {
  const items = [];
  for (let index = 0; index < 8; index++) {
    items.push(
      <div key={index} className="w-80 m-4 p-4 bg-transparent animate-pulse">
        <div className="w-full h-44 bg-gray-300 rounded-lg mb-4"></div>
        <div className="space-y-3">
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return <div className="flex flex-wrap justify-center">{items}</div>;
};

export default Skimmer;
