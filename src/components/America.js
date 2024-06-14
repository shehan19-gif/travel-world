import React from 'react';
import Continents from './Continents';

import flags from './collection/AmericanFlags';

const America = () => {
  return (
    <>
        <Continents flags={flags} region="America (North & South)" />
    </>
  )
}

export default America;