import Masonry from "masonry-layout";
import * as noteOperations from "/src/scripts/noteOperations.js";

const addNoteBtn = document.getElementById("addNoteBtn");
const noteContainer = document.getElementById("noteCon");
const modalOverlay = document.getElementById("modalOverlay");
const modalCancelBtn = document.getElementById("modalCancelBtn");
const modalConfirmBtn = document.getElementById("modalConfirmBtn");
const noteTitleInput = document.getElementById("noteTitleInput");
const noteContentInput = document.getElementById("noteContentInput");

// Load saved notes first
noteOperations.loadNotes(noteContainer);

// Init Masonry AFTER notes are loaded
const masonry = new Masonry(noteContainer, {
  itemSelector: ".note-card",
  columnWidth: ".note-card",
  gutter: 16,
});

// Open modal
addNoteBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

// Close modal on cancel
modalCancelBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
  noteTitleInput.value = "";
  noteContentInput.value = "";
});

// Confirm — create note
modalConfirmBtn.addEventListener("click", () => {
  const title = noteTitleInput.value.trim();
  const content = noteContentInput.value.trim();

  if (!title && !content) return;

  const card = noteOperations.addNote(title, content, noteContainer);
  masonry.appended(card);
  masonry.layout();

  modalOverlay.classList.add("hidden");
  noteTitleInput.value = "";
  noteContentInput.value = "";
});

/*import * as noteOperations from "./noteOperations.js";
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
    noteOperations.renderNote({
      id: item.id,
      title: item.title,
      content: item.content,
      notesContainer,
    });
  });
});*/
