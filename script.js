import { affirmations } from './affirmations.js';

function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
// 2. Toast function (put this near the top, after utilities)
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 10000); // disappears after 10s
}

// 3. Event listeners for your image map areas
document.querySelectorAll("area").forEach(area => {
  area.addEventListener("click", (event) => {
    event.preventDefault(); // stops the link jump
    const feeling = area.dataset.feeling;
    const list = affirmations[feeling];

    if (list) {
      const affirmation = getRandomItem(list);
      showToast(affirmation); // <-- call the toast here
    }
  });
});
