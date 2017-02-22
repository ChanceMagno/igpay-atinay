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

/********* Third Test Case *********/
/* This will take the first constant and put it at the end + ay */
/* This will take a word with a single vowel at the start and add ay to the end */
/* This will take a string of multiple constanants and save them in an array until it hits a vowel, then take the word starting at the vowel and add the constanants before the vowel plus ay. */

var string = "eipple";
var res = "";
var array = [];
var pigLatin = "";

for(i = 0; i < string.length; i++) {
	if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
  	res = string.slice(i, string.length);
    console.log(res);
  	i = string.length;
  } else {
  	array.push(string.charAt(i));
  }
}

var constants = array.join("");

pigLatin = res + constants + "ay"; // ap + str + ay

console.log("Pig Latin, " + pigLatin);
console.log("Our constants " + constants);
console.log("Our Array: " + array);
