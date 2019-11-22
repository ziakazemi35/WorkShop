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
  //addTodo: (todoText) => {
  // addTodo: (todoText) => {
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
      message.show(`The input  ${input.id} cannot be empty`);
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
      message.show("Your list is empty, please add something.", "info");
      return;
    }
    else {
      message.hide();
    }

    //LOOP INSIDE YOUR TODO LIST
    todos.list.forEach(function(item, index) {

      //1. Create LI element
      let li = document.createElement('li');
      
      //2. Put todo status and text inside LI 
      let completedStr = (item.completed) ? "(x)" : "(&nbsp;&nbsp;)";
      
      li.innerHTML = '<a href="#" id="' + index + '">' + completedStr + "&nbsp;&nbsp;" + item.text + '</a>';
      
      //3. Create the delete button
      let deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'deleteButton');
      deleteBtn.setAttribute('id', index);
      deleteBtn.innerHTML = '&#x1F5D1;';

      //4. Append the Button to the LI
      li.appendChild(deleteBtn);

      //5. Append the LI to the UL
      ul.appendChild(li);
      
    }); //END
    
  }

};


/* EVENTS OBJECT
 * Specialty: listen to events
-----------------------------------------------*/
let listen = {

  ulEvents: function() {

    const ul = document.querySelector("#todo-list");

    ul.addEventListener('click', function(event) {

      //Get the Event Target
      const elemClicked = event.target;
      // console.log("I just clicked the ", elemClicked.tagName);

      //IF clicked element is a BUTTON tag
      if(elemClicked.tagName === 'BUTTON') {
        // console.log(elemClicked.id);
        if(confirm(`Are you sure to delete the index n° ${elemClicked.id} ?`)) {
          todos.deleteTodo(elemClicked.id);
        }
      }

      //IF clicked element is a A tag
      if(elemClicked.tagName === 'A') {
        event.preventDefault();
        todos.toggleTodo(elemClicked.id);
      }

    });

  }

}


/* MESSAGE OBJECT
 * Specialty: show messages to the user
 * message.show(); or message.hide();
-----------------------------------------------*/
let message = {

  //DOM objects
  msgElem: document.querySelector("#msg"),
  msgElemIcon: document.querySelector("#msgIcon"),
  msgElemText: document.querySelector("#msgText"),

  //SHOW MESSAGE
  show: function(msgStr, msgType = 'error') {

    this.msgElem.classList.remove('error', 'info');

    let typeClass = (msgType === 'error') ? 'error' : 'info';
    let typeIcon = (msgType === 'error') ? '&#9888;' : '&#9432;';
    
    this.msgElem.classList.add(typeClass);
    this.msgElemIcon.innerHTML = typeIcon;
    this.msgElemText.innerHTML = msgStr;

    this.msgElem.classList.remove('hidden');

  },

  //HIDE MESSAGE
  hide: function() {
    this.msgElem.classList.add('hidden');
  }

}



listen.ulEvents();
view.displayTodos();


//Before ES2015 New syntax
function age1(birthYear){
  let currentYear = new Date().getFullYear();
  return currentYear - birthYear; // will return the age 
}

// console.log( age1(1997))
//ES2015 New syntax
let age2 =(birthYear) => { return 2019 - birthYear };
// console.log( age2(1997))

//When having 1 argument and  one line of code
let age3 = birthYear => 2019 - birthYear;
// console.log( age3(1997))

//When having 2 or more arguments and one line of code
let age4 = (currentYear, birthYear) => currentYear - birthYear;
// console.log( age4(2019, 1997));

//When having 2 or more lines of code
let age5 = (birthYear) =>{
  let currentYear = new Date().getFullYear();
  return currentYear - birthYear; // will return the age 
}
// console.log( age5(1997));

//A funtion without any arguments
function bob(){
  return "I'm Bob !"
};
// console.log( bob() );

// let bob1 = () => "I'm Bob !"; console.log( bob1() );
// let bob2 = "I'm Bob !"; console.log( bob2() );

//ES2015 Template Literals
let n = 45;
let name = "Dolores";
//My name is Dolores and I'm 45 years old.;

//The classic way to concatenate strings and variables
let phrase = "My name is " + name +" and I'm " + n +" years old";
console.log(phrase);

//The new way with template literals
let newPhrase = `My name is ${name} and I'm ${n} years old.`;
console.log(newPhrase);



//WHAT POP-UP BOXES IN JS ?
// alert("Go planet !");

// confirm("Are your sure ?");
// if( confirm("Are your sure ?") ) {
//   alert("Yes you are !");
// }
// else {
//   alert("I knew it, you are scared !");
// }

// prompt("What's your name ?");
