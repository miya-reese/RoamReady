import React from 'react';
import PropTypes from 'prop-types';

function MapUI({startLoc, endLoc, placeMode, place}) {
  const apiKey = process.env.REACT_APP_Google;
  let url;
  if(placeMode){
    url = "https://www.google.com/maps/embed/v1/place?key="+apiKey+"&q="+place;
  }
  else{
    url = "https://www.google.com/maps/embed/v1/directions?key="+apiKey+"&origin="+startLoc+"&destination="+endLoc+
    "&mode=transit";
  }
  return (
      <iframe
        title="mapframe"
        width="600"
        height="400"
        style={{border:0}}
        loading="lazy"
        allowfullscreen
        referrerPolicy="no-referrer-when-downgrade"
        src={url}>
      </iframe>
  );
}

MapUI.propTypes = {
  startLoc: PropTypes.string,
  endLoc: PropTypes.string,
  placeMode: PropTypes.bool,
  place: PropTypes.string
};

export default MapUI;

