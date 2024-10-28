import React, { useState } from 'react';
import { FaHome, FaVideo, FaMusic, FaGamepad, FaFilm, FaStar } from 'react-icons/fa';

const Sidebar = () => {
  const [showWatchLater, setShowWatchLater] = useState(false);

  return (
    <div className='z-50 border-l-2 p-5 h-screen shadow-lg bg-gray-50'>
      <ul className='mb-4'>
        <li className='flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>
          <FaHome className='mr-2 text-blue-600' /> Home
        </li>
        <li className='flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>
          <FaVideo className='mr-2 text-blue-600' /> Shorts
        </li>
        <li className='flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>
          <FaStar className='mr-2 text-blue-600' /> Subscriptions
        </li>
      </ul>
      <hr />

      <ul className='my-4'>
        <h3 className='font-bold mb-2 text-lg'>Your Channel</h3>
        <li className='flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>
          <FaMusic className='mr-2 text-blue-600' /> Music
        </li>
        <li className='flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>
          <FaGamepad className='mr-2 text-blue-600' /> Sports
        </li>
        <li className='flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>
          <FaGamepad className='mr-2 text-blue-600' /> Gaming
        </li>
        <li className='flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>
          <FaFilm className='mr-2 text-blue-600' /> Movies
        </li>
      </ul>
      <hr />

      <div>
        <h3 className='font-bold my-2 text-lg cursor-pointer' onClick={() => setShowWatchLater(!showWatchLater)}>
          {showWatchLater ? '▼' : '►'} Watch Later
        </h3>
        {showWatchLater && (
          <ul className='ml-4'>
            <li className='flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>
              <FaMusic className='mr-2 text-blue-600' /> Music
            </li>
            <li className='flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>
              <FaGamepad className='mr-2 text-blue-600' /> Sports
            </li>
            <li className='flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>
              <FaGamepad className='mr-2 text-blue-600' /> Gaming
            </li>
            <li className='flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>
              <FaFilm className='mr-2 text-blue-600' /> Movies
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
