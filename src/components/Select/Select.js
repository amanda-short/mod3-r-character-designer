import React from 'react';
import './Select.css';


export default function Select({ head, setHead, middle, setMiddle, bottom, setBottom }) {
  const headHandle = (e) => {
    setHead(e.target.value);
    setHead((currentState) => [...currentState, e.target.value]);
  };

  const middleHandle = (e) => {
    setMiddle(e.target.value);
  };

  const bottomHandle = (e) => {
    setBottom(e.target.value);
  };

  return (
    <div className="select">
      <h1>Pick a head</h1>
      <select value={head} onChange={headHandle}>
        <option value="dog">Dog</option>
        <option value="duck">Duck</option>
        <option value="horse">Horse</option>
        <option value="bird">Bird</option>
      </select>
      <h1>Pick a top</h1>
      <select value={middle} onChange={middleHandle}>
        <option value="blue">Blue Shirt</option>
        <option value="dress">Dress</option>
        <option value="pink">Pink Shirt</option>
        <option value="red">Red Shirt</option>
      </select>
      <h1>Pick a bottom</h1>
      <select value={bottom} onChange={bottomHandle}>
        <option value="jeans">Jeans</option>
        <option value="pants">Dress Pants</option>
        <option value="leg">Large Leg</option>
        <option value="bellBottoms">White Bell Bottoms</option>
      </select>
    </div>
  );
}