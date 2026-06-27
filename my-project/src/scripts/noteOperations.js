import * as Storage from "/src/scripts/localStorage.js";
import { noteCard } from "/src/scripts/createNoteCardOperation.js";

import * as MasonryLib from "./masonryLib";

let notes = Storage.getNotes();

export const addNote = (title, content, noteContainer) => {
  const note = {
    id: Date.now(),
    title,
    content,
  };

  notes.push(note);
  Storage.saveNotes(notes);
  const card = noteCard(note);
  noteContainer.appendChild(card);

  return card;
};

export function loadNotes(noteContainer) {
  notes.forEach((note) => {
    const card = noteCard(note);
    noteContainer.appendChild(card);
  });
}

export const deleteNote = (id, card) => {
  notes = notes.filter((note) => note.id !== id);
  Storage.saveNotes(notes);
  card.remove();
  MasonryLib.masonry.layout();
  /*masonry.layout();*/
};

export const editNote = (note, card) => {
  const titleEdit = card.querySelector(".note-title");
  const contentEdit = card.querySelector(".note-content");
  const editBtn = card.querySelector(".editBtn");

  titleEdit.contentEditable = true;
  contentEdit.contentEditable = true;
  titleEdit.focus();

  editBtn.textContent = "CONFIRM";
  editBtn.classList.add("confirmBtn");
  editBtn.classList.remove("editBtn");

  editBtn.addEventListener(
    "click",
    () => {
      note.title = titleEdit.textContent;
      note.content = contentEdit.textContent;

      titleEdit.contentEditable = false;
      contentEdit.contentEditable = false;
      editBtn.textContent = "EDIT";
      editBtn.classList.add("editBtn");
      editBtn.classList.remove("confirmBtn");
      const notes = Storage.getNotes().map((n) =>
        n.id === note.id ? note : n,
      );
      Storage.saveNotes(notes);
    },
    { once: true },
  );
};
