/* TODOS OBJECT
 * Specialty: manipulate the todos array
-----------------------------------------------*/
let todos = {

  //MY TODO LIST - PROPERTY
  list : [

    {
      text: "Learn HTML5",
      completed: true
    },
    {
      text: "Learn CSS",
      completed: true
    },
    {
      text: "Learn JS",
      completed: false
    },
    {
      text: "Learn PHP",
      completed: false
    }

  ],

  //DISPLAY TODOS - METHOD
  displayTodos: function() {

    if(this.list.length == 0) {
      console.log("You don't have any todos, add some!");
    }

    this.list.forEach(function(item) {
      let completedStr = (item.completed) ? "(x)" : "( )";
      console.log(completedStr, item.text);
    });
    console.log("-------------");
  },

  //ADD TODO
  addTodo: function(todoText) {

    let newTodo = {
      text: todoText,
      completed: false
    }

    this.list.push(newTodo);
    this.displayTodos();
  },

  //CHANGE TODO
  changeTodo: function(index, newText) {
    this.list[index].text = newText;
    this.displayTodos();
  },

  //DELETE TODO
  deleteTodo: function(index) {
    this.list.splice(index, 1);
    this.displayTodos();
  },

  //TOGGLE COMPLETED
  toggleTodo: function(index) {
  
    let currentStatus = this.list[index].completed; //true or false
    this.list[index].completed = ! currentStatus;
    this.displayTodos();

  },

  //TOGGLE ALL !
  toggleAll: function() {

    //Completed items INIT
    let completedItems = 0;
    
    //How many todos I have ?
    let totalTodos = this.list.length; //console.log("Total todos:", totalTodos);

    //1. Check what items are completed (true)
    this.list.forEach(function(item) {
      if(item.completed) {
        completedItems++; //or... completedItems += 1;
      }
    });
    //console.log("Completed items:", completedItems);

    //IF everything is completed => uncheck them all 
    if(completedItems == totalTodos) {
      this.list.forEach(function(item) {
        item.completed = false;
      });
    }
    //ELSE check them all
    else {
      this.list.forEach(function(item) {
        item.completed = true;
      });
    }

    this.displayTodos();

  }

}; // END OBJECT todos


/* HANDLERS OBJECT
 * Specialty: communicate with HTML, grab
 * the input values and send them to todos obj.
-----------------------------------------------*/
let handlers = {

  //Check if an input is empty. Alert if so
  isEmpty: function(input) {

    if(input.value === '') {
      alert("The input ''" + input.id + "'' cannot be empty!");
      return true;
    }
    else {
      return false;
    }

  },

  //Handler for ADD todo
  addTodo: function() {
    const inputAdd = document.getElementById('inputAdd');

    if(! this.isEmpty(inputAdd)) {
      todos.addTodo(inputAdd.value);
      inputAdd.value = '';
    }


  },

  //Handler for CHANGE todo
  changeTodo: function() {
    const inputChangeIndex = document.getElementById('inputChangeIndex');
    const inputChangeText = document.getElementById('inputChangeText');

    if(! this.isEmpty (inputChangeIndex) &&  ! this.isEmpty (inputChangeText.value )) {
      todos.changeTodo(inputChangeIndex.value, inputChangeText.value);
      inputChangeIndex.value = inputChangeText.value = '';
    }
  },

  //Handler for DELETE todo
  deleteTodo: function() {
    const inputDeleteIndex = document.getElementById('inputDeleteIndex');

    if(! this.isEmpty(inputDeleteIndex)) {
      todos.deleteTodo(inputDeleteIndex.value);
      inputDeleteIndex.value = '';
    }
  },

  //Handler for TOGGLE todo
  toggleTodo: function() {
    const inputToggleIndex = document.getElementById('inputToggleIndex');

    if(! this.isEmpty(inputToggleIndex)) {
      todos.toggleTodo(inputToggleIndex.value);
      inputToggleIndex.value = '';
    }
  }

};



//LINK YOUR HTML buttons
// const btnDisplay = document.getElementById('btnDisplay');
// const btnToggleAll = document.getElementById('btnToggleAll');

//Display todos btn
// btnDisplay.addEventListener('click', function() {
//   todos.displayTodos();
// });

//Toggle todos btn
// btnToggleAll.addEventListener('click', function() {
//   todos.toggleAll();
// });

//ADD Todo btn and input
// const btnAdd = document.getElementById('btnAdd');

// btnAdd.addEventListener('click', function() {

//   const inputAdd = document.getElementById('inputAdd');

//   if(inputAdd.value !== '') {
//     todos.addTodo(inputAdd.value);
//     inputAdd.value = '';
//   }
//   else {
//     alert("The input text cannot be empty!");
//   }

// });

//TOGGLE Todo btn and input
// const btnToggle = document.getElementById('btnToggle');

// btnToggle.addEventListener('click', function() {

//   const inputToggleIndex = document.getElementById('inputToggleIndex');

//   if(inputToggleIndex.value !== '') {
//     todos.toggleTodo(inputToggleIndex.value);
//     inputToggleIndex.value = '';
//   }
//   else {
//     alert("The index cannot be empty!");
//   }

// });




// todos.addTodo("asdasd");




//IN jQuery is something like this:
// $("#btnDisplay").on('click', function() {
//   todos.displayTodos();
// })

//WHAT WE'VE MISSED :
//1. STRICT COMPARISON
/*
let num = "3";
if(num === 3) {
  console.log("TRUE");
}
else {
  console.log("FALSE");
}

let bool = 1;
if(bool === true) {
  console.log("TRUE");
}
else {
  console.log("FALSE");
}

//2. You can write conditions like this :
if(true) console.log("TRUE");
else console.log("FALSE");
*/

