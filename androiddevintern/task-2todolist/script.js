function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => editTask(span, editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => taskList.removeChild(li);

  const btnGroup = document.createElement("div");
  btnGroup.className = "task-buttons";
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  taskList.appendChild(li);

  input.value = "";
}

function editTask(span, btn) {
  const isEditing = btn.textContent === "Save";

  if (isEditing) {
    const input = span.querySelector("input");
    span.textContent = input.value;
    btn.textContent = "Edit";
  } else {
    const currentText = span.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    span.textContent = "";
    span.appendChild(input);
    input.focus();
    btn.textContent = "Save";
  }
}
