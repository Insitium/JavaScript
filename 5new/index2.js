console.log("----This is index2------");
/**
 * * Example 1 - Create object and modify its properties
 */
let myObject;
myObject = {
    a:10,
    b:"abc"
};
console.log(myObject);
myObject.a = 15;
console.log(myObject);
myObject.c = true;
console.log(myObject);

delete myObject.b;
console.log(myObject);
console.log(myObject.a);

console.log("--------this is challenge--------");

let myPost = {};
myPost.postTitle = "Object is reference type";
myPost.postLikes = 0;
myPost.shared = false;
myPost.postLikes+=1;
console.log(myPost);
delete myPost.shared;
console.log(myPost);

console.log("-----Another challenge-----");
const fourthObject = {};
fourthObject.a = true;
console.log(fourthObject);

fourthObject.a = 10;
console.log(fourthObject);

//fourthObject = {abc:"123"};   //Uncaught TypeError: Assignment to constant variable.

//console.log(fourthObject);

console.log("We can mutate the object variables but can not change the object itself because it is constant");