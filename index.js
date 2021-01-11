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
let month = 2;
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
}