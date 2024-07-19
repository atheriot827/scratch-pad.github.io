// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value){
        return value > base;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
//I: base (could be string or number)
//O: return a function that tests whether a given value is less than the base
//C: n/a
//E: n/a

//return a function the tests whether given value
return function(value) {
//is less than the base
    return value < base;
}
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
//I: single char
//O: return a function that test whether a given string starts with the char given
//C: needs to be case insensitive
//E: n/a

//return a function
return function(str) {
    //convert startsWith and string to lowercase
    startsWith = startsWith.toLowerCase();
    str = str.toLowerCase();

    //use if statement to compare startsWith and first char in string
    if(str[0] === startsWith) {
        return true;
    //otherwise return false
    } else {
        return false;
    }
}
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
//I: char
//O: return a function that tests whether a given string ends with the endsWith char
//C: case insensitive
//E: n/a

//return a function that tests
return function(str) {
   //convert endsWith char and string to lowercase
endsWith = endsWith.toLowerCase(); 
str = str.toLowerCase();

//create if statement comparing endsWith char to the last char in string
if(str[str.length-1] === endsWith) {
    return true;
}
return false;
}
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
//I:
//O:
//C:
//E:   
    
    
    
    // YOUR CODE ABOVE HERE //
}
// modifyStrings examples

var uppercase = modifyStrings(['alex', 'francis'], function(string){
    return string.toUpperCase();
}); // ['ALEX', 'FRANCIS']

var addedExclamation = modifyStrings(['alex', 'francis'], function(string){
    return string + "!";
}); // ['alex!', 'francis!']



/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
//I:
//O:
//C:
//E:   
    
    
    
    // YOUR CODE ABOVE HERE //
}
// allStringsPass examples
var beginsWithA = allStringsPass(['alex', 'aaron'], function(str){
    return str[0] === 'a';
}); // true (because all strings begin with A)

var fiveOrMoreLetters = allStringsPass(['alex', 'francis', 'aaron'], function(str){
    return str.length > 4;
}); // false (because alex's length is less than 5)



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}