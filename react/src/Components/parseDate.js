function parseDate(inputDate) 
{
    const dateParts = inputDate.split('-'); // Split the input into day, month, and year
    if (dateParts.length === 3) {

      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // Subtract 1 from the month because months in JavaScript are zero-indexed (0-11)
      const day = parseInt(dateParts[2], 10);
      
      // Create a Date object
      const parsedDate = new Date(year, month, day);
      
      // Check if the parsed date is valid
      if (isValidDate(parsedDate)) {
        return parsedDate;
      }
    }
    // Return null or any other value to indicate an invalid date
    return null;
}

function isValidDate(date) 
{
    return !isNaN(date.getTime()); // Check if the date is a valid Date object
}

export default parseDate;