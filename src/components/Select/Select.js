import React from 'react';
import './Select.css';

export default function Select({ head, setHead, middle, setMiddle, bottom, setBottom }) {
  const handleChange = (event) => {
    setHead(event.target.value);
    setHead((currentState) => [...currentState, event.target.value]);
  };

  return (
    <div className="select">
      <h1>Pick a head</h1>
      <select value={head} onChange={handleChange}>
        <option value="dog">Dog</option>
        <option value="duck">Duck</option>
        <option value="horse">Horse</option>
        <option value="bird">Bird</option>
      </select>
      <h1>Pick a top</h1>
      <select value={middle} onChange={handleChange}>
        <option value="blue">Blue Shirt</option>
        <option value="dress">Dress</option>
        <option value="pink">Pink Shirt</option>
        <option value="red">Red Shirt</option>
      </select>
      <h1>Pick a bottom</h1>
      <select value={bottom} onChange={handleChange}>
        <option value="jeans">Jeans</option>
        <option value="pants">Dress Pants</option>
        <option value="leg">Large Leg</option>
        <option value="bellBottoms">White Bell Bottoms</option>
      </select>
    </div>
  );
}