import React, { useState } from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import './App.css';
import Answers from '../src/components/answers/Answers';
import BirdInfo from '../src/components/bird-info/BirdInfo';
import CurrentQuestion from '../src/components/current-question/CurrentQuestion';
import Header from '../src/components/header/Header';
import birdsData from '../src/birds';

function App() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  // console.log(birdsData)

  return (
    <div className="app-container">
      <Header />
      <CurrentQuestion />
      <div className="answers-and-birdinfo-wrapper">
        <Answers categoryIndex={categoryIndex} />
        <BirdInfo />
      </div>
      <button type="button" className="btn btn-primary">
        Next
      </button>
    </div>
  );
}

export default App;
