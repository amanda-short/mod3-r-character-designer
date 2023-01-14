import React from 'react';
import '../components/Heads.css';

export default function Head(props) {
  const classes = `${props.head}`;
  return (
    <div className={classes}>
      <img src={`${process.env.PUBLIC_URL}/head-${props.head}.png`} style={{ height: '155px' }} />
    </div>
  );
}
