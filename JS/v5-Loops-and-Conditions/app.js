//START TODOS OBJECT
let todos={
  list : [
    {
      text:"learn HTML",
      completed: true
    },
    {
      text:"learn CSS",
      completed: true
    },
    {
      text:"learn JS",
      completed: false
    },
    {
      text:"learn PHP",
      completed: false
    }],
    displayTodos: function(){


      if(this.list.length == 0){
        console.log("inside the conditon");
        console.log ("I am the hero man come on man trust me");
        
      }
      

      this.list.forEach(function (item){
        let completedStr = (item.completed) ? "(X)": "( )";
        console.log(completedStr, item.text);
        });
      
      
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
    },
    


}


};//END OBJECT todos

todos.displayTodos();