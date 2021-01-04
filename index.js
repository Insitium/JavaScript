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
function outerFunction(a,b){
    function innerFunction(c)
    {
        return c*c;
    }
    const sum = a+b;
    const result = innerFunction(sum);

    console.log(result);
}
outerFunction(2,3);