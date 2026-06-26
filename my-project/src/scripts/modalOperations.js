import * as noteOperations from "./noteOperations.js";
import { noteContainer } from "./main.js";

export const openModal = () => {
  modalOverlay.classList.remove("hidden");
};

export const cancelModal = () => {
  modalOverlay.classList.add("hidden");
  noteTitleInput.value = "";
  noteContentInput.value = "";
};

export const confirmModal = () => {
  const title = noteTitleInput.value.trim();
  const content = noteContentInput.value.trim();

  if (!title && !content) return;
  const card = noteOperations.addNote(title, content, noteContainer);

  modalOverlay.classList.add("hidden");
  noteTitleInput.value = "";
  noteContentInput.value = "";

  return card;
};
