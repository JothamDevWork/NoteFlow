// Store notes in an array
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Save notes to localStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Create a note card element
function createNoteCard(note) {
  const card = document.createElement("div");
  card.classList.add("note-card");
  card.dataset.id = note.id;

  card.innerHTML = `
    <h2 class="note-title">${note.title}</h2>
    <p class="note-content">${note.content}</p>
    <div class="note-actions">
      <button class="editBtn">EDIT</button>
      <button class="deleteBtn">DELETE</button>
    </div>
  `;

  // Delete logic
  card.querySelector(".deleteBtn").addEventListener("click", () => {
    deleteNote(note.id, card);
  });

  // Edit logic
  card.querySelector(".editBtn").addEventListener("click", () => {
    editNote(note, card);
  });

  return card;
}

// Add a new note
export function addNote(title, content, container) {
  const note = {
    id: Date.now(),
    title,
    content,
  };

  notes.push(note);
  saveNotes();

  const card = createNoteCard(note);
  container.appendChild(card);
}

// Load notes from localStorage on page load
export function loadNotes(container) {
  notes.forEach((note) => {
    const card = createNoteCard(note);
    container.appendChild(card);
  });
}

function deleteNote(id, card) {
  notes = notes.filter((n) => n.id !== id);
  saveNotes();
  card.remove();
}

function editNote(note, card) {
  const titleEl = card.querySelector(".note-title");
  const contentEl = card.querySelector(".note-content");
  const editBtn = card.querySelector(".editBtn");

  titleEl.contentEditable = "true";
  contentEl.contentEditable = "true";
  titleEl.focus();

  editBtn.textContent = "CONFIRM";
  editBtn.classList.add("confirmBtn");
  editBtn.classList.remove("editBtn");

  editBtn.addEventListener(
    "click",
    () => {
      note.title = titleEl.textContent;
      note.content = contentEl.textContent;

      titleEl.contentEditable = "false";
      contentEl.contentEditable = "false";

      editBtn.textContent = "EDIT";
      editBtn.classList.add("editBtn");
      editBtn.classList.remove("confirmBtn");

      saveNotes();
    },
    { once: true },
  );
}
