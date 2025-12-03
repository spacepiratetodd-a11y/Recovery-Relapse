//created script.js to call from affirmations.js, this was complicated and took a while to figure out how to import/export
import { affirmations } from './affirmations.js';

function getRandomItem(list) {
  //borrowed the Math.floor element to multiply a random number by the length of the list to get a random item from the corresponding index
  const randomIndex = Math.floor(Math.random() * list.length);
  //returning a random item from the list in affirmations.js based on the clicked area
  return list[randomIndex];
}
//Toast function
function showToast(message) {//display the toast message
  const toast = document.getElementById("toast");//get the toast element from the HTML
  toast.textContent = message;//set the text content of the toast to the message passed in
  toast.className = "show";//add the show class to make it visible
  setTimeout(() => {//set a timeout to remove the show class after a certain time
    toast.className = toast.className.replace("show", "");//remove the show class to hide the toast
  }, 10000); //disappears after 10s
}

//Event listeners for your image map areas
document.querySelectorAll("area").forEach(area => {//select all area elements and loop through them
  area.addEventListener("click", (event) => {//add a click event listener to each area
    event.preventDefault(); // stops the link jump I was having a problem with and allows the toast to be called on by the data-feeling="" clicked on the feelingswheel.html page
    const feeling = area.dataset.feeling;//get the feeling from the data-feeling attribute of the clicked area
    const list = affirmations[feeling];//get the corresponding list of affirmations from the imported affirmations object

    if (list) {
      const affirmation = getRandomItem(list);//get a random affirmation from the list
      showToast(affirmation); //call the toast here
    }
  });
});
