import React from 'react';

const VideoCard = ({ info }) => {
  // Check if info is defined and has the expected structure
  if (!info || !info.snippet || !info.statistics) {
    return null; // or display a placeholder or handle the case appropriately
  }
//    console.log(info)
  // Destructure properties from info
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-3 m-3 w-96 shadow-lg rounded-lg'>
      <img src={thumbnails?.medium?.url} alt="thumbnail" className='rounded-lg w-96'/>
      <ul>
        <li className='font-bold py-2 '>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;