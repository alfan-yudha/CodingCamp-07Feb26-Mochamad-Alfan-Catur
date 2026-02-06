// Temporary storage for todo items
let todos = [];

// Function to add a new todo item
function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoDate = document.getElementById("todo-date");

  // Simple validation to check if inputs are filled (both of them)
  if (todoInput.value.trim() === "" || todoDate.value === "") {
    alert("Please enter both a todo item and a due date.");
    return;
  }

  // Create a new todo object
  const newTodo = {
    todo: todoInput.value.trim(),
    date: todoDate.value
  };

  // Add the new todo to the todos array
  todos.push(newTodo);

  // Clear input fields after adding
  todoInput.value = "";
  todoDate.value = "";

  // Render the updated todo list
  renderTodos();
}

// Function to render todo items to the DOM
function renderTodos() {
  const todoList = document.getElementById("todo-list");

  // Clear existing list
  todoList.innerHTML = "";

  // Show message if no todos
  if (todos.length === 0) {
    todoList.innerHTML = "<li>No task found</li>";
    return;
  }

  // Render each todo item
  todos.forEach((item, index) => {
    todoList.innerHTML += `
      <li>
        <p>
          ${item.todo}
          <span>(${item.date})</span>
        </p>
      </li>
    `;
  });
}

// Delete all todos
function deleteAllTodos() {
  todos = [];
  renderTodos();
}

// Filter todos (placeholder)
function filterTodos() {
  // To be implemented
}
