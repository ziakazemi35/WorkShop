let todos={
  list : [

    {
      text:"learn HTML",
      completed: false
    },
    {
      text:"learn CSS",
      completed: false
    },
    {
      text:"learn JS",
      completed: false
    },
    {
      text:"learn PHP",
      completed: false
    },
    
    ],
    displayTodos: function(){
      // console.log(this.list);
    },
    addTodo: function(todoText){

        let newTodo = {
          text: todoText,
          completed: false
      }

      this.list.push(todoText);
      this.displayTodos();
    },


    changeTodo:function(index, newText){

      this.list[index]=newText;
      this.displayTodos();
    },



    deleteTodo: function(index,item){
      this.list.splice(index, 1);
      this.displayTodos();
    },


    //toggle completed
    toggleTodo: function(index){
      let currentStatus = this.list[1].completed; //true or false

      this.list[index].completed= ! currentStatus;
      
      this.displayTodos();
    }


};//END OBJECT todos

// todos.displayTodos();
// todos.addTodo("Latest todo");
// todos.addTodo("another todo new version")

// // todos.changeTodo(4,"Bob is the great");
// console.log(todos.list [2]);
// todos.list[2].text = "SOMETHING ANYTHING";
// console.log( todos.list[2] );
// console.log( todos.list );
// todos.toggleTodo(1);
// todos.toggleTodo(2,1);






// console.log(todos.list);
// todos.addTodo("new todo");
// todos.deleteTodo(2,1);

// changeTodo(2, "my todo");
// changeTodo(0, "somthing like that");

todos.list[2].completed=true
console.log(todos.list[2]); 