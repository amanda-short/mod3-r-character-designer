import React from 'react';

import './Display.css';

export default function Display({
  head,
  middle,
  bottom,
  phraseOutput,
  headCount,
  middleCount,
  bottomCount,
}) {
  return (
    <div className={`display ${head}, ${middle}, ${bottom}  `}>
      <p>{[phraseOutput, headCount, middleCount, bottomCount]}</p>
    </div>
  );
}
