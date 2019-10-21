let todoList = ["Item 1", "Item 2", "Item 3"];

//Call an array item with the index.
//Indexes starts with 0 (zero)
todoList[1]; //output: "Item 2"
todoList[0]; //output: "Item 1"

//ADD an array item (.push)
todoList.push("Item 4");
todoList.push("I'm an element of the array");

//DELETE an Array item ()
todolist.splice(1,1); //start at index 1 and delete one item
todolist.splice(0,2); // start at index zero adn delete 2 items

//CHANGE  an Array item
todoList[1]= "something else";