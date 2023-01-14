import React, { useState } from 'react';
import './Main.css';

import Header from '../components/Header/Header.js';
import Heads from '../components/Heads.js';
import Middle from '../components/Middle.js';
import Bottom from '../components/Bottom.js';
import Select from '../components/Select/Select.js';
import Phrase from '../components/Phrase/Phrase.js';

import background from '../../public/crazy-bg.jpeg';

export default function Main() {
  const [head, setHead] = useState('dog');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('white');
  const [phraseInput, setPhraseInput] = useState('');
  const [phraseOutput, setPhraseOutput] = useState('');
  const [headCount, setHeadCount] = useState('');
  const [middleCount, setMiddleCount] = useState('');
  const [bottomCount, setBottomCount] = useState('');

  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      <div className="preview">
        <Header />
        <Main {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
        <Heads {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
        <Middle {...{ middle, setMiddle }} />
        <Bottom {...{ bottom, setBottom }} />
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
    </main>
  );
}
