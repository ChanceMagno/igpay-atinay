/********* First Test Case *********/
/* This will add ay to the end of a single vowel */

// var string = "u";
// console.log(string);
//
// if (string === "a" || string === "e" || string === "i" || string === "o" || string === "u") {
// 	string = string + "ay";
// }
//
// console.log(string);


/********* Second Test Case *********/
/* This will take the first constant and put it at the end + ay */
/* This will take a word with a single vowel at the start and add ay to the end */

var string = "barbeque";
var res = "";
console.log(string);

if (string.charAt(0) !== "a" && string.charAt(0) !== "e" && string.charAt(0) !== "i" && string.charAt(0) !== "o" && string.charAt(0) !== "u") {
	res = string.slice(1, string.length); // res = at
	res = res + string.charAt(0) + "ay"; // at + c + ay = atcay
} else {
	res = string + "ay";
}
console.log(res);
