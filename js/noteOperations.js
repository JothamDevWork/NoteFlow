let addNote = () => {
  const title = noteTitle.value.trim();
  const content = noteContent.value.trim();
  if (title && content) {
    const note = document.createElement("li");
    note.innerHTML = `<strong>${title}</strong><br>${content}`;
    notesContainer.appendChild(note);
  }
};

export { addNote };
