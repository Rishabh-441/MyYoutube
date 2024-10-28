import React from 'react';

const LiveMessage = ({ name, message }) => {
  return (
    <div className='my-2 p-2 bg-white rounded-lg shadow-sm flex items-start border border-gray-200'>
      {/* Profile Image */}
      <img
        className='h-8 w-8 rounded-full mr-2 border border-gray-300'
        src="https://imgs.search.brave.com/MfCMRjbwpgFuoONjuznH5NyMPYgEXwI4nagKtkUzPOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGJmM2NiMTFi/MjI3NDkxYzMzOWEu/cG5n"
        alt="profile"
      />
      {/* Message Content */}
      <div>
        {/* Name */}
        <div className='flex items-center mb-1'>
          <span className='font-semibold text-gray-800 text-base mr-1'>{name}</span>
        </div>
        {/* Message */}
        <p className='text-gray-700 bg-gray-100 p-1 rounded-md text-sm'>{message}</p>
      </div>
    </div>
  );
};

export default LiveMessage;
