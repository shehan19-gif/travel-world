import React, { createContext, /* useContext, */ useState } from 'react';
import '../styles/Europe.css';
import Country from './country_utils/Country';

// import { ModalContext } from './Modal';

const CountryContext = createContext();

const Continents = ({ flags, region }) => {
  // const modal = useContext(ModalContext);

  const [show, setShow] = useState(false);
  const [countryData, setCountryData] = useState({data: undefined});

  function chnageDisplay(e) {
    flags.forEach((data) => {
      if(data.code === e.target.id) {
        setCountryData({data: data});
        setShow(true);
      }
    });
  }

  return (
    <div className='europe' id='europe-destinations'>
        <h2>{region ? region : "Countries List"}</h2>
        <div className='europe-flags'>
            {flags.map((flag, index) => 
            <div className='country-name-with-flag'>
              <img src={`https://flagsapi.com/${flag.code}/flat/64.png`} id={flag.code} onClick = {(e) => chnageDisplay(e)} key={index} alt={flag.country} />
              <p>{flag.country}</p>
            </div>
            )}
        </div>
        {show && 
          <CountryContext.Provider value={{setShow}}>
            <Country data={countryData.data} />
          </CountryContext.Provider>
        }
    </div>
  )
}

export default Continents;
export {CountryContext};