import React from 'react';

function MapUI() {
  return (
      <div class='container'>
        <iframe
          title="mapframe"
          width="600"
          height="400"
          style={{border: 0}}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJVXealLU_xkcRja_At0z9AGY&key=
          AIzaSyBe_wtXmNC3d5nEaUZGuORqjFH1oF50eeY">
        </iframe>
      </div>
  );
}

export default MapUI;

