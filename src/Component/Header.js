import React from 'react'

function Header()  
{
    return (
        <div class="flex-row">
            <div class="flex-small one-third text-left"><h1>Chillato</h1></div>
            <div class="flex-small one-third text-center"><h1>New Trip From Scratch</h1></div>
            <div class="flex-small one-third text-right"><h1>Explorato</h1></div>
	    <button>Home</button>
	    <button>Create</button>
	    <button>Profile</button>
	</div>
     );
}

export default Header;
