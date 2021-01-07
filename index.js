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
