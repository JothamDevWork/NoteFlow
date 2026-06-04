import * as noteOperations from "./noteOperations.js";
import * as searchFilterOperations from "./searchFilterOperations.js";
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
