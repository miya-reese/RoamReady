import React from 'react'
import PropTypes from 'prop-types';

const imageStyle = {
  width: '280px',
  height: '280px',
  objectFit: 'cover', // Prevents the image from stretching
};

  function AboutCard(props) {
    return (
      <div style={{margin:5}}>
        <img src={props.srcImg} style={imageStyle} alt={props.name}></img>
        <div className='ABCard-div'>
          <h1 className='card-title'>{props.person.name}</h1>
          <h2 className='ABcard-date'>{props.person.description}</h2>
        </div>
      </div>
    );
  };

  AboutCard.propTypes = {
    name: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

export default AboutCard;
