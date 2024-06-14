import '../styles/Carousel.css';
import React, { useEffect, useRef, useState } from 'react';

import images from './carousel_utils/Utils';
import Card from './carousel_utils/Card';

const Carousel = () => {
  const [counter, setCounter] = useState(0);
  const [carosImage, setCarosImage] = useState(images[counter].image);
  const [imgData, setImgData] = useState(images[counter]);
  const [changer, setChanger] = useState(undefined);

  const element = useRef(0);
  const elementChange = useRef(false);

  useEffect(() => {
    if(elementChange.current === true) {
      setCarosImage(images[element.current].image);
      setImgData(images[element.current]);
      elementChange.current = false;
    }

    const time = setTimeout(() => {
      if(element.current === images.length - 1) {
        element.current = -1;
      }
      element.current = element.current + 1;
      setCarosImage(images[element.current].image);
      setImgData(images[element.current]);
      // console.log(element.current);
    }, 5000);

    return () => clearTimeout(time);
  });

  function imageSelect(e) {
    setChanger(Number(e.target.id));
    element.current = Number(e.target.id);
    elementChange.current = true;
  }

  return (
    <div className='carousel'>
        <div className='crousel-container'>
            <div className='images-container'>
                {/* <img src={carosImage} className='caros-img' alt='Travel' /> */}
                <Card data={imgData} />
            </div>
            <div className='buttons-container' onClick={(e) => imageSelect(e)}>
              <a id="0">1</a>
              <a id="1">2</a>
              <a id="2">3</a>
              <a id="3">4</a>
              <a id="4">5</a>
            </div>
        </div>
    </div>
  )
}

export default Carousel;