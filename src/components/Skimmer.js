import React from 'react';

const Skimmer = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className='w-80 m-4 p-4 bg-transparent animate-pulse'>
          <div className="w-full h-44 bg-gray-300 rounded-lg mb-4"></div>
          <div className="space-y-3">
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skimmer;
