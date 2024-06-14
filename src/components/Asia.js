import React from 'react';
import Continents from './Continents';

import flags from './collection/AsianFlags';

const Asia = () => {
  return (
    <>
        <Continents flags={flags} region="Asia" />
    </>
  )
}

export default Asia;