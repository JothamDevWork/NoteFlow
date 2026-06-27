import { initMasonry, masonry } from "./masonryLib";
import * as noteOperations from "./noteOperations.js";
import * as modalOperations from "./modalOperations.js";
import "/src/scripts/searchbar.js";
const addNoteBtn = document.getElementById("addNoteBtn");
export const noteContainer = document.getElementById("noteCon");
const modalOverlay = document.getElementById("modalOverlay");
const noteTitleInput = document.getElementById("noteTitleInput");
const noteContentInput = document.getElementById("noteContentInput");
const modalCancelBtn = document.getElementById("modalCancelBtn");
const modalConfirmBtn = document.getElementById("modalConfirmBtn");

noteOperations.loadNotes(noteContainer);
initMasonry();

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
