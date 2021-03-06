import React from 'react';
import './../css/Forms.css';
import ShelterForm from './ShelterForm';
import VolunteerForm from './VolunteerForm';
import LoginForm from './LoginForm';
import {useInput} from './../hooks/useInput';

const ImageSlide = ({ url, currentImage, setLogin, setUser, setIsShelter }) => {

  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
  const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');

  const loginFormProps = { email, bindEmail, resetEmail, password, bindPassword, resetPassword, setLogin, setUser, setIsShelter };


  const showForm = [];
  switch (currentImage) {
    case 0:
      showForm.push(<VolunteerForm key='VolunteerForm' />);
      break;
    case 1:
      showForm.push(<ShelterForm key='ShelterForm' />);
      break;
    case 2:
      showForm.push(<LoginForm key='LoginForm' {...loginFormProps} />);
      break;
    default:
      break;
  }

  return (
    <div className="image-slide" style={styles}>
      { showForm }
    </div>
  );
}

export default ImageSlide;
