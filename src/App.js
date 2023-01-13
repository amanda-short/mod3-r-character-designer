import React from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import Character from './components/Character/Character.js';
import Select from './components/Select/Select.js';
import Phrase from './components/Phrase/Phrase.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Character />
      <Select />
      <Phrase />
    </div>
  );
}

export default App;
