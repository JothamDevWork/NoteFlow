import { noteContainer, masonry } from "./main.js";

const searchbar = document.getElementById("searchbar");

searchbar.addEventListener("input", () => {
  const query = searchbar.value.trim().toLowerCase();

  const cards = noteContainer.querySelectorAll(".note-card");

  cards.forEach((card) => {
    const title = card.querySelector(".note-title").textContent.toLowerCase();
    const content = card
      .querySelector(".note-content")
      .textContent.toLowerCase();

    if (title.includes(query) || content.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });

  masonry.layout();
});
