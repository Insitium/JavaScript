 7operators
/**
 * Section 1
 * Srithmetic operators
 */
/**let a, b;
a = 1;
b = 2;

console.log(a+b);
console.log(a * b);
console.log(a / b);
console.log(a - b);

a = "abc";
b = 5;
console.log(a+b);
console.log(a * b); //NaN
console.log(a / b); //NaN
console.log(a - b); //NaN

a = "Hello";
b = "world";
console.log(a + " "+b);


//unary plus
let c = "1";
console.log(+c);    //+ converted the string to number 1
console.log(Number(c)); //1
c = undefined;
console.log(+c);    //NaN

//unary minus
c = "5";
console.log(-c);    //-5

c = "abc";
console.log(-c);    //NaN

//++ operator
let d = 5;
++d;
console.log(d); //6
d++;
console.log(d); //7
//++d increments the value first and then return the value 
// d++ returns the value and then increments the value
console.log(++d);   //8
console.log(d++);   //8
console.log(d); //9

//--  operator
d--;
console.log(d); //8
console.log(--d);   //7
console.log(d--);   //7
console.log(d);     //6
*/

/**
 * Section 2
 * comparison operators
 */
/**console.log("----------------");
let a, b;
a = 5;
b = 7;
console.log(a < b); //true
console.log(a >b);      //false
//we compare strings according to their lexical order and lower case letters come before the upper case ones
let mystr1, mystr2, mystr3;
mystr1 = "abc";
mystr2 = "bcd";
mystr3 = "Bcd";
console.log(mystr1 > mystr2);   //false
console.log(mystr1 < mystr2);   //true
console.log(mystr1 > mystr3);   // true

//sorted strings are "Bcd", "abc","bcd" in ascending order
console.log("-------------------");


//equality operators
let myString = "0";
let myNumber = 0;
let myBoolean = false;
console.log(myString == myNumber);  //true
console.log(myString === myNumber); // false
//strict equality operator

console.log(myString != myNumber); // false
console.log(myString !== myNumber); //true

console.log("-------------");

console.log(null === undefined);        // false
console.log(null == undefined);     // true

console.log("-------------");

console.log(0 === "" === null === undefined === false);     // true beccause it has assocoiativity left to right
/**
 * it goes like 
 * 0 === "" //false
 * false ===null    //false
 * false === undefined  //false
 * false === false      //true
 */

 /*** Section 3
  * logical operators
  */
//goes left to right
// or try to make everything true so it keeps on going until finding true
/**console.log("abc" || "");   //abc
console.log(""||"abc");     //abc 
// it tried to convert empty string and concluded false so it went to the next string
console.log(""||"");        //""        empty string
console.log(""|| 0 || null|| undefined || NaN || false);
let city;
const defaultCity = "New York";
let myCity = city || defaultCity;
console.log(city || defaultCity);   
console.log(myCity);

myCity = city || console.log("Fill in city please") || defaultCity; 
console.log(myCity);

city = "Los Angeles";
console.log(city || defaultCity);   // Los Angeles      // because it chcked the first operand on th eleft and found it so computed the result without going further
*/

//&& operator
/**console.log(true && false);
console.log("abc" && 10 && false && "" && "abcd");  //false
/* it will go like
abd && 10 will give true
true and false will give false
and since it has found false it will return the first false
*/
//And returns the value of the first false operand
/**console.log("abc" && 10 && NaN && "" && "abcd");  //NaN
console.log("abc" && 10 && "" && "abcd"); //""

//All operands are true
console.log("abc" && 10 && true && 123 && "string");  //string
// since all operands are true so the value of the last operand is given as output
console.log("Abc" && 10 && true && 123 && "Hello world");   // Hello world


// NOT operator --!
console.log("-----------------");

console.log(!"Abc");    //false
console.log("");    //""
//empty string has false value and !false = true
console.log(!0);    //true

let myVariable = undefined;
console.log(!myVariable);
myVariable = "sarthak";
console.log(!myVariable);   //false

// quick true false check
myVariable = null;
console.log(!!myVariable);      //false  
myVariable = 10; 
console.log(!!myVariable);    //true
*/


/**
 * Section 4
 * operators precedence
 */
/**console.log(2 + 4 * 10);    //42
console.log((2+4) * 10);   //60


let a;
a = 1;

a = a + 5;     //first we will call "+"" operator and then the assignment operator
console.log(a);   //6
*/
/** 
 * Section 5
 * operators associativity
 */
/*let a, b;
b = 3;
a = b = 5;    //this has right to left associativity
console.log(a,b);   //5 5
console.log(4+ 5+ 6);   //15    left to right
console.log(5 * 10 / 2 / 5);    // left to right // * and / bas same precedence
*/

/**
 * challlenge
 */
/**let myVariable1 = 5, myVariable2 = "10";
console.log(!!(+myVariable1<= +myVariable2));

/**
 * task 2
 */
/*let myNumber1 = 10;
let myNumber2 = 3;
console.log(10 % 3);
*/

/** 
 * task 3
 */
//console.log(3 || true && null || false);    //""
// && has more precedence so true && null = null
// then from left to right 3 || null || false is left --> 3|| null = 3 -->3||false = 3
/**
 * task 4
 */
/**let a = 5;
a+=1;
a*=2;
a-=5;
a/=2; 
*/
=======
10Arrays
//Array
/**const myArray = [1,2,3];
console.log(myArray);

const myArray2 = new Array(1,2,3);
console.log(myArray2);
console.log(myArray[1]);        //2
console.log(myArray.length);    //3

myArray[2] = 23;
console.log(myArray);

myArray[3] = 43;        //new palce would be created in the array
console.log(myArray);

myArray[5] = 55;        //new place would be created at 5th position and 4th positin will be names empty
console.log(myArray);
*/
//Array methods
/**const myArray = [1,2,3];
console.log(myArray);

myArray.push(4);
myArray.push(true);
console.log(myArray);      // [1, 2, 3, 4, true]


//pop
myArray.pop();

const removedElement = myArray.pop();
console.log(myArray);
console.log(removedElement);

//shift
myArray.shift();
const shiftRemovedElement = myArray.shift();
console.log(myArray);
console.log(shiftRemovedElement);

//unshift
myArray.unshift(2);
myArray.unshift(1);
console.log(myArray);*/

/**
 * Example 1
 */
//const myArray = [];
//console.log(myArray);

/**
 * Example 2
 */
/**const myArray = [];
myArray[0] = "first element";
console.log(myArray);

myArray[1] = "Second element";
console.log(myArray);

myArray.push("third element");
console.log(myArray);
*/
/**const myArray = [3, true, "abc",{}];
console.log(myArray);
myArray[1] = "newvalue for second element";
console.log(myArray);

myArray[3].newProp = 10;
console.log(myArray);
console.log(myArray[3].newProp);
console.log(myArray[3]["newProp"]);*/


/**
 * Example 4
 */
/**const myArray = [1,2];
console.log(myArray[0]);
//if the property name in the object is numeric then you cant use . notation
//console.log(myArray.0);     //Uncaught SyntaxError: missing ) after argument list
*/

/**
 * examplpe 5
 * delete elements
 */
/**const myArray = [true, null, 1,2,"abc"];
console.log(myArray);

delete myArray[2];
console.log(myArray);
console.log(myArray[2]);

myArray.pop();
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.shift();
console.log(myArray);*/
/**
 * exapmle 6
 */
/*const myArray1 = [1, 2, 3];
const myArray2 = [1, 2, 3];
console.log(myArray1 === myArray2);     // false
console.log(myArray1 == myArray2);     // fasle
//because theya rwe the pointerso fthe object and every pointer is different;

const copyOfMyarray1 = myArray1;
console.log(copyOfMyarray1 === myArray1);       //true
//because we have copied the same pointers and they are same since we have copied them

//Way to compare two arrays
console.log(myArray1.toString() === myArray2.toString());       //will show the exact comparison
*/
/**
 * Challenge 1
 */
/**const myArray = [true , null];
myArray.unshift("Hello");
myArray.unshift(100);
console.log(myArray);*/

/**
 * Challenge 2
 */
/*const myArray = [1, 2];
myArray[10] = "abc";
console.log(myArray);
console.log(myArray.length);*/

/**
 * challenge 3
 */
const myArray = [{name: "camry", brand:"toyota"}, {name:"wagonr", brand: "Suzuki"}, {car:"tata", brand:"nexon"}];
console.log(myArray);
myArray.push({name: "model3", brand: "tesla"});
console.log(myArray);

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

