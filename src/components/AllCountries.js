import React from 'react';

import africanFlagsList from './collection/AfricanFlags';
import americanFlagsList from './collection/AmericanFlags';
import asianFlagsList from './collection/AsianFlags';
import europeanFlagsList from './collection/EuropeFlags';
import ocenianFlagsList from './collection/OcenianFlags';
import Continents from './Continents';

const combinedCountriesList = africanFlagsList.concat(americanFlagsList, asianFlagsList, europeanFlagsList, ocenianFlagsList);

combinedCountriesList.sort(function(firstCountry, secondCountry) {
    let firstCountryToLower = firstCountry.country.toLowerCase();
    let secondCountryToLower = secondCountry.country.toLowerCase();
    
    if(firstCountryToLower < secondCountryToLower) {return -1;}
    if(firstCountryToLower > secondCountryToLower) {return 1;}
    return 0;
});

const AllCountries = () => {
  return (
    <>
        <Continents flags={combinedCountriesList} region="" />
    </>
  )
}

export default AllCountries;