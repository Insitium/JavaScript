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
let i = 100;
do{
    console.log(i);
    i++;
}while(i<10);