import { getNotes, saveNotes } from "./localStorage.js";

/*Parameter Destructuring - is  when destructuring is used directly to  function's  parameter list to etract values*/
export const addNote = ({ noteTitle, noteContent, notesContainer }) => {
  const title = noteTitle.value.trim();
  const content = noteContent.value.trim();

  if (!title || !content)
    return; /* this  is a  guard clause if one of the variables are
   empty which i makes it true  return will run  but if both variables have values then it is false and  continuous  the reading the remaining code.  */

  const notes = getNotes(); /* this returns an  Array of objects */
  console.log(notes);
  notes.push({
    title,
    content,
  });

  saveNotes(notes);

  /*LOCAL STORAGE ADD NOTE PROCESS ^^^^*/
  renderNote({
    title,
    content,
    notesContainer,
  });
};

export const renderNote = ({ title, content, notesContainer }) => {
  const note = document.createElement("li");
  note.innerHTML = `<strong>${title}</strong><br>${content}`;

  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  editBtn.textContent = "Edit";

  deleteBtn.addEventListener("click", () => {
    note.remove();

    /*LOCAL STORAGE REMOVE PROCESS*/
    let notes = getNotes();

    notes = notes.filter(
      (item) => !(item.title === title && item.content === content),
    );

    saveNotes(notes);

    /*LOCAL STORAGE REMOVE PROCESS ^^*/
  });

  editBtn.addEventListener("click", () => {
    const newTitle = prompt("Edit Title", title);
    const newContent = prompt("Edit Content", content);

    if (!newTitle && !newContent) return;

    note.innerHTML = `<strong>${newTitle}</strong><br>${newContent}`;

    note.appendChild(deleteBtn);
    note.appendChild(editBtn);

    const notes = getNotes();

    const updatedNotes = notes.map((item) => {
      if (item.title === title && item.content === content) {
        return {
          title: newTitle,
          content: newContent,
        };
      }

      return item;
    });

    saveNotes(updatedNotes);
  });

  note.appendChild(deleteBtn);
  note.appendChild(editBtn);
  notesContainer.appendChild(note);
};
