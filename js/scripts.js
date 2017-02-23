/********* First Test Case *********/
/* This will add ay to the end of a single vowel */

var string = "u";
console.log(string);

if (string === "a" || string === "e" || string === "i" || string === "o" || string === "u") {
	string = string + "ay";
}

console.log(string);


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

var string = "strap";
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


/********* Fourth Test Case *********/
// this will identify qu in a sentence and return proper piglatin-still needs to check for vowels before finding Q.

var string = "quinn";
var quEnd = "";
var qu = "";
console.log(qu);
var finalString = "";

for(i = 0; i < string.length; i++) {
	if (string.charAt(i) == "q") {
		if(string.charAt(i+1) == "u") {
    	quEnd = string.slice(i+2, string.length);
      qu = string.charAt(i) + string.charAt(i+1);
   	}
  }
 }

finalString = quEnd + qu + "ay";
console.log(finalString);


/********* Fifth Test Case *********/
// Integrated all prior code together, it will take any single word and return the proper piglatin translation

var string = "yellow";
var res = "";
var array = [];
var pigLatin = "";

for(i = 0; i < string.length; i++) {
	// if vowel is detected
	if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
  	// if the vowel u, don't break the loop
  	if (string.charAt(i) === "u") {
    	res = string.slice(i, string.length);
    } else {
  		res = string.slice(i, string.length);

  		i = string.length;
    }
    // if qu is next to each other
  } else if (string.charAt(i) === "q" && string.charAt(i+1) === "u") {
    array.push(string.charAt(i));
    array.push(string.charAt(i+1));
  } else {
  	array.push(string.charAt(i));
  }
}

var constants = array.join("");


pigLatin = res + constants + "ay"; // ap + str + ay

console.log("Pig Latin, " + pigLatin);
console.log("Our constants " + constants);
console.log("Our Array: " + array);
console.log("Our res: " + res);


/********* Sixth Test Case *********/
// Integrated all prior code together, it will take multiple words and return the proper piglatin translation, including y as a vowel

var string1 = "water bottle dog cat moose";
var array = string1.split(" ");
var string = "";
var res = "";
var pigLatin = "";

console.log("Array: " + array);

// this assigns each array index to a single word
for (k = 0; k < array.length; k++) {
  string = array[k];
  console.log("Our words: " + string);
  var modifiedArray = [];
	// this uses that word to do piglatin things (first loop = my, second loop = dog)
  for(i = 0; i < string.length; i++) {

    // if vowel is detected
    if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u" || string.charAt(i) === "y") {
      // if the vowel u, don't break the loop
      if (string.charAt(i) === "y") {
      	if (!string.includes("a", "e", "i", "o", "u")) {
      		res = string.slice(i, string.length);
        } else if (string.charAt(i) === "u") {
        	res = string.slice(i, string.length);
        }
      } else {
        res = string.slice(i, string.length);

        i = string.length;
      }
      // if qu is next to each other
    } else if (string.charAt(i) === "q" && string.charAt(i+1) === "u") {
      modifiedArray.push(string.charAt(i));
      modifiedArray.push(string.charAt(i+1));
    } else {
      modifiedArray.push(string.charAt(i));
    }
  }
  var constants = modifiedArray.join("");
  console.log("Modified Array in loop " + modifiedArray);
  pigLatin = res + constants + "ay";
  console.log("Pig Latin, " + pigLatin);
 }
	// turns array into string

	// combines everything together

console.log("Res: " + res);
