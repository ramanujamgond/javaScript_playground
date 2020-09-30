// Pattern print in javascript in console
let star = "";

// ******* STAR PATTERN: 1 *******/

for(let i = 0; i < 10; i++) {
    for(let j = 10; j > i; j--) {
        star += " ";
    }
    for(let k = 0; k <= i; k++ ) {
        star += "*";
    }
}
console.log(star)

//******* STAR PATTERN: 2 *******/

// for(let i = 0 ; i < 10; i++) {
//     for (let j = 0; j < i; j++) {
//         star += " ";
//     }
//     for(let k = 10; k > i; k--) {
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star)

//******* STAR PATTERN: 3 *******/

// for(let i = 0; i < 10; i++) {
//     for(let k = 10; k > i; k--) {
//         star += " ";
//     }
//     for(let j = 0; j <= i; j++) {
//         star += "*";
//     }
//     for(let l = 0; l < i; l++) {
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star);

//******* STAR PATTERN: 4 *******/

// for(let i = 0; i < 10; i++) {
//     for(let j = 10; j > i; j--) {
//         star += " ";
//     }
//     for(let k = 0; k <= i; k++) {
//         star += "*";
//     }
//     for(let l = 0; l < i; l++) {
//         star += "*";
//     }
//     star += "\n";
// }
// for(let w = 0; w < 10; w++) {
//     for(let x = 0; x < w; x++) {
//         star += " ";
//     }
//     for(let y = 10; y > w; y--) {
//         star += "*";
//     }
//     for(let z = 10; z > w; z--) {
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star);
