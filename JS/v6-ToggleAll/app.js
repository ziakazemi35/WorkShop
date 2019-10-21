//START TODOS OBJECT
let todos = {
  list: [
    {
      text: "learn HTML",
      completed: false
    },
    {
      text: "learn CSS",
      completed: false
    },
    {
      text: "learn JS",
      completed: true
    },
    {
      text: "learn PHP",
      completed: true
    }
  
  
  ],

    displayTodos: function () {

    if (this.list.length == 0) {
      console.log("inside the conditon");
      console.log("I am the hero man come on man trust me");

    }


    this.list.forEach(function (item) {
      let completedStr = (item.completed) ? "(X)" : "( )";
      console.log(completedStr, item.text);
    });


  },
  addTodo: function (todoText) {
    let newTodo = {
      text: todoText,
      completed: false
    }

    this.list.push(todoText);
    this.displayTodos();
  },


  changeTodo: function (index, newText) {

    this.list[index] = newText;
    this.displayTodos();
  },



  deleteTodo: function (index, item) {
    this.list.splice(index, 1);
    this.displayTodos();
  },


  //toggle completed
  toggleTodo: function (index) {
    let currentStatus = this.list[1].completed; //true or false

    this.list[index].completed = !currentStatus;

    this.displayTodos();
  },
  //TOGGLE ALL

  toggleAll: function () {

    //Completed items INIT
    let completedItems = 0;
    let totalTodos = this.list.length;

    console.log("Total", totalTodos);
    //1. Check what items are completed (true)
    this.list.forEach(function (item) {
      if (item.completed == true) {
        completedItems++;

      }
    });
    console.log("Completed Items:", completedItems);
    //2. IF NOTHING IS COMPLETED => CHECK THEM ALL
    //OR IF WE HAVE A COMMPLETED ITEMS => CHECK THEM ALL
    //VERSION1
    // if(completedItems == 0  ||  (completedItems > 0 && completedItems != totalTodos)){
    //   console.log("check them all");
    // }
    //VERSION 2
    //   if (completedItems >=0 &&completedItems != totalTodos){
    //     if(completedItems != totalTodos){
    //       console.log("check them all");

    //     }
    //   }
    // else {
    //   console.log("Uncheck them all");
    //VERSION 3
    if (completedItems == totalTodos) {
      this.list.forEach(function (item) {
        item.completed = false
      });
    }
    else {
      this.list.forEach(function (item) {
        item.completed = true
      });
    }

  }

}





    //END OBJECT todos

    // todos.displayTodos();
    todos.displayTodos();
    todos.toggleAll();