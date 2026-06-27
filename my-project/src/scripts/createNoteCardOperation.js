import { editNote, deleteNote } from "/src/scripts/noteOperations.js";
export const noteCard = (note) => {
  const card = document.createElement("div");
  card.classList.add("note-card");
  card.dataset.id = note.id;

  card.innerHTML = ` 
  <h2 class="note-title">${note.title}</h2>
  <p class="note-content">${note.content}</p>
  <div class="note-actions">
  <button class="editBtn">EDIT</button>
  <button class="deleteBtn">DELETE</button>
  </div>
  `;

  card.querySelector(".deleteBtn").addEventListener("click", () => {
    deleteNote(note.id, card);
  });

  card.querySelector(".editBtn").addEventListener("click", () => {
    editNote(note, card);
  });

  return card;
};
