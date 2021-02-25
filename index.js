/**
 * call - custom this
 */
/*const myObject = {
    a: 10,
    b: null
};
function myFunction(){
    console.log(this);
}

myFunction();

myFunction.call(myObject);*/

//Example 2
/*const myObject = {
    a: 10,
    b: null
};
function myFunction(a,b){
    console.log(a+b);
    console.log(this);
}

myFunction();

myFunction.call(myObject, 10,3);*/

//Exapmle 3 - Call method of the object with other object as "this"
/*const person1 = {
    city: "ny",
    name: "bob",
    info: function(){
        console.log(this.name+" lives in "+this.city);
    }
};

const person2 = {
    city: "Paris",
    name: "Alice"
};
person1.info(); //bob lives in ny

person1.info.call(person2); //Alice lives in Paris
*/

/**
 * Example 4 -Apply method an custon "this" arguments
 */
/*const myObject = {
    a: 10,
    b: null
};
function myFunction(a,b,c){
    let sum = a+b+c;
    //console.log(this);
    for (let key in this){
        if(typeof this[key] == "number"){
            sum+= this[key];
        }
    }
    console.log(sum);
}

myFunction.apply(myObject,[10, 3, 5]);
*/  
/**
 * Example 5 "Bind"
 */
const myObject = {
    a: 10,
    b: null
};
function myFunction(a,b){
    console.log(a+b);
    console.log(this);
}


const customFunction = myFunction.bind(myObject, 10,3);//reset "this" and both arguments
customFunction();

const customFunction2 = myFunction.bind(myObject);
customFunction2(20,6);
const customFunction3 = myFunction.bind(myObject,10);
customFunction3(30);// we passed the remaining argument

