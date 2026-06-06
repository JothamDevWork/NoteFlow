import { getNotes, saveNotes } from "./localStorage.js";

/*Add Note Operation*/
export const addNote = ({ noteTitle, noteContent, notesContainer }) => {
  const title = noteTitle.value.trim();
  const content = noteContent.value.trim();

  if (title && content) {
    const note = document.createElement("li");
    note.innerHTML = `<strong>${title}</strong><br>${content}`;

    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    deleteBtn.innerHTML = "Delete";

    deleteBtn.addEventListener("click", (event) => {
      event.target.parentElement.remove();

      let notes = getNotes();

      notes = notes.filter(
        (note) => !(note.title === title && note.content === content),
      );

      saveNotes(notes);
    });

    editBtn.innerHTML = "Edit";

    editBtn.addEventListener("click", () => {
      const newtitle = prompt("Edit Title", title);
      const newcontent = prompt("Edit Content", content);

      if (newtitle !== "" || newcontent) {
        note.innerHTML = `<strong>${newtitle}</strong><br>${newcontent}`;
        note.appendChild(deleteBtn);
        note.appendChild(editBtn);

        const notes = getNotes();

        const updatedNotes = notes.map((item) => {
          if (item.title === title && item.content === content) {
            return {
              title: newtitle,
              content: newcontent,
            };
          }

          return item;
        });

        saveNotes(updatedNotes);
      }
    });

    note.appendChild(deleteBtn);
    note.appendChild(editBtn);
    notesContainer.appendChild(note);

    const notes = getNotes();

    notes.push({
      title,
      content,
    });

    saveNotes(notes);
  }
};
