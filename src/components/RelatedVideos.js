import React from 'react';
import { Link } from 'react-router-dom';

const RelatedVideos = (content) => {
    const {
        channelTitle,
        description,
        publishTime,
        thumbnails,
        title,
    } = content?.content?.snippet;
    // console.log(content)
    const {videoId} = content?.content?.id

    // Shorten the description to a maximum of 50 characters
    const shortDescription = description.length > 50 ? description.substring(0, 50) + '...' : description;

    return (
        <Link to={`/watch?v=${videoId}`}>
          <div className="flex items-center px-3 py-3 w-full rounded overflow-hidden shadow-md border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 m-2">
              <img
                  className="w-40 object-contain rounded-lg" // Will fit without cropping
                  src={thumbnails?.high.url}
                  alt={title || channelTitle}
              />
              <div className="p-3 flex-grow">
                  <h2 className="font-semibold text-sm mb-1 line-clamp-2">{title || 'Video Title'}</h2>
                  <h3 className="text-gray-600 text-xs mb-1">{channelTitle}</h3>
                  <p className="text-gray-500 text-xs mb-1 line-clamp-2">{shortDescription}</p>
                  <p className="text-gray-400 text-xs">
                      {new Date(publishTime).toLocaleDateString()}
                  </p>
              </div>
          </div>
        </Link>
        
    );
};

export default RelatedVideos;
