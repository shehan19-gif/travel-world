import React, { createContext, useContext, useState } from 'react';
import { FaCompass } from "react-icons/fa6";
import '../../styles/Europe.css';
import { CountryContext } from '../Continents';
import City from './City';

const CityContext  = createContext();

const Country = ({ data }) => {

    const countryContextData = useContext(CountryContext);
    const [showSpecific, setShowSpecific] = useState(false);
    const [selectCity, setSelectCity]  = useState(undefined);

    function closeDisplay() {
        countryContextData.setShow(false);
    }

    function settingShowSpecific(e) {
      setShowSpecific(true);
      data.cities.forEach((city) => {
        if(city.name === e.target.textContent) {
          setSelectCity(city);
        }
      });
    }

  return (
    <div className='country'>
        <div className='flag-and-data'>
          <h1 className='main-h1'><p className='icon'><FaCompass /></p> <p>{data.country}</p></h1>
          <img src={`https://flagsapi.com/${data.code}/shiny/64.png`} alt={data.country} className='flag-img' />
          {data.mainImg &&
            <div className='mainImg-container'>
              <img src={data.mainImg} alt={data.country} className='anchor-img' />
            </div>
          }
          {data.summary && <p className='summary'>{data.summary}</p>}
        </div>
        <ul>
          {(data.cities.length > 0) && data.cities.map((city, index) => <li key={index} onClick={(e) => settingShowSpecific(e)} >{city.name}</li>)}
        </ul>
        <button className='main-close-btn' onClick={closeDisplay}>X</button>
        {showSpecific && 
          <CityContext.Provider value={{setShowSpecific}}>
            <City cityData={selectCity} />
          </CityContext.Provider>
        }
    </div>
  )
}

export default Country;
export {CityContext};