import React from 'react';
import ShelterForm from './ShelterForm';
import VolunteerForm from './VolunteerForm';

const ImageSlide = ({ url, currentImage }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={styles}>
      {currentImage === 0 ?
        <VolunteerForm />
      :
        <ShelterForm />
      }
    </div>
  );
}

export default ImageSlide;
