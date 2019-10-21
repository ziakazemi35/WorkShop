let todos = {

  list : [
    "Learn HTML",
    "Learn CSS",
    "Learn JS",
    "Lear PHP"
  ],





//DISPLAY TODOS
displayTodos : function (){
console.log ( this.list );
},




//ADD TODO
addTodo : function (todoText) {
  this.list.push (todoText);
  this.displayTodos();
},


//CHANGE TODO
changeTodo : function (Index,anyText) {
  
  this.list[Index] = anyText;
  this.displayTodos();
}
};
console.log(todos.list);
todos.addTodo("java");


//DELETE TODO
deletetodo : function (Index){
  this.list.splice(Index, 1);
  this.displayTodos();
}

console.log(todos.list);
todos.addTodo("new to do ")




