//Array
const myArray = [1,2,3];
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
