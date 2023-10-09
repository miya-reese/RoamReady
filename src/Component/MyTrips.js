import React from 'react'

function MyTripsPage() {
    return (
      <triplist>
        <center>
          <h1 class="text-center">My Trips</h1>
        </center>
        <ul>
          <li>
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80"
              width={600}
              height={300}
              alt="Trip 1"
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80"
              width={600}
              height={300}
              alt="Trip 1"
            />
          </li>
          <li>
            <img
              src="https://i.natgeofe.com/n/f7facfef-285c-4171-b58a-3c4653d11872/2019-travel-photo-contest-epic-landscapes035.jpg"
              width={600}
              height={300}
              alt="Trip 1"
            />
          </li>
        </ul>
      </triplist>
    );
  }
  
  export default MyTripsPage;
  