import React, { useContext } from 'react';
import { UpcomingContext } from '../Upcoming';

const UpcomingCountry = ({data}) => {

    const city = useContext(UpcomingContext);

    function closeUpcomingCity() {
        city.setView(false);
    }

  return (
    <div className='upcoming-country'>
        <button onClick={closeUpcomingCity}><i className="bi bi-arrow-left-circle-fill"></i></button>
        <div className='anchor-image'>
          <img src={data.image} alt={data.country} />
        </div>
        <h1>{data.country}</h1>
        <div className='content'><p>{data.details? data.details : ""}</p></div>
    </div>
  )
}

export default UpcomingCountry;