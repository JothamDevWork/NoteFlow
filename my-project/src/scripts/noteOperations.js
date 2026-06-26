import * as Storage from "/src/scripts/localStorage.js";
import { noteCard } from "/src/scripts/createNoteCardOperation.js";

export const addNote = (title, content, noteContainer) => {
  const note = {
    id: Date.now(),
    title,
    content,
  };

  const notes = Storage.getNotes();
  notes.push(note);
  Storage.saveNotes(notes);

  const card = noteCard(note);
  noteContainer.appendChild(card);

  return card;
};

export function loadNotes(noteContainer) {
  const notes = Storage.getNotes();
  notes.forEach((note) => {
    const card = noteCard(note);
    noteContainer.appendChild(card);
  });
}
