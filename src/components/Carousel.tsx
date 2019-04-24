import React, { FunctionComponent } from 'react';
import ImageSlide from './imageSlide';

const Carousel: FunctionComponent<{ setLogin: (bool:boolean) => any, currentImage: number }> = ({setLogin, currentImage}) => {
  const imgUrls = ['https://i.imgur.com/ZKMHq7T.jpg', 'https://i.imgur.com/NnBT4ra.jpg', 'https://i.imgur.com/1TxCV7l.jpg']

  return (
    <div className='carousel'>
      <ImageSlide url={imgUrls[currentImage]} currentImage={currentImage} setLogin={setLogin}/>
    </div>
  );
}

export default Carousel;
