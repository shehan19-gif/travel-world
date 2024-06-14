import React, { createContext, useState } from 'react';
import '../styles/Upcoming.css';

import destinations from './upcoming/Upcoming_data';
import UpcomingCountry from './upcoming/UpcomingCountry';

const UpcomingContext = createContext();

const Upcoming = () => {

    const [view, setView] = useState(false);
    const [countryData, setCountryData] = useState(undefined);

    function moreCountryData(e) {
        setView(true);
        destinations.forEach((place) => {
            if(place.country === e.target.getAttribute('datacountry')) {
                setCountryData(place);
            }
        });
    }

  return (
    <div className='upcoming' id='upcoming-destinations'>
        <h2>Upcoming Travels</h2>
        <div className='destinations'>
            {destinations.map((data, index) => {
                return(
                    <div className='target' key={index}>
                        <img src={data.image} alt={data.country} />
                        <div className='content'>
                            <h3>{data.country}</h3>
                            <p>{data.description}</p>
                            <button className='more-data-btn' datacountry={data.country} onClick={(e) => moreCountryData(e)}>More Details</button>
                        </div>
                        {view && 
                            <UpcomingContext.Provider value={{setView}}>
                                <UpcomingCountry data={countryData} />
                            </UpcomingContext.Provider>
                        }
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Upcoming;
export { UpcomingContext };