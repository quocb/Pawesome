import React, {FunctionComponent, useState } from 'react';
import './../css/App.css';
import Carousel from './Carousel';
import Header from './Header';


const App: FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {

  const [currentImage, setImage] = useState(initial);

  return (
    <div className="App">
      <Header setImage={setImage} />
      <Carousel currentImage={currentImage} />
    </div>
  );
}

export default App;
