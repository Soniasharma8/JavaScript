/* ---------- index.html ---------- */
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Todo - All Tasks</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <header class="top">
        <h1>📝 My Todo List</h1>
        <nav class="nav">
          <a href="index.html" class="nav-link active">All</a>
          <a href="add.html" class="nav-link">Add</a>
          <a href="completed.html" class="nav-link">Completed</a>
        </nav>
      </header>

      <div class="search-row">
        <input id="search" type="text" placeholder="Search tasks or notes..." />
      </div>

      <ul id="taskList" class="task-list"></ul>
    </div>

    <script src="script.js"></script>
  </body>
</html>




/* ---------- add.html ---------- */
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Todo - Add / Edit</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <header class="top">
        <h1>➕ Add / Edit Task</h1>
        <nav class="nav">
          <a href="index.html" class="nav-link">All</a>
          <a href="add.html" class="nav-link active">Add</a>
          <a href="completed.html" class="nav-link">Completed</a>
        </nav>
      </header>

      <form id="taskForm" class="form-card">
        <label
          >Title
          <input id="title" type="text" required placeholder="e.g. Study JS" />
        </label>

        <label
          >Notes (optional)
          <textarea id="notes" rows="3" placeholder="Add details..."></textarea>
        </label>

        <div class="row">
          <label
            >Due date
            <input id="dueDate" type="date" />
          </label>

          <label
            >Priority
            <select id="priority">
              <option value="">Normal</option>
              <option value="Low">Low</option>
              <option value="High">High</option>
            </select>
          </label>
        </div>

        <div class="actions">
          <button id="saveBtn" type="submit" class="btn primary">Save</button>
          <button id="cancelBtn" type="button" class="btn">Cancel</button>
        </div>
      </form>
    </div>

    <script src="script.js"></script>
  </body>
</html>

/* ---------- completed.html ---------- */
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Todo - Completed</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <header class="top">
        <h1>✅ Completed Tasks</h1>
        <nav class="nav">
          <a href="index.html" class="nav-link">All</a>
          <a href="add.html" class="nav-link">Add</a>
          <a href="completed.html" class="nav-link active">Completed</a>
        </nav>
      </header>

      <div class="completed-header">
        <div class="completed-left">
          <h2 style="margin:0">✅ Completed Tasks</h2>
          <div id="completedCount" class="completed-count">You completed 0 tasks</div>
        </div>

        <div class="completed-actions">
          <button id="clearCompleted" type="button" class="btn-small btn-delete">
            Clear All
          </button>
        </div>
      </div>

      <ul id="completedList" class="task-list"></ul>
    </div>

    <script src="script.js"></script>
  </body>
</html>

/* ---------- style.css ---------- */

/* body {
  font-family: Arial, sans-serif;
  background: #f8f8f8;
}

.container {
  max-width: 400px;
  margin: 60px auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.input-area {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  background: #f2f2f2;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li.completed {
  text-decoration: line-through;
  color: gray;
}

.action-btns button {
  margin-left: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #888;
} */

:root{
  --bg: #f6f9fc;
  --card: #ffffff;
  --accent: #2563eb;        /* slightly deeper blue */
  --accent-2: #60a5fa;      /* lighter accent */
  --muted: #6b7280;
  --text: #0f172a;
  --success: #10b981;
  --danger: #ef4444;
  --glass: rgba(255,255,255,0.6);
  --shadow-1: 0 6px 22px rgba(15,23,42,0.06);
  --radius-lg: 12px;
  --radius-md: 8px;
  --radius-sm: 6px;
  --trans: 180ms ease;
}

/* ---------- Base ---------- */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

* { box-sizing: border-box; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
html,body { height: 100%; }
body {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, Arial;
  color: var(--text);
  background: linear-gradient(180deg,#f8fbff 0%, var(--bg) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 28px;
}

/* ---------- Container ---------- */
.container {
  width: 100%;
  max-width: 980px;
  background: linear-gradient(180deg, rgba(255,255,255,0.98), var(--card));
  border-radius: var(--radius-lg);
  padding: 22px;
  box-shadow: var(--shadow-1);
  border: 1px solid rgba(37,99,235,0.04);
}

/* ---------- Header / Nav ---------- */
.top {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 14px;
}
.top h1 {
  margin: 0;
  font-size: 20px;
  letter-spacing: -0.2px;
}
.nav {
  margin-left: auto;
  display: flex;
  gap: 8px;
}
.nav-link {
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 10px;
  color: var(--muted);
  background: transparent;
  font-weight: 600;
  border: 1px solid transparent;
  transition: transform 140ms var(--trans), background 160ms var(--trans), color 160ms var(--trans);
}
.nav-link:hover { transform: translateY(-2px); }
.nav-link.active {
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  color: white;
  box-shadow: 0 8px 28px rgba(37,99,235,0.12);
}

/* ---------- Search row ---------- */
.search-row { margin-bottom: 12px; display:flex; gap:10px; align-items:center; }
#search {
  flex: 1;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e6eefb;
  outline: none;
  background: linear-gradient(180deg, #fff, #fbfdff);
  box-shadow: inset 0 1px 0 rgba(16,24,40,0.02);
  transition: box-shadow 160ms var(--trans), transform 160ms var(--trans);
}
#search:focus { box-shadow: 0 6px 20px rgba(37,99,235,0.06); transform: translateY(-2px); }

/* ---------- Task list ---------- */
.task-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; grid-template-columns: 1fr; }
.task {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(14,165,233,0.03);
  background: linear-gradient(180deg,#ffffff,#fbfdff);
  transition: transform 160ms var(--trans), box-shadow 160ms var(--trans);
}
.task:hover { transform: translateY(-4px); box-shadow: 0 14px 34px rgba(16,24,40,0.06); }

/* left column */
.left { flex: 1; min-width: 0; }
.title { font-weight: 700; margin-bottom: 6px; font-size: 15px; color: var(--text); }
.meta { font-size: 13px; color: var(--muted); line-height: 1.35; }
.badge {
  display:inline-block;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: linear-gradient(180deg,#f0f9ff,#ecfeff);
  color: var(--accent);
  border: 1px solid #e6f0ff;
}

/* right buttons */
.right { display:flex; gap:8px; align-items:center; margin-left: 8px; }
.btn-small {
  border: none;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  font-size: 13px;
  transition: transform 120ms var(--trans), box-shadow 120ms var(--trans);
  background: #f3f4f6;
  color: #111827;
  box-shadow: 0 2px 6px rgba(2,6,23,0.03);
}
.btn-small:hover { transform: translateY(-3px); box-shadow: 0 8px 18px rgba(2,6,23,0.06); }
.btn-done { background: linear-gradient(180deg,#10b981,#059669); color: #fff; }
.btn-edit { background: linear-gradient(180deg,#fff4e6,#fff8eb); color:#92400e; border: 1px solid #fde3b7; }
.btn-delete { background: linear-gradient(180deg,#f97316,#ef4444); color: #fff; }

/* completed look */
.task.completed {
  background: linear-gradient(180deg,#f8fff6,#f2fff2);
  border: 1px solid rgba(16,185,129,0.10);
  box-shadow: 0 10px 28px rgba(16,185,129,0.06);
}
.task.completed .title { text-decoration: line-through; color: #6b7280; }

/* ---------- Completed page header, empty state & celebration ---------- */
.completed-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  margin-bottom:12px;
  padding:10px 12px;
  border-radius:10px;
  background: linear-gradient(90deg, rgba(37,99,235,0.06), rgba(16,185,129,0.03));
  border:1px solid rgba(99,102,241,0.06);
}
.completed-left h2{ margin:0; font-size:18px; display:flex; align-items:center; gap:8px; }
.completed-count{ font-size:13px; color:var(--muted); margin-top:4px; }
.completed-badge{
  display:inline-block;
  padding:6px 10px;
  border-radius:999px;
  background:linear-gradient(180deg, rgba(16,185,129,0.12), rgba(16,185,129,0.06));
  color:var(--success);
  font-weight:700;
  margin-left:8px;
  font-size:13px;
}

.empty-state{
  text-align:center;
  padding:32px;
  border-radius:10px;
  background:linear-gradient(180deg,#ffffff,#fbfdff);
  border:1px dashed #e6f0ff;
  color:var(--muted);
  margin-top:12px;
}
.celebrate{
  display:flex;
  gap:8px;
  align-items:center;
  padding:8px 10px;
  border-radius:8px;
  background: linear-gradient(90deg,#fff7ed,#fff1f2);
  border:1px solid rgba(250,204,21,0.08);
  color:#92400e;
  font-weight:700;
  margin-bottom:12px;
  animation: popIn .28s ease;
}
@keyframes popIn { from{ transform: translateY(-6px); opacity:0 } to{ transform: translateY(0); opacity:1 } }

/* ---------- Form (Add / Edit) ---------- */
.form-card {
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #eef2ff;
  background: linear-gradient(180deg,#ffffff,#fbfdff);
  box-shadow: 0 8px 24px rgba(16,24,40,0.04);
}
label { display:block; margin-bottom:10px; font-size:14px; font-weight:600; color:var(--text); }
input[type="text"], textarea, input[type="date"], select {
  width:100%;
  padding:10px 12px;
  border-radius: 10px;
  border:1px solid #e6eefb;
  margin-top:6px;
  outline:none;
  background: #fff;
  transition: box-shadow 120ms var(--trans), transform 120ms var(--trans);
}
input[type="text"]:focus, textarea:focus, input[type="date"]:focus, select:focus {
  box-shadow: 0 8px 20px rgba(37,99,235,0.06);
  transform: translateY(-2px);
}
.row { display:flex; gap:10px; margin-top:6px; }
.row > * { flex:1; }
.actions { margin-top:12px; display:flex; gap:8px; }
.btn { padding:10px 14px; border-radius:10px; border:none; cursor:pointer; font-weight:700; }
.btn.primary { background: linear-gradient(90deg,var(--accent),var(--accent-2)); color:white; box-shadow: 0 8px 20px rgba(37,99,235,0.12); }
.btn.secondary { background:#f3f4f6; color:#111827; }

/* ---------- Utility / Responsive ---------- */
.small { font-size: 13px; padding:6px 8px; border-radius:8px; }
@media (max-width:880px){
  .container{ padding:16px; }
  .task { padding:12px; gap:10px; }
  .nav { gap:6px; }
}
@media (max-width:620px){
  .row { flex-direction: column; }
  .nav { display:flex; flex-wrap:wrap; gap:6px; }
  .top { gap:10px; align-items:flex-start; }
}

/* ---------- micro-interactions ---------- */
a, button { -webkit-tap-highlight-color: transparent; }




/* ---------- script.js ---------- */

let todoList = [];

function loadFromLocalStorage() {
  const stored = localStorage.getItem("todoList");
  if (stored) {
    todoList = JSON.parse(stored);
  }
}

function saveToLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function clearChildren(el) {
  if (!el) return;
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function initIndexPage() {
  const taskListEl = document.getElementById("taskList");
  const searchEl = document.getElementById("search");

  if (!taskListEl) return;

  function renderTasks(filter = "") {
    clearChildren(taskListEl);

    const searchText = filter.toLowerCase();

    todoList.forEach((item, index) => {
      if (searchText) {
        const inTitle = (item.title || "").toLowerCase().includes(searchText);
        const inNotes = (item.notes || "").toLowerCase().includes(searchText);
        if (!inTitle && !inNotes) return;
      }

      const li = document.createElement("li");
      li.className = "task";

      const left = document.createElement("div");
      left.className = "left";

      const title = document.createElement("div");
      title.className = "title";
      title.textContent = item.title || "(No title)";
      if (item.status) title.classList.add("completed");
      left.appendChild(title);

      if (item.notes) {
        const notes = document.createElement("div");
        notes.className = "meta";
        notes.textContent = item.notes;
        left.appendChild(notes);
      }

      const meta = document.createElement("div");
      meta.className = "meta";
      const parts = [];
      if (item.priority) parts.push(`Priority: ${item.priority}`);
      if (item.dueDate) parts.push(`Due: ${item.dueDate}`);
      if (parts.length) {
        meta.textContent = parts.join(" • ");
        left.appendChild(meta);
      }

      const right = document.createElement("div");
      right.className = "right";

      const doneBtn = document.createElement("button");
      doneBtn.className = "btn-small btn-done";
      doneBtn.textContent = item.status ? "Undo" : "Done";
      doneBtn.addEventListener("click", () => {
        todoList[index].status = !todoList[index].status;
        saveToLocalStorage();
        renderTasks(searchEl ? searchEl.value : "");
      });
      right.appendChild(doneBtn);

      const editBtn = document.createElement("button");
      editBtn.className = "btn-small btn-edit";
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => {
        location.href = `add.html?edit=${index}`;
      });
      right.appendChild(editBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn-small btn-delete";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        if (confirm("Delete this task?")) {
          todoList.splice(index, 1);
          saveToLocalStorage();
          renderTasks(searchEl ? searchEl.value : "");
        }
      });
      right.appendChild(deleteBtn);

      li.appendChild(left);
      li.appendChild(right);
      taskListEl.appendChild(li);
    });
  }

  renderTasks();

  if (searchEl) {
    searchEl.addEventListener("input", (e) => renderTasks(e.target.value));
  }
}

function initAddPage() {
  const titleInput = document.getElementById("title");
  const notesInput = document.getElementById("notes");
  const dueDateInput = document.getElementById("dueDate");
  const priorityInput = document.getElementById("priority");
  const saveBtn = document.getElementById("saveBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  if (!titleInput || !saveBtn) return;

  const urlParams = new URLSearchParams(window.location.search);
  const editIndex = urlParams.has("edit")
    ? Number(urlParams.get("edit"))
    : null;

  if (editIndex !== null && todoList[editIndex]) {
    const task = todoList[editIndex];
    titleInput.value = task.title || "";
    if (notesInput) notesInput.value = task.notes || "";
    if (dueDateInput) dueDateInput.value = task.dueDate || "";
    if (priorityInput) priorityInput.value = task.priority || "";
    saveBtn.textContent = "Update Task";
  }

  saveBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();

    if (title === "") {
      alert("Please enter a task title");
      titleInput.focus();
      return;
    }

    const taskData = {
      title: title,
      notes: notesInput ? notesInput.value.trim() : "",
      dueDate: dueDateInput ? dueDateInput.value : "",
      priority: priorityInput ? priorityInput.value : "",
      status: false,
      createdAt: new Date().toISOString(),
    };

    if (editIndex === null) {
      todoList.push(taskData);
    } else {
      taskData.status = todoList[editIndex].status;
      taskData.createdAt = todoList[editIndex].createdAt;
      todoList[editIndex] = taskData;
    }

    saveToLocalStorage();
    location.href = "index.html";
  });

  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      location.href = "index.html";
    });
  }

  titleInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      saveBtn.click();
    }
  });
}

function initCompletedPage() {
  const completedListEl = document.getElementById("completedList");

  if (!completedListEl) return;

  function renderCompleted() {
    clearChildren(completedListEl);

    const completed = todoList.filter((item) => item.status);

    if (completed.length === 0) {
      completedListEl.innerHTML =
        '<li class="empty-state">No completed tasks yet!</li>';
      return;
    }

    completed.forEach((item) => {
      const index = todoList.indexOf(item);

      const li = document.createElement("li");
      li.className = "task completed";

      const left = document.createElement("div");
      left.className = "left";

      const title = document.createElement("div");
      title.className = "title";
      title.textContent = item.title || "(No title)";
      left.appendChild(title);

      if (item.notes) {
        const notes = document.createElement("div");
        notes.className = "meta";
        notes.textContent = item.notes;
        left.appendChild(notes);
      }

      const meta = document.createElement("div");
      meta.className = "meta";
      const parts = [];
      if (item.priority) parts.push(`Priority: ${item.priority}`);
      if (item.dueDate) parts.push(`Due: ${item.dueDate}`);
      if (parts.length) {
        meta.textContent = parts.join(" • ");
        left.appendChild(meta);
      }

      const right = document.createElement("div");
      right.className = "right";

      const undoBtn = document.createElement("button");
      undoBtn.className = "btn-small";
      undoBtn.textContent = "Undo";
      undoBtn.addEventListener("click", () => {
        todoList[index].status = false;
        saveToLocalStorage();
        renderCompleted();
      });
      right.appendChild(undoBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn-small btn-delete";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        if (confirm("Delete permanently?")) {
          todoList.splice(index, 1);
          saveToLocalStorage();
          renderCompleted();
        }
      });
      right.appendChild(deleteBtn);

      li.appendChild(left);
      li.appendChild(right);
      completedListEl.appendChild(li);
    });
  }

  renderCompleted();
}

document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();

  initIndexPage();
  initAddPage();
  initCompletedPage();
});

