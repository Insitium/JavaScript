/**function myFn(a, b){
    let c;
    a += 1;
    c = a+b;
    return c;
}
console.log(myFn(10,3));*/
/**
 * Example 1
 */
/**function myFunction(){}
myFunction();
myFunction;//ƒ myFunction(){}
const functionResult = myFunction();

console.log(functionResult);// undefined
console.log(myFunction(10, true));  //undefined
*/

/**
 * Example 2
 * parameters of the function
 */
/*function myFunction(a,b)
{
    console.log(a);
    console.log(b);
}
myFunction(10,5); //10 5

myFunction(true, null);

myFunction();

myFunction("abc");

console.log(myFunction(4,3)); // 4 3 ubdefined because it does not return anything
*/

/**
 * Example 3
 * Function Scope
 */
/**function myFunction(a,b)
{
    console.log(a,b);  
}
console.log(myFunction(3,2));

//console.log(a); // index.js:50 Uncaught ReferenceError: a is not defined
*/

/**
 * Example 5
 * add "return"
 */
/**function sum(a,b){
    return a+b;
}
console.log(sum(10,5)); // 15
console.log(sum()); // NaN
console.log(sum("abc",2));// abc2
*/

/**Example 6
 * what happens after return
 */
/**function myFunction(a){
    console.log(a);
    return a;
    console.log(a);
}
console.log(myFunction(10));*/

/**
 * Challenge 1
 */
/**funstion MediaQueryList(a,b,c){
    console.log(a*b*c);
}*/

/**
 * challenge 2
 */
/**function concatenationtrings(str1, str2)
{
    return str1+str2;
}
const str3 = concatenationtrings("Hello"," World");
console.log(str3);
*/

/**
 * Challenge 3
 * create outerFunction with 2 parameters
 */
/**function outerFunction(a,b){
    function innerFunction(c)
    {
        return c*c;
    }
    const sum = a+b;
    const result = innerFunction(sum);

    console.log(result);
}
outerFunction(2,3);
*/
/**
 * function declaration vs function expression
 */
/**function myFn(a,b){     // Function declaration
    let c;
    a++;
    c = a+b;
    return c;
}

expression = function(a,b){      //function expression being assigned to a variable
    let c;
    a++;
    c = a+b;
    return c;
}
console.log(expression(1,5));

setTimeout(function(){
    console.log("delayed message");
},2000);
// delayed message is logged to the console in 2000ms (2 sec)*/

/**
 * example 1
 * try to declare function expression
 */
//function(){} //Uncaught SyntaxError: Function statements require a function name

/**
 * Example 2
 * assign function expression to the variable
 */
/**const myFunstion = function(){};
console.log(myFunstion());     //undefined
console.log(myFunstion);    //ƒ (){}
*/
/**
 * Example 3
 * callback function
 */
/**setTimeout(function myFunction(){
    console.log("delayed message")
}, 1000);*/
/**
 * example 4
 * callback function (example 2)
 */
/**let i = 1;
setInterval(function()
{
    console.log("Message logged each 1 second "+i);
    i++;
},1000);*/

/**
 * challenge
 */
let i = 1;
const myInterval = setInterval(function() {
    console.log("Here is message number"+ i);
    i++;
}, 2000);
setTimeout(function() {
    clearInterval(myInterval);
},10000);