"use strict";
/*
// function scope
function calcAge(birthYear){
    // function variable
    const age = 2021 - birthYear;
    console.log(firstName);
    function printAge(){
        const output = `You are ${age}, born in ${birthYear}`;
        console.log(output);
    }
    // block scope
    if(birthYear >= 2000 && birthYear <= 3000){
        var millenial = true;
        // const firstName = 'jehan';
        const str = `2K kids, ${firstName}`;
        console.log(str); 
        // Reassigning outer scope's
        output  = 'New OutPut!';
        function addd(a, b)
        {
            return a + b;
        }
    }
    console.log(addd(2, 3));
    console.log(millenial);
    console.log(output);
    // call sec function
    printAge();
    return age;
}
// gobal  scope
// gobal variable
const firstName = 'jehan';
calcAge(2000);
// child so Error
// console.log(age);
// printAge();
// console.log(addd(2, 3));
//_______________________________________________________________________________________________*/
/*
// console.log(me);
// console.log(job);
// console.log(year);
// undefined
var me = 'jehan';
// Cannot access 'job' before initialization
let job = 'Programmer';
// Cannot access 'year' before initialization
const year = 1991;
// Function
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
function addDecl(a, b){
    return a + b;
}
// Cannot access 'addExpr' before initialization
const addExpr = function (a, b){
    return a + b;
}
// Cannot access 'addArrow' before initialization
const addArrow = (a, b) => a + b;
// Example
console.log(numProducts);
if(!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart(){
    console.log(`All Products deleted!`);
}
var x = 5;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
//_______________________________________________________________________________________________*/
// This keyword
/*
<script>
// Create an object:
var person = {
  firstName: "Jehan",
  lastName : "Nath",
  fullName : function() {
    return this.firstName + " " + this.lastName;
	
	return firstName + " " + lastName // Not Running variable is not Defind
  }
};
person
// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
</script>
*/

//this

  console.log(this);

  let calcAge = function (birthyear){
      console.log(2017 - birthyear);
     // console.log(this);
  };
  calcAge(1991);

  const calcAgeArrow = birthyear => {
    console.log(2017 - birthyear);
    //console.log(this);
  };
  calcAgeArrow(1980);

  const jones = {
      year : 1991,
      calcAge : function() {
          console.log(this);
          console.log(2017 - this.year);
      }
  }
  jones.calcAge();

  const jehan = {
    year : 2017;
  };

  jehan.calcAge =jones.calcAge;
  jehan.calcAge();

