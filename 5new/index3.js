/**
 * challenge 2
 */
/**let myObject = {a:10};
let copyOfMyObject = myObject;
copyOfMyObject.b = false;
console.log(myObject);
console.log(copyOfMyObject);

//Object is a reference type 
let myObject2 = {
    a:true,
    b:null,
    c:25
};
console.log(myObject2["a"]);
//console.log(myObject2[a]); //Uncaught ReferenceError: a is not defined
console.log(myObject2["b"]);

const propertyName ="c";
console.log(myObject2[propertyName]);
console.log(myObject2["propertyName"]); // undefined
console.log(myObject2);

myObject2["new" + "Property" + "Name"] = "value for dynamically computed property name";
console.log(myObject2);*/
/**
 * example 4 
 * missing properties
 */
/**const myObject = {
    a:3,
    b:true,
};
console.log(myObject.c); //undefined
console.log(myObject.absentProperty);//undefined
//console.log(nonDeclaredVariable); //Uncaught ReferenceError: nonDeclaredVariable is not defined

//never assign "undefined" to any peoperty or variable. Use "null" instead
myObject.newPropertyWithUndefinedValue = undefined;
console.log(myObject);
console.log(myObject.newPropertyWithUndefinedValue);*/

/**
 * challenge 3
 */
/**let objectWithNestedObject = {};
objectWithNestedObject.nestedObject = {};
objectWithNestedObject.nestedObject.a= null;

objectWithNestedObject.nestedObject["b"] = true;
objectWithNestedObject.name = "sarthak";
console.log(objectWithNestedObject);*/


//Methods keeps function as a property value
const mycity = {
    city : "New york",
    cityGreeting: function(){
        console.log("Greetings!!");
    }
};
mycity.cityGreeting();