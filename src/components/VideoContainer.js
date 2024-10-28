import { useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import Skimmer from './Skimmer';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const url = YOUTUBE_API_URL;
      const response = await fetch(url);
      const data = await response.json();
      setVideos(data.items || []);
    };

    fetchVideos();
  }, []);

  return ( videos.length === 0 ? <Skimmer/> :
    <div className='flex flex-wrap mt-6 justify-center w-full h-screen overflow-y-scroll'>
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
