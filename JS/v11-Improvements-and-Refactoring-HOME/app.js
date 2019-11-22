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

  //ADD TODO
  addTodo: function(todoText) {

    let newTodo = {
      text: todoText,
      completed: false
    }

    this.list.push(newTodo);
    view.displayTodos();
  },

  //CHANGE TODO
  changeTodo: function(index, newText) {
    this.list[index].text = newText;
    view.displayTodos();
  },

  //DELETE TODO
  deleteTodo: function(index) {
    this.list.splice(index, 1);
    view.displayTodos();
    message.show("The item with index " + index + " was deleted.", "success");
  },

  //TOGGLE COMPLETED
  toggleTodo: function(index) {
  
    let currentStatus = this.list[index].completed; //true or false
    this.list[index].completed = ! currentStatus;
    view.displayTodos();

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

    view.displayTodos();

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
      // alert("The input ''" + input.id + "'' cannot be empty!");
      message.show("The input ''" + input.id + "'' cannot be empty!", 'error');
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

    if(! this.isEmpty(inputChangeIndex) && ! this.isEmpty(inputChangeText)) {
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


/* VIEW OBJECT
 * Specialty: create and display HTML
-----------------------------------------------*/
let view = {

  //DISPLAY TODOS - METHOD
  displayTodos: function() {

    const ul = document.querySelector("#todo-list");
    ul.innerHTML = '';

    if(todos.list.length === 0) {
      message.show("Your list is empty, please add something.");
      return; //stop here
    }
    else {
      message.hide();
    }

    //LOOP INSIDE YOUR TODO LIST ARRAY AND CREATE HTML ELEMENTS
    todos.list.forEach(function(item, index) {

      //1.Create LI element - This will contain todo's everything
      let li = document.createElement('li');
      li.setAttribute('class', 'item');
      if(item.completed) {
        li.classList.add('completed');
      }
      
      //2. Create DIV element - This will contain todo's left content
      let div = document.createElement('div');
      div.setAttribute('class', 'todo-left');

      //3. Create toogle link
      let toggleLink = document.createElement('a');
      toggleLink.setAttribute('href', '#');
      toggleLink.setAttribute('data-index', index);
      toggleLink.setAttribute('class', 'item-state');
      toggleLink.innerHTML = (item.completed) ? "(x)" : "(&nbsp;&nbsp;)";
      div.appendChild(toggleLink); //Append it to the DIV

      //4. Create todo text span
      let todoText = document.createElement('span');
      todoText.setAttribute('class', 'item-text');
      todoText.innerHTML = item.text;
      div.appendChild(todoText); //Appended to the DIV

      //5. Append the left side (div) to the LI
      li.appendChild(div);
      
      //6. Create the delete button - todo's right content
      let deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'todo-right delete-button');
      deleteBtn.setAttribute('data-index', index);
      deleteBtn.innerHTML = '&#128465;'; //&#x1F5D1;
      li.appendChild(deleteBtn); //Append it to the LI

      //7. Append the LI to the UL
      ul.appendChild(li);
      
    });
    
  }

};


/* EVENTS OBJECT
 * Specialty: listen to events
-----------------------------------------------*/
let listen = {

  //UL REALATED EVENTS
  ulEvents: function() {

    const ul = document.querySelector("#todo-list");

    ul.addEventListener('click', function(event) {

      //Get the Event Target
      const elemClicked = event.target; //console.log("I just clicked the ", elemClicked.tagName);
      const dataId = elemClicked.hasAttribute("data-index") ? elemClicked.getAttribute("data-index") : false; //console.log("Data ID:", dataId);

      //IF clicked element is a BUTTON tag
      if(elemClicked.tagName === 'BUTTON') {
        //console.log(elemClicked.id);
        if(confirm('Are you sure?')) {
          todos.deleteTodo(dataId);
        }
      }

      //IF clicked element is the A tag
      if(elemClicked.tagName === 'A') {
        event.preventDefault();
        todos.toggleTodo(dataId);
      }

    });

  }, //END ulEvents


  //ADD TODO (big input) RELATED EVENTS
  addTodoEvents: function() {

    const addTodo = document.querySelector("#add-todo");

    addTodo.addEventListener('keypress', function(event) {

      console.log(event.key);

      //Detect ENTER key
      if(event.which == 13 || event.keyCode == 13) {
 
        if(! handlers.isEmpty(addTodo)) {
          todos.addTodo(this.value); //in this context "this" is the DOM element ("#add-todo") !
          this.value = '';
        }
        else {
          message.show("The Todo Text cannot be empty!");
        }

      }

    });

  } //END addTodoEvents


};



/* MESSAGE OBJECT
 * Specialty: show messages to user
-----------------------------------------------*/
let message = {

  //DOM ELEMENTS
  msgElem: document.querySelector("#msg"),
  msgElemIcon: document.querySelector("#msg-icon"),
  msgElemText: document.querySelector("#msg-text"),

  //SHOW MESSAGE
  show: function(msgStr, msgType = 'error') {

    //A shortcut - we need this in order to use it inside setTimeout function ("this.msgElem" is not available)
    let msgElem = this.msgElem;

    //Message Icon
    this.msgElemIcon.innerHTML = (msgType === 'error') ? '&#9888;' : '&#10004;'; //warning sign / check mark sign
    
    //Message Text
    this.msgElemText.innerHTML = msgStr; //put the custom string inside message text element

    //Message Classes
    msgElem.classList.remove('error', 'success'); //remove any message "type" classes
    msgElem.classList.add(msgType); //add class message type
    msgElem.classList.remove('hidden'); //show the message by removing the hidden class

    //Set a timer to hide the message
    setTimeout(function() {
      msgElem.classList.add('hidden'); //hide the message
    }, 3000);


  },

  //HIDE MESSAGE
  hide: function() {
    this.msgElem.classList.add('hidden'); //hide the message
  }

};


//CALL THIS ON PAGE LOAD !
view.displayTodos();
listen.ulEvents();
listen.addTodoEvents();