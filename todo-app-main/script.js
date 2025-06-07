const addTodoBtn = document.getElementById("addTodoBtn");
const todoInput = document.getElementById("addTodoInput");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener("click", ()=>{
    let newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;

    todoList.appendChild(newTodo);
})