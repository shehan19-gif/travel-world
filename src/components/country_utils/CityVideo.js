import React from 'react';
import '../../styles/Europe.css';

const CityVideo = ({videoData}) => {
  return (
    <iframe className='iframe-data' src={videoData.link} title={videoData.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}

export default CityVideo;