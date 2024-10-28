import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentSection from './CommentSection';
import RelatedVideos from './RelatedVideos';
import { YOUTUBE_VIDEO_DETAILS_API } from '../utils/constants';
import LiveChat from './LiveChat';
import { timePassed } from '../utils/helper';
import { useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants';

const Watch = () => {
    const [searchParams] = useSearchParams();
    const [descBoxToggle, setDescBoxToggle] = useState(false);
    const vidId = searchParams.get('v');
    const dispatch = useDispatch();
    const [videoDetail, setVideoDetail] = useState({});
    const [relatedVideos, setRelatedVideos] = useState([]);
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    const handleDescriptionToggle = () => {
        setDescBoxToggle(!descBoxToggle);
    }

    useEffect(() => {
        const getVideoDetails = async () => {
            const data = await fetch(YOUTUBE_VIDEO_DETAILS_API + vidId);
            const json = await data.json();
            // console.log("this is video detatil : " , json.items[0]);
            setVideoDetail(json?.items[0]);
        }
    
        dispatch(closeMenu());
        getVideoDetails();
    }, [dispatch, vidId]);
    
    useEffect(() => {
        const getRelatedVideos = async () => {
            if (videoDetail?.snippet?.tags?.length) { // Check if tags exist
                const response = await fetch(YOUTUBE_SEARCH_RESULTS_API + encodeURIComponent(videoDetail.snippet.tags[0]+videoDetail.snippet.tags[videoDetail.snippet.tags.length-1]));
                const json = await response.json();
                // console.log(json);
                setRelatedVideos(json?.items || []);
            }
        }
        getRelatedVideos(); // Call related videos once videoDetail is updated
    }, [videoDetail]);
    

    return (
        <div className={`${isMenuOpen ? 'w-10/12' : 'w-full'} flex`}>
            <div className='w-2/3 p-4 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 20px)' }}>
                <iframe 
                    className='w-full'
                    title={vidId} 
                    src={`https://www.youtube.com/embed/${vidId}`} 
                    allowFullScreen 
                    height="500px" 
                />
                <div>
                    <h1 className='font-bold text-xl mt-5'>{videoDetail?.snippet?.title}</h1>
                    <span className='mt-5'>{videoDetail?.snippet?.channelTitle}</span>
                    <div className='bg-slate-400 rounded-md p-3 m-3'>
                        <span className='font-bold'>
                            {Math.ceil(videoDetail?.statistics?.viewCount / 1000) + "K views " + timePassed(videoDetail?.snippet?.publishedAt)} 
                        </span>
                        {descBoxToggle && <div>
                            {videoDetail?.snippet?.tags.map((tag, index) => (
                                <span key={index} className='font-bold text-blue-700'>{" #" + tag}</span>
                            ))} 
                        </div>}
                        {descBoxToggle && <div className='mt-4'>
                            {videoDetail?.snippet?.description}
                        </div>}
                        <br />
                        <button className='text-blue-700' onClick={handleDescriptionToggle}>
                            {descBoxToggle ? "Less" : "More..."}
                        </button>
                    </div>
                </div>
                <CommentSection vidId={vidId} />
            </div>
            <div className='w-1/3 p-2 mt-2 mr-2 sticky top-0' style={{ height: 'calc(100vh - 20px)', overflowY: 'auto' }}>
                <LiveChat />
                <div className='my-5'>
                    <h1>Related Videos : </h1>
                    {
                        relatedVideos.map((relatedVideo) => {
                            if (relatedVideo.id === vidId) return null;
                            return <RelatedVideos key={relatedVideo?.id+ Math.random()*Math.random()} content={relatedVideo} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Watch;
