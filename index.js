/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let splitTime = time.split(":"); 
  let parsedTime =  parseInt(splitTime[0])
  if (parsedTime < 12) {
       return "Good Morning";
  }
  if (parsedTime >= 12 && parsedTime < 17) {
       return "Good Afternoon";
  }
  if (parsedTime >= 17) {
       return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let greeting = document.getElementById('greeting');
  greeting.innerHTML = string;
}
