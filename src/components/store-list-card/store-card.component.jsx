import React from 'react';
import './store-card.style.css';
// import Fade from 'react-reveal/Fade';

function StoreCard(props) {
  return (
    <div className='home-store-div'>
      <img src={props.posterImage} alt='poster' className='poster-image' />
      <h4>{props.name}</h4>
      <p>Rating: {props.rating}</p>
      <p>
        <span style={{ fontWeight: 'bold' }}>About:</span> {props.description}
      </p>
    </div>
  );
}

export default StoreCard;
