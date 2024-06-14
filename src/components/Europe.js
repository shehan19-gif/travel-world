import React from 'react';
import Continents from './Continents';

import flags from './collection/EuropeFlags.js';

const Europe = () => {
  return (
    <>
        <Continents flags={flags} region="Europe" />
    </>
  )
}

export default Europe;