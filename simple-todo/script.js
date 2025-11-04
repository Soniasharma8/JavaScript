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

