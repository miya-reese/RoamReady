import React from 'react'

function NavBar()  
{
    return (
        <div class="flex-row">
            <div class="flex-small one-third text-left"><button class="muted-button">Home</button></div>
            <div class="flex-small one-third text-center"><button class="muted-button">+</button></div>
            <div class="flex-small one-third text-right"><button class="muted-button">Profile</button></div>
        </div>
     );
}

export default NavBar;
