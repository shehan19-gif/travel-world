import React from 'react';
import Continents from './Continents';

import flags from './collection/AfricanFlags.js';

const Africa = () => {
  return (
    <>
        <Continents flags={flags} region="Africa" />
    </>
  )
}

export default Africa;