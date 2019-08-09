// Insert "India" in the middle of the arrat given below ["US","Canada","Sri lanka","Bhutan"];
var countryArray = ["US","Canada","Sri lanka","Bhutan"];

for(var i = 0; i < countryArray.length; i++) {
    if(i === Math.floor(countryArray.length/2)) {
        countryArray.splice(i, 0, "India");
        break;
    }
}

console.log(countryArray);