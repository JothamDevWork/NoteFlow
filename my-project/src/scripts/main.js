import Masonry from "masonry-layout";
import * as noteOperations from "/src/scripts/noteOperations.js";
import * as modalOperations from "/src/scripts/modalOperations.js";
import "/src/scripts/searchbar.js";

const addNoteBtn = document.getElementById("addNoteBtn");
export const noteContainer = document.getElementById("noteCon");
const modalOverlay = document.getElementById("modalOverlay");
const noteTitleInput = document.getElementById("noteTitleInput");
const noteContentInput = document.getElementById("noteContentInput");
const modalCancelBtn = document.getElementById("modalCancelBtn");
const modalConfirmBtn = document.getElementById("modalConfirmBtn");

noteOperations.loadNotes(noteContainer);

export const masonry = new Masonry(noteContainer, {
  itemSelector: ".note-card",
  columnWidth: ".note-card",
  gutter: 16,
});

modalConfirmBtn.addEventListener("click", () => {
  const card = modalOperations.confirmModal();
  if (card) {
    setTimeout(() => {
      masonry.appended(card);
      masonry.layout();
    }, 0);
  }
});

modalCancelBtn.addEventListener("click", () => {
  modalOperations.cancelModal();
});

addNoteBtn.addEventListener("click", () => {
  modalOperations.openModal();
});
