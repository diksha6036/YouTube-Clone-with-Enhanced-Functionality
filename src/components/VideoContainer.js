import React,{useEffect, useState} from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    useEffect(()=>{
      getVideos();
    },[]);

    const getVideos= async()=>{
const data=await fetch(YOUTUBE_VIDEO_API);
const json= await data.json();
setVideos(json.items);
    }

    const [videos,setVideos]=useState([]);
    // console.log(videos)
  return (
    <div className='flex flex-wrap'>
        {videos.map((videos,index)=>(<Link to={"/watch?v="+videos.id} key={videos.id}><VideoCard info={videos} /></Link>))}
     {/* <VideoCard info={videos[0]}/> */}
    </div>
  )
}

export default VideoContainer
