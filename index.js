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
const myArray = [1,2,3];
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
console.log(myArray);