import React, {FunctionComponent, useState } from 'react';
import './../css/App.css';
import Carousel from './Carousel';
import Header from './Header';
import Footer from './Footer';
import Feed from './Feed';
import ShelterHome from './ShelterHome';
import Amplify from '@aws-amplify/core';
import awsmobile from '../aws-exports';
import { BrowserRouter as Router } from "react-router-dom";

Amplify.configure(awsmobile);

const App: FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {

  const [currentImage, setImage] = useState(initial);
  const [loggedIn, setLogin] = useState(false);
  const [isShelter, setIsShelter] = useState(false);
  const [user, setUser] = useState();

  const headerProps = { setImage, loggedIn, setLogin, isShelter, user, setUser };
  const carouselProps = { currentImage, setLogin, setIsShelter, setUser };

  return (
    <Router>

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
      <Footer />
    </div>
    </Router>
  );
}

export default App;
