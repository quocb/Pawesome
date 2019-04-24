import React, {FunctionComponent, useState } from 'react';
import './../css/App.css';
import Carousel from './Carousel';
import Header from './Header';
import Feed from './Feed';
import ShelterHome from './Feed';

const App: FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {

  const [currentImage, setImage] = useState(initial);
  const [loggedIn, setLogin] = useState(false);
  const [isShelter, setIsShelter] = useState(true);

  const headerProps = { setImage, loggedIn, setLogin, isShelter };
  const carouselProps = { currentImage, setLogin, setIsShelter };

  return (
    <div className="App">
      <Header {...headerProps} />

      { (!loggedIn) ?
        <Carousel {...carouselProps} />
      :
        (isShelter) ?
          <ShelterHome />
        :
          <Feed />

      }
    </div>
  );
}

export default App;
