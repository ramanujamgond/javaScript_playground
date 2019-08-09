// Create an array of 10 elements of your own and Print all the data using loop and Insert a new element in the end and remove the last element from array.Using the push ,pop and map method
var numArray = [1, 2, 4, 6, 7, 19, 20, 32, 78, 18, 22, 27, 28];

// Print array elements using loop
var i = 0;
while(i < numArray.length) {
    console.log(numArray[i]);
    i++;
}

// Insert an element at end of the array
numArray.push('Ramanujam');
console.log(numArray);

// Remove an elemnt from the end of the array
numArray.pop();
console.log(numArray);

// Dispaly array elements using map method
var newArray = numArray.map(function(val, index) {
        return val;
})

// console.log(typeof(JSON.stringify(newArray)));
console.log(newArray);