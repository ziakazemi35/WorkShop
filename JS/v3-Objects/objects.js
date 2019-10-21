//A SIMPLE OBJECT
let simpleObject = {

  myNumber    : 76,
  myString    : "ahmad is stupid",
  myArray     :  [2,3,4,"bla"],
  myFunction  : function() {
    return "Something from a function"
  },
  newObject  : {
    Name    : "Zia",
    Country : "Afghanistan",
  }
};

// console.log("My object:", simpleObject);
// console.log( "My number:", simpleObject.myNumber);
// console.log( "My array:", simpleObject.myArray);

// console.log( "My function:", simpleObject.myFunction);

// console.log("My Name:", simpleObject.newObject.Name);
// console.log("My Country:", simpleObject.newObject.Country);

//MY PERSONS OBJECT

let cardObject = {
  
  personCard1 : {

    Name          : "Mohammad Zia Kazemi",
    Country       : "Switzerland",
    Permit        : "F",
    City          : "Fribourg"

  }, //PERSON CARD 1 CLOSE TAG

  personCard2 : {

    Name          : "Ahmad",
    Country       : "Switzerland",
    Permit        : "B",
    City          : "Yeverdon"

  } //PERSON CARD 2 CLOSE TAG

} //CARD OBJECT CLOSE TAG


//CONSOLE PERSON CARD 1
console.log ("Name : ", cardObject.personCard1.Name)
console.log ("Country : ", cardObject.personCard1.Country)
console.log ("Permit : ", cardObject.personCard1.Permit)
console.log ("City : ", cardObject.personCard1.City)
//CONSOLE PERSON CARD 1
console.log ("Name : ", cardObject.personCard2.Name)
console.log ("Country : ", cardObject.personCard2.Country)
console.log ("Permit : ", cardObject.personCard2.Permit)
console.log ("City : ", cardObject.personCard2.City)
