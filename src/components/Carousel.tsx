import React, { FunctionComponent } from 'react';
import ImageSlide from './imageSlide';

const Carousel: FunctionComponent<{ setIsShelter: (bool:boolean) => any, setUser: (user:{}) => any, setLogin: (bool:boolean) => any, currentImage: number }> = (props) => {
  const imgUrls = ['https://i.imgur.com/ZKMHq7T.jpg', 'https://i.imgur.com/NnBT4ra.jpg', 'https://i.imgur.com/1TxCV7l.jpg']

  return (
    <div className='carousel'>
      <ImageSlide url={imgUrls[props.currentImage]} {...props}/>
    </div>
  );
}

export default Carousel;
