import React, { useContext } from 'react';
import { CityContext } from './Country';
import '../../styles/Europe.css';
import CityVideo from './CityVideo';

const City = ({ cityData }) => {

    const city = useContext(CityContext);

    function goBack() {
        city.setShowSpecific(false);
    }

  return (
    <div className='city-class'>
        <button className='back-class' onClick={goBack}><i className="bi bi-arrow-left-circle-fill"></i></button>
        <h1>{cityData.name}</h1>
        <div className='videos-block'>
            {(cityData.videos.length > 0) ? 
              cityData.videos.map((data, index) => 
                <CityVideo videoData={{link: data, name: cityData.name}} key={index} />
              )
              : 
              <p>No Video Content :	&#40;</p>
            }
        </div>
    </div>
  )
}

export default City;