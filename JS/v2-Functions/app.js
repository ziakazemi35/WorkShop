let todoList = [
"Learn HTML",
"Learn CSS",
"Learn JS",
"Lear PHP"
];

//console.log(todoList[2]);
//console.log("ahmad is mr bean");


//DISPLAY TODOS
function displayTodos() {
  
  console.log(todoList);
}
displayTodos();


//ADD TODO
function addTodo(todoText) {
  todoList.push(todoText);
  displayTodos();
}
addTodo ("Do that!");
// addTodo ("Do this!");
// addTodo ("Do NOT do that!");

//CHANGE TODO
function changeTodo(Index,anyText) {
  
  todoList[Index] = anyText;
  displayTodos();
}
changeTodo(0, " the name");
changeTodo(1, " the last name");


//DELETE TODO
function deleteTodo(Index) {
  
  todoList.splice(Index,1);
  displayTodos();
}
deleteTodo(1);



