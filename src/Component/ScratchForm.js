import React from 'react'

function ScratchForm(props) 
{
    return (
      <form>
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="First Name"/>
          <label for="choose">Budget</label>
          <select id="choose">
            <option disabled selected>Please select</option>
            <option value="option-1">$</option>
            <option value="option-2">$$</option>
            <option value="option-3">$$$</option>
            <option value="option-4">$$$$</option>
          </select>
          <label for="comments">Additional Comments</label>
          <textarea id="comments"></textarea>
          <label>
            <input type="checkbox"/>
            Remember me
          </label>
          <input type="submit" value="Submit"/>
      </form>
    );
}

export default ScratchForm;