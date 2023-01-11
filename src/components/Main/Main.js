import React from 'react';
import './Main.css';
import background from '../Main/crazy-bg.jpeg';

export default function Main() {
  return <main className="background" style={{ backgroundImage: `url(${background})` }}></main>;
}
