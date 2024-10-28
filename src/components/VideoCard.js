import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({info}) => {
    // console.log(info?.snippet);
    // console.log(info);
    const {channelTitle, thumbnails, title} = info?.snippet;
    const {statistics} = info;
    const { id } = info;
  return (
    <Link to={"watch?v="+id}>
        <div className='w-80 m-2 rounded-lg drop-shadow-sm'>
            <img className= "rounded-lg" src={thumbnails.medium.url} alt="video" />
            
            <ul className='p-3 mt-1 font-bold'>
                <h2 className=''>{title}</h2>
                <li className='text-sm text-gray-600 mt-1'>{channelTitle}</li>
                <li className='text-sm text-gray-600'>{Math.floor(statistics.viewCount/1000) > 999 ? Math.floor(statistics.viewCount/1000000)+ "M" : Math.floor(statistics.viewCount/1000) + "K"} views</li>
            </ul>
        </div>
    </Link>
    
  )
}

export default VideoCard
