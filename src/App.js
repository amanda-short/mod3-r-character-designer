import React from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import Main from './preview/Main.js';
import Heads from './components/Heads.js';
import Select from './components/Select/Select.js';
import Phrase from './components/Phrase/Phrase.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Heads />
      <Select />
      <Phrase />
    </div>
  );
}

export default App;
