//8ExpressionsVsStatements
//expressions
/*10
"abc"
5+3
;(function(a){
    console.log(a);})
//immediately invoked function expression
;(function (){
    console.log("hello from IIFE");
})()
let a;
a = 10

//5 = true  //Uncaught SyntaxError: Invalid left-hand side in assignment

4<= 30<= 20 || 5  //true
*/
/**
 *Statements
 */
let a;      //variable declaration is statement
a = 3;
function myFunction(a){
    // return is a statement not expression
    //console.log(return b);      //Uncaught SyntaxError: Unexpected token 'return'
    return a;
}
myFunction(a)
if(true)
{
    console.log("Hello from 'if' statement");
}
//LESSON 11 - SYNCHRONOUS CODE EXECUTION


//challenge 1
// create a function "waitingFn" witrh a single parameter "timeInMs" and inside of the function create "while" loop and this loop whould be running during "timeInMs".
// AdvancedTopics
