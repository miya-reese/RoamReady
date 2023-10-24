import React from 'react';

function MapUI({startLoc, endLoc, placeMode, place}) {
  const apiKey = "AIzaSyBe_yqP9GViK5G5veZ-Kr0mTLIl-dSmlQI";
  let url;
  if(placeMode){
    url = "https://www.google.com/maps/embed/v1/place?key="+apiKey+"&q="+place;
  }
  else{
    url = "https://www.google.com/maps/embed/v1/directions?key="+apiKey+"&origin="+startLoc+"&destination="+endLoc+
    "&mode=transit";
  }
  return (
      <div class='container'>
        <iframe
          title="mapframe"
          width="600"
          height="400"
          style={{border:0}}
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src={url}>
        </iframe>
      </div>
  );
}

export default MapUI;

