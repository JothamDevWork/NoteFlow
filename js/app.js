import * as noteOperations from "./noteOperations.js";
const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

addNoteBtn.addEventListener("click", (event) => {
  event.preventDefault();

  noteOperations.addNote({
    noteTitle,
    noteContent,
    notesContainer,
  });
});

noteOperations.deleteNote(notesContainer);
noteOperations.editNote(notesContainer);
