/**
 * Challenge 1
 */
/**
 * task 1
 */
/*const myObject = {
    key1: true,
    key5: 10,
    key3:"abc",
    key4: null,
    key10: NaN
};
for (let key in myObject)
{
    if(key === "key1" || key==="key3")
    {
        console.log(myObject[key]);
    }
}*/

/**
 * task 2
 * generatenew 4 digit random number
 * ensure taht this new random number does not match any existing number of the array
 * range is between 1000 and 9999
 */
const myNumbers = [
    2355,
    1342,
    3546,
    5423,
    6425,
    3566
];
let newRandomNumber;
let check = 0;
/*while(true){
    newRandomNumber = Math.floor((Math.random()+1) * 1000);
    for(let i = 0; i<myNumbers.length; i++){
        if(newRandomNumber !== myNumbers[i]){
            check = 1;
            break;
        }
        
    }
    if(check = 1){
        break;
    }
}
console.log(newRandomNumber);*/

/*//using functions
function getRandomInt(){
    return Math.floor((Math.random()+1)*1000);
}
function isNotUnique(newRandomNumber){
    //compare num with numbers in the MyNumbers array
    for(let number of myNumbers){
        if(number === newRandomNumber){
            console.log(newRandomNumber+" is not unique"); 
            return true;
        }
    }
    //ti will return undefined here if we wont add return false which in turn would work teh same for while loop
}
do{
    newRandomNumber = getRandomInt();
}while(isNotUnique(newRandomNumber));
myNumbers.push(newRandomNumber);
console.log(myNumbers);*/

