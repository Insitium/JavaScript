const myCity = {city : "New York"};
console.log(myCity);

myCity.popular = true;
myCity.country = "USA";
console.log(myCity);

delete myCity.country;
console.log(myCity);


//Bracket notation
const myNewCity = {city: "Toronto"};
myNewCity["popular"] = true; 
console.log(myNewCity);

const countryPropertyName = "Country";
myNewCity[countryPropertyName] = "Canada";
console.log(myNewCity);

console.log("--------New Type-------");
const thirdCity = {city: "Vancouver",
    info:{
        popular: true,
        Country: "Canada",
        province:"British columbia"
    }};
    console.log(thirdCity.info.popular);
    delete thirdCity.info["popular"];
    console.log(thirdCity);

    delete thirdCity.info.Country;
    console.log(thirdCity);

    