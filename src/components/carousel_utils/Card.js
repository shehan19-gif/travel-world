import '../../styles/Carousel.css';
import React from 'react';

const Card = ({ data }) => {
    return (
    <div className='caros-card'>
        <img src={data.image} alt={data.id} />
        <h2 className='anchor-text'>{data.text? data.text : ""}</h2>
    </div>
  )
}

export default Card;