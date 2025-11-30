import { affirmations } from './affirmations.js';

function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

document.querySelectorAll("area").forEach(area => {
  area.addEventListener("click", () => {
    const feeling = area.dataset.feeling; // "sad"
    const list = affirmations[feeling];

    if (list) {
      const affirmation = getRandomItem(list);
      document.getElementById("result").textContent = affirmation;
    }
  });
});
