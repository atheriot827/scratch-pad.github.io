// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

function length(string) {
    // YOUR CODE BELOW HERE //
//I: string
//O: return string length
//C: N/A
//E: N/A

//use method to return string length
return string.length; 
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
//I: string
//O: return a new string forced to lowercase
//C: N/A
//E: N/A

//use method to return new string forced to lowercase
return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//I: string
//O: return new string forced to uppercase
//C: N/A
//E: N/A

//use method to return new string forced to uppercase
return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
//I: string
//O: return a new string forced to dash-case
//C: N/A
//E: replace space in string with dash; enforce lowercase

//use replace method to return new string forced to dash-case
//  / /g is a regular expression that matches all spaces in the input string
// the space btw the slashes is the char thats being replaced
// 'g' flag make the reg ex global so it will match all occurances of spaces in the string, not just the first one
//replace spaces with dashes
//use method to force all to lowercase
return string.replace(/ /g, '-').toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
//I: string, single char
//O: return true if the string begins with the char, false otherwise
//C: array access
//E: ensure upper and lowercase are compared equally

//convert both string and char to lowercase
string = string.toLowerCase();
char = char.toLowerCase();

//use if statement to compare first char of string matches given char
if(string[0] === char){
    return true;
} else {
//otherwise return false
    return false;
}
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
//I: string, char
//O: return true if the String ends with the character, false otherwise
//C: array access
//E: ensure upper and lowercase can be compared equally

//convert string and char to lowercase
string = string.toLowerCase();
char = char.toLowerCase();

//use if statement to compare first letter of string and given char
if(string[string.length-1] === char){
    return true;
//otherwise return false
} else {
    return false;
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//I: 2 strings
//O: return the strings concatenated
//C: N/A
//E: N/A

//return strings concatnated together
return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);

//I: any number of strings
//O: all strings joined together
//C:
//E:

//return all strings joined together with join method
 return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

//I: 2 strings
//O: return the longest of the 2 strings
//C: N/A
//E: N/A

//convert arguments object into a real array
var args = Array.from(arguments);

//initialize a variable to store longest string
var longestString = '';

//iterate through each string in the array
for(var i = 0; i < args.length; i++) {
//check if length is greater than length of longestString
    if(args[i].length > longestString.length) { 
//if so update longestString to current string
        longestString = args[i]; 
    }
}
//return longest string found after looping
return longestString;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//I: 2 strings 
//O: return 1 if the first is higher in alpha order than second, return -1 if second is higher, return 0 if theyre equal
//C: n/a
//E: compare strings

//init and convert strings to lowercase
var lowerStr1 = stringOne.toLowerCase();
var lowerStr2 = stringTwo.toLowerCase();

//compare strings
if(lowerStr1 < lowerStr2) {
    return 1;
} else if(lowerStr1 > lowerStr2) {
    return -1;
} else {
    return 0;
}
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//I: 2 strings
//O: return 1 if the first is lower in alphabetical order than the second, return -1 if the second is lower in alphabetical order than the first, and return 0 if they're equal
//C: n/a
//E: compare strings

//convert strings to lowercase
var lowerStr1 = stringOne.toLowerCase();
var lowerStr2 = stringTwo.toLowerCase();

//compare strings
if(lowerStr1 > lowerStr2) {
    return 1;
} else if(lowerStr1 < lowerStr2) {
    return -1;
} else {
    return 0;
}


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}