//example 1
//global execution context
/**console.log("This is global execution context");
const a = 10;
console.log(a);

function myFunction(a,b){
    console.log("This is function execution context");
    return a+b;
}
console.log(myFunction(5,10));
console.log(myFunction(5,"HI"));

console.log(myFunction(3,5));
*/


// example 2 - execution context stack
console.log("Global contsxt -- root level in the stack");

function firstLevel(){
    console.log("Function context - second level in the stack");

    function secondLevel(){
        console.log("Function context - third level in the stack");
    }

    secondLevel();
}
firstLevel();