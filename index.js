//eXAMPLE 1
// call method
/**const myObject = {
    a:10,
    b: null
};
function myFunction(){
    console.log(this);
}
myFunction();
myFunction(myObject);
myFunction.call(myObject); //this is myObject
*/

//EXAMPLE 2
/*console.log(this);  //window
console.log(this === window);   //true
this.console.log("Method of this");


//Example 3 -- 'this inside a function'
//in strict mode
"use strict";
function myFunction(){
    console.log(this);
}

myFunction();

window.myFunction();
*/


//example 4 -- this in side of the methods of the object
/*const myObject = {
    name: "Alice",
    age: 20,
    greeting: function(){
        console.log(this);
        console.log("Name of the person is "+this.name+ " and the age is "+this.age);  //this is equal to {name: "Alice", age:20, greeting:..}
    }
};
myObject.greeting();
*/
