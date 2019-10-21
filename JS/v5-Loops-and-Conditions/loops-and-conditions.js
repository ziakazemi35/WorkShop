//Conditon : what to do depending on the weather
// let weather = "sunny"; //sunny, rainy, cloudy, snowing

// if (weather == "snowing") {
//   console.log("Take your sun glasses");
// }
// else if (weather == "rainy") {
//   console.log("Take your umbrella");
// }
// {
// if (weather == "snowing") {
//   console.log("Take your jacket");
// }

// else {
//   console.log("Don't know yet");
// }


//AGE CONDITIONS
function calculateAge(birthYear){
}
  
//   let currentYear = new Date ().getFullYear();
//   let age = currentYear - birthYear ;
//   let msg = "";



//   if(age < 6){
//     msg = "DRINK YOUR MILK";
//   }

// else if(age >= 6 && age < 18){
//     msg = "GO TO SLEEP,";
//   }
// else if (age >= 18 && age < 40){
//     msg = "JUST WORK HARD YOU CAN DO IT ";
//   }

// else if (age > 65){
//   msg = "DON'T FORGET TO TAKE YOUR PILLS!";
// }

// else if (age >= 40 && age <= 65){
//   msg = "YOU WON 1 MILLION DOLLARS ";
// }

// else {
//   msg = "LET'S PARTY GUYZ!";
// }
//   return "YOU ARE " + age +" YEARS OLD " +": " + msg; //YOU HAVE 53: LET'S PARTY GUYZ!

// }

// console.log( calculateAge(1997) ); //22
// console.log( calculateAge(1956) ); //63
// console.log( calculateAge(2002) ); //17
// console.log( calculateAge(1945) ); //74
// console.log( calculateAge(2013) ); //6

// //WEATHER RAINY OR CLOUDY
// let weather = "rainy"
// if(weather == "rainy" || weather == "cloudy") {
//   return ("TAKE YOUR JACKET");
// }



//COMPARAISON OPERATORS
/*
==  //=> equality
=== //=> strict equality
|| //OR
&& //AND
> //GREATER THAN
>= //

<= *///////



//LOOPS --------------------------------------------------
// let num = 100;

//FOR LOOP
// for (let i = 1; i <= num; i++) {
//   console.log(i);

// }

let names = ["boro gum sho", "khar", "sag", "pishi", "koba la de 7", "gaw"];
// console.log( names.length );

//FOR LOOP WITH ARRAY LENGHT
// for(let i = 0; i <= 5; i++){
//   console.log( names[i] );
// }




// FOREACH LOOP - with a anonymus function
// names.forEach(function (item, index){
//   console.log( item,index);
// });

//FOREACH LOOP - WITH A CUSTOM FUNCTION
// function iterateNames(item){
//   console.log(item);
// }

//CALL the custom function on each loop
// names.forEach(iterateNames);

//EXCERSICE : LOOP INSIDE AN ARRAY CONTAINING OBJECTS
let newTodos = [
  {
    text: "Item 1",
    completed: true
  },
  {
    text: "Item 2",
    completed: true
  },
  {
    text: "Item 3",
    completed: true
  },
  {
    text: "Item 4",
    completed: false
  }
];


//USE "FOR" TO DISPLAY THE TEXTS
// for(let i = 0; i <newTodos.length; i++){
//   console.log( newTodos[i].text );
// }

//USE "FOREACH" TO DISPLAY THE TEXTS
newTodos.forEach(function (item){

//CLASSIC APPROACH
let completedStr = "( )";

// EQUAL SIGN IS MUST ==true 
    if (item.completed ==true){
      completedStr = "(x)";
  }

//TERNARY OPERATOR APPROACH
  // let completedStr = (item.completed) ? "(x)" : "( )";

  // console.log(completedStr,item.text)
})
