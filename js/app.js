const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

addNoteBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  let module = await import("./noteOperations.js");
  module.addNote();
});
