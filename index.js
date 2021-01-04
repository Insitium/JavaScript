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
function myFunction(a,b)
{
    console.log(a);
    console.log(b);
}
myFunction(10,5); //10 5

myFunction(true, null);

myFunction();

myFunction("abc");

console.log(myFunction(4,3)); // 4 3 ubdefined because it does not return anything

