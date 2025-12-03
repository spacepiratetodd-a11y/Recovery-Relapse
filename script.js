//created script.js to call from affirmations.js, this was complicated and took a while to figure out how to import/export
import { affirmations } from './affirmations.js';

function getRandomItem(list) {
  //borrowed the Math.floor element to multiply a random number by the length of the list to get a random item from the corresponding index
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
//Toast function
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 10000); // disappears after 10s
}

//Event listeners for your image map areas
document.querySelectorAll("area").forEach(area => {
  area.addEventListener("click", (event) => {
    event.preventDefault(); // stops the link jump I was having a problem with
    const feeling = area.dataset.feeling;
    const list = affirmations[feeling];

    if (list) {
      const affirmation = getRandomItem(list);
      showToast(affirmation); // <-- call the toast here
    }
  });
});
