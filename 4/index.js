let myVariable;
console.log(myVariable); // undefined
myVariable = 10;

console.log(myVariable); //10

myVariable = true;
console.log(myVariable);// true

myVariable = {
    x: true, y:10
};
console.log(myVariable);
myVariable.y = 20;
console.log(myVariable);

//myVariable = null;  //this will break the code
myVariable.x = false;  //Uncaught TypeError: Cannot set property 'x' of null


let variable = null;
console.log(typeof variable);
variable = 15;
console.log(typeof variable);
variable = false;
console.log(typeof variable);
