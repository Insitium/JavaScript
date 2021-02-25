//pass by value
/*function myFunction(parameterA){
    parameterA = 20;
    return parameterA;
}
const a = 10;
myFunction(12);
*/
//pass by reference

/*const myArray = [1,2,3];
console.log(myArray);
function myFunction(arr){
    console.log(arr === myArray);
    arr.push(4);
    console.log(arr);
    return arr; 
}

myFunction(myArray);
console.log(myArray);*/
// challenge
/*function addCustomGlobalMethod(globalObject){
    globalObject.customMethod = function(){
        console.log("greeitngs from thew custom method") 
    };
}

addCustomGlobalMethod(this);
console.log(this == window); true

console.log(typeof window)
this.customMethod();    // greeting from the custom method
customMethod();     //GREETING FROM THE CUSTOM method
*/


//IIFE -Immediately invoked functionm expression
//option 1
/*(function(globalObject){
    globalObject.customMethod = function(){
        console.log("Greeting from the custom method");
    };
})(this);
*/

//option2
/*(function(){
    this.customMethod = function(){
        console.log("Greetings from the custom method");
    };
})();
*/

//option3
/*(() =>{
    this.customMethod = function(){
        console.log("Greetings from the custom method");
    };
})();
*/



console.log(this === window);   //true
console.log(typeof window); // object

this.customMethod();    // greeting from the custom method