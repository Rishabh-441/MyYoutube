import React from 'react';
import { Link } from 'react-router-dom';

const SearchItemBox = ({ item }) => {
  // Destructuring the properties from the item object
  const { snippet } = item;
  const { title, channelTitle, description, thumbnails } = snippet;
  const videoId = item.id.videoId; // Extracting the videoId from the item

  return (
    <Link to={`/watch?v=${videoId}`}>
      <div className="flex items-start p-4 bg-white rounded-lg mb-4 w-full px-36">
        <img
          className="w-80 h-52 rounded-lg mr-4" // Increased size here
          src={thumbnails?.medium?.url} // Added optional chaining
          alt={title}
        />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-lg text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600">{channelTitle}</p>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>
      <hr />
    </Link>
  );
};

export default SearchItemBox;
