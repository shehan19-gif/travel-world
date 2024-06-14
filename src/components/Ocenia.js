import React from 'react';
import Continents from './Continents';

import flags from './collection/OcenianFlags.js';

const Ocenia = () => {
  return (
    <>
        <Continents flags={flags} region="Ocenia" />
    </>
  )
}

export default Ocenia;