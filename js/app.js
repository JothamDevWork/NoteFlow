import * as noteOperations from "./noteOperations.js";
import * as searchFilterOperations from "./searchFilterOperations.js";
import { getNotes } from "./localStorage.js";

const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

addNoteBtn.addEventListener("click", (event) => {
  event.preventDefault();

  noteOperations.addNote({
    noteTitle,
    noteContent,
    notesContainer,
  });
});

searchBtn.addEventListener("click", () => {
  searchFilterOperations.searchFilterBar({
    notesContainer,
    searchBar,
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const notes = getNotes();

  notes.forEach((item) => {
    noteOperations.addNote({
      noteTitle: { value: item.title },
      noteContent: { value: item.content },
      notesContainer,
    });
  });
});
