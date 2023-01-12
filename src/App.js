import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Character from './components/Character/Character.js';
import Select from './components/Select/Select.js';
import Phrase from './components/Phrase/Phrase.js';

function App() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [phraseInput, setPhraseInput] = useState('');
  const [phraseOutput, setPhraseOutput] = useState('');
  const [headCount, setHeadCount] = useState('');
  const [middleCount, setMiddleCount] = useState('');
  const [bottomCount, setBottomCount] = useState('');

  return (
    <div className="App">
      <Header />
      <Main {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
      <Character {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
      <Select {...{ head, middle, bottom }} />
      <Phrase
        {...{
          phraseInput,
          setPhraseInput,
          phraseOutput,
          setPhraseOutput,
          headCount,
          setHeadCount,
          middleCount,
          setMiddleCount,
          bottomCount,
          setBottomCount,
        }}
      />
    </div>
  );
}

export default App;
