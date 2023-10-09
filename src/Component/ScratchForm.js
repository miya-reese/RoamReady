import React from 'react'

function ScratchForm(props) 
{
    return (
      <div class="container">
        <form>
            <h1 class="text-center">New Trip From Scratch</h1>
            <label for="name">First Location</label>
            <input type="text" id="name" placeholder=""/>
            <label for="name">Second Location</label>
            <input type="text" id="name" placeholder=""/>
            <label for="name">First Date</label>
            <input type="text" id="name" placeholder=""/>
            <label for="name">Second Date</label>
            <input type="text" id="name" placeholder=""/>
            <label for="name"># of Travelers</label>
            <input type="text" id="name" placeholder=""/>
            <label for="choose">Budget</label>
            <select id="choose">
              <option disabled selected>Please select</option>
              <option value="option-1">$</option>
              <option value="option-2">$$</option>
              <option value="option-3">$$$</option>
              <option value="option-4">$$$$</option>
            </select>
            <label for="comments">Trip Notes</label>
            <textarea id="comments"></textarea>
            {/* <label>
              <input type="checkbox"/>
              Remember me
            </label> */}
            <input class="vertical-center" type="submit" value="Submit"/>
        </form>
      </div>
    );
}

export default ScratchForm;