import React, {FunctionComponent, useState } from 'react';
import './../css/App.css';
import Carousel from './Carousel';
import Header from './Header';
import Feed from './Feed';
import Amplify from '@aws-amplify/core';
import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);

const App: FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {

  const [currentImage, setImage] = useState(initial);
  const [loggedIn, setLogin] = useState(false);

  return (
    <div className="App">
      <Header setImage={setImage} loggedIn={loggedIn} setLogin={setLogin} />

      { (!loggedIn) ?
        <Carousel currentImage={currentImage} setLogin={setLogin} />
      :
        <Feed />
      }
    </div>
  );
}

export default App;
