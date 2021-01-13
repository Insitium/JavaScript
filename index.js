/**
 * Exapmle 1
 */
/*for(let i = 0; i<5 ; i++){
    console.log(i);
}*/
/**
 * Exapmle 2
 */
/*const myArray = [0, true, "abc", null];
for(let i = 0; i<myArray.length; i++){
    console.log(myArray[i]);
}*/
//but we can only use dot notation if the peoperty is defined explicitly
/*const myArray = [0, true, "abc", null];
myArray.i = "Hello, this is one more proeprty";
for(let i = 0; i< myArray.length; i++)
{
    console.log(myArray.i)
}
console.log(myArray);*/

/**
 * Exapmle 3
 */
/*let i = 0;
while(i >-5){
    console.log(i);
    i--;
}*/

// wehn we want one action to be performed atleast once then we use do while loop
/*let i = 100;
do{
    console.log(i);
    i++;
}while(i<10);*/

/**
 * Example 5
 * for loops with objects
 */
/*const myObjects = {
    a: "abc",
    b:true,
    c:null,
    d:150
};
for(let key in myObjects){
    console.log(key);
    console.log(myObjects[key]);
    console.log("---------");
}*/

/**
 * Example 6
 * for loops with objects with imherited objects
 */
/*const myObjects = {
    a: "abc",
    b:true,
    c:null,
    d:150
};
Object.prototype.globalProp = "Inherited property";     //adds a property to the object like we have proto
for(let key in myObjects){
    console.log(key, myObjects[key]);
}*/

/**
 * Example 7
 * for in loop with arrays
 */
/*const myArray = [true, {}, {} ,10];
Array.prototype.globalProp = "Global array property";
for(let key in myArray){
    console.log(key , myArray[key])
}*/

/**
 * Example 8 
 * for of loop with arrays
 */
/*const persons = [{
    name: "Mike",
    age: 25
},
{chrome
    name:"bob",
    age:30
},{name:"Alice", age:27}
]
for(let person of persons){
    console.log(person.name +  " is "+person.age + " years old");
}*/


/**
 * Switch statements
 */
/*switch(Expression){
    case A:
        // Action if expression == A
        break;
    case B:
        //actions if Expression == B
        break;
    default:
        //default actions
}*/
/**
 * Example
 */
/*let month = 2;
switch (month){
    case 1:
        console.log("It is december");
        break;
    case 2:
        console.log("January");
        break;
    case 3:
        console.log("february");
        break;
    default:
        console.log("Not a winter month");
}*/

/**
 * Ternary operators
 */
//condition ? Expression1 : Expression2
/**
 * or
condition
    ? Expression1
    : Expression2
 */
/*let value = 11;
value
? console.log("Value is true")
: console.log("Value is false");
*/
/*let value = 11;
console.log(value>0 ? value : -value);*/


/**
 * Switch statement example
 */
/*let color = "green";
if(color === "green"){
    console.log("It is green color");
}else if (color === "Yellow"){
    console.log("Yellow color");
}else if( color === "red"){
    console.log("red color");
}else{
    console.log("Color is unknown");
}

switch(color){
    case "green":
        console.log("green color");
        break;
    case "yellow":
        console.log("yellow color");
        break;
    default:
        console.log("colorless");
        break;
}*/


/**
 * Ternary operator example
 */
/*let i = 10;
let j;

j = i < 100 ? i : 0;
console.log(j);

i >=10 && j
? console.log("true")
: console.log("false");

console.log(i);
console.log(j);*/

