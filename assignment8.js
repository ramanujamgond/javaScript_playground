// Remove the Canada from the above array ["US","Canada","Sri lanka","Bhutan"];
var countryArray = ["US","Canada","Sri lanka","Bhutan"];

for(var i = 0; i < countryArray.length; i++) {
    if(countryArray[i] === "Canada") {
        countryArray.splice(i, 1);
    }
}

console.log(countryArray);