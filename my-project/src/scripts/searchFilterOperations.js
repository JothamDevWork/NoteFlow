export const searchFilterBar = ({ notesContainer, searchBar }) => {
  const searching = searchBar.value.trim();

  const arrayOfNotes = [...notesContainer.children];

  const contentsfilteredNotes = arrayOfNotes.filter((note) =>
    note.textContent.includes(searching),
  );
  notesContainer.innerHTML = "";
  contentsfilteredNotes.forEach((note) => {
    notesContainer.appendChild(note);
  });
};
