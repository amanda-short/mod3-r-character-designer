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
    </div>
  );
}