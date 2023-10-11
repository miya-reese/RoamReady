import React from 'react';

function MapUI() {

  return (
      <div class='container'>
        <h1>Map</h1>
        <iframe
          title="mapframe"
          width="600"
          height="450"
          style={{border:0}}
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer"
          src="https://www.google.com/maps/embed/v1/search?key=AIzaSyA4_2h0hK9s5wKgRCLE89uo2iLVUEdoeOA&q=Space+Needle,Seattle+WA">
        </iframe>
      </div>
  );
}

export default MapUI;

