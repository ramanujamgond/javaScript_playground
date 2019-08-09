// let number = [1, 4, 8, 9, 10, 56, 2, 18, 6, 7];

//console.log(number[8]);

// number = number.pop('56');
// console.log(number);

// javaScript data types

// undefined, null, number, string, boolean, symbol, object

// concatination

// let val = 12;

// vals = '12' + 8 + val;

// console.log(typeof(vals));

// Bracket notation
// let name = 'Ramanujam';

// let nameValue = name[7];

// console.log(nameValue);

// String literals manupulation

// let val = ['Ramanujam', 'Test', 'Sky', 'Lake'];
// val[2] = 'T';

// console.log(val);

// let greattings = 'Jello sky';

// greattings = 'Blue Sky';

// console.log(greattings);

// Extract last value in a string

// let name = "Ramanujam";

// name = name[name.length - 7];

// console.log(name);

// nested array

// let array = [[1, 3, [2, 6]], [34, 89, [34, 87, 225], [67, 122, 099, 2]], [122], 7, 9];

// console.log(array[4]);

// let array = [1, 2, 3];
// array[1] = 'Ramanujam';

// console.log(array);

// function addFive(val) {
//     // val += 5
//     return val += 5
// }

// console.log(addFive(5));

// Array test

// let array = [1, 56, 89, 56, 2, 6];

// let value = JSON.stringify(array);

// console.log(typeof(value));

// function testSize(num) {
//     if (num < 5) {
//         return 'Tiny';
//     } else if (num < 10) {
//         return 'Small';
//     } else if (num < 15) {
//         return 'Medium';
//     } else if (num < 20) {
//         return 'Large';
//     } else if (num >= 20) {
//         return "Huge"
//     } else {
//         return "Invalid Input!"
//     }
// }

// console.log(testSize(8));

// var names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];

// function golfScore(par, stroke) {
//     if (stroke == 1) {
//         return names[0];
//     } else if (stroke <= (par -2)) {
//         return names[1];
//     } else if (stroke == (par -1)) {
//         return names[2];
//     } else if (stroke == par) {
//         return names[3];
//     } else if (stroke == (par + 1)) {
//         return names[4];
//     } else if (stroke == (par + 2)) {
//         return names[5];
//     } else if (stroke >= (par + 3)) {
//         return names[6];
//     } else {
//         return 'Invalid Input';
//     }
// }

// console.log(golfScore(4, 4));

// function caseInSwitch(val) {
//     var answer = '';
//     switch(val) {
//         case 1:
//             answer = 'alpha';
//             break;

//         case 2:
//             answer = 'beta';
//             break;
//         case 3:
//             answer = 'gamma';
//             break;
//         case 4:
//             answer = 'delta';
//             break;
//         default:
//             answer = 'Invalid Input!';
//     }
//     return answer;
// }

// console.log(caseInSwitch(4));

// function caseInSwitch(val) {
//     var answer = '';
//     switch(val) {
//         case 'bob':
//             answer = 'Marley';
//             break;
//         case 42:
//             answer = 'The Answer';
//             break;
//         case 1:
//             answer = 'There is no #1';
//             break;
//         case 99:
//             answer = 'Missed me by this much!';
//             break;
//         case 7:
//             answer = 'Ate Nine';
//             break;
//         default:
//             answer = 'Invalid Input!';
//     }
//     return answer;
// }

// console.log(caseInSwitch(1));

// function numberTest(a, b) {
//     if (a < 0 || b < 0) {
//         return undefined;
//     }
// }

// console.log(numberTest(-2, 2));

// var testObj = {
//     "first name": "Ramanujam",
//     "Hobby": "Computers",
//     "age": 27
// };

// console.log(testObj['first name']);

// var testObj =  {
//     'name' : 'halen',
//     'age': 26,
//     12: 'sky'
// };

// delete testObj.name;

// testObj.lastName = 'kate';
// testObj['hobby'] = 'reading';

// var firstName = 12;

// console.log(testObj[firstName]);

// console.log(testObj);

// function phoneeticLookup(val) {
//     var result = "";

//     var lookup = {
//         'alpha': 'Adams',
//         'bravo': 'Boston',
//         'charlie': 'Chicago',
//         'delta': 'Denver',
//         'echo': 'Easy',
//         'foxtrot': 'Frank'
//     }

//     result = lookup[val];
//     return result;
// }

// console.log(phoneeticLookup('alpha'));

// var objValue = {
//     gift: 'Santa',
//     ice: 'Ice Cream',
//     hot: 'Sun'
// };

// function checkObjProperty(checkProp) {
//     if (objValue.hasOwnProperty(checkProp)) {
//         return objValue[checkProp];
//     } else {
//         return 'Not Found!';
//     }
// }

// console.log(checkObjProperty('ice'));

// var myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };

// var gloveBoxContents = myStorage.car.inside['glove box'];

// console.log(gloveBoxContents);

// var myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];


// var secondTree = myPlants[1].list[2];
// console.log(secondTree);

// var collection = {
//     "2548": {
//         "album": "Slippery When Wet",
//         "artist": "Bon Jovi",
//         "tracks": [
//             "Let It Rock",
//             "You Give Love a Bad Name"
//         ]
//     },
//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245": {
//         "artist": "Robert Palmer",
//         "tracks": []
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }
// };

// var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value) {
//     if(value === "") {
//         delete collection[id][props];
//     } else if (prop === "tracks") {
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     } else {
//         collection[id][prop] = value;
//     }
//     return collection;
// }

// console.log(updateRecords(5439, "artist", "ABBA"));

// var myArray = [];

// var num = 0;

// while(num <= 4) {
//     myArray.push(num);
//     num++;
// }

// console.log(myArray);

// var oddArray = [];

// for (var i = 0; i <= 20; i++) {
//     if(i % 2 !== 0) {
//         oddArray.push(i);
//     }
// }

// console.log(oddArray);

// for (var i = 10; i >= 0; i--) {
//     if(i % 2 !== 0) {
//         oddArray.push(i);
//     }
// }

// console.log(oddArray);

// var myArr = [2, 3, 4, 5, 6, 7, 8];
// var storeArray = 0;

// for (var i = 0; i < myArr.length; i++) {
//     storeArray += myArr[i];
// }

// console.log(storeArray);

// function multiplyAll(arr) {
//     var product = 1;
//     for (var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
//     }
//     return product
// }

// var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// console.log(product);

// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potteer",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName":  "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];

// function lookupProfile(name, prop) {
//     for (var i=0; i < contacts.length; i++) {
//         if (name === contacts[i].firstName) {
//             return contacts[i][prop] || "No such property";
//         }
//     }
//     return "No such contacts"
// }

// var data = lookupProfile("Kristian", "lastName");

// console.log(data);

// function randomNumber() {
//     return Math.floor(Math.random() * 10);
// }

// console.log(randomNumber());

//Generate Random Number Between a Range

min = 10;
max = 16;

function randomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + 1) + min;
}

console.log(randomNumber(min, max));