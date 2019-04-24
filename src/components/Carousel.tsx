import React, { useState, FunctionComponent } from 'react';
import ImageSlide from './imageSlide';

const Carousel: FunctionComponent<{ currentImage: number }> = ({currentImage}) => {
  const imgUrls = ['https://i.imgur.com/ZKMHq7T.jpg', 'https://i.imgur.com/NnBT4ra.jpg']

  return (
    <div className='carousel'>
      <ImageSlide url={imgUrls[currentImage]} currentImage={currentImage} />
    </div>
  );
}

export default Carousel;
