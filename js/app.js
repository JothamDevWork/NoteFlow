const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

addNoteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const title = noteTitle.value.trim();
  const content = noteContent.value.trim();

  if (title && content) {
    const note = document.createElement("li");
    note.innerHTML = `<strong>${title}</strong><br>${content}`;
    notesContainer.appendChild(note);
  }
});
