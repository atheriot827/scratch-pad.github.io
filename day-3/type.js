// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //

//I: input value
//O: return true if value is an array, false otherwise
//C: use a method
//E: how can we deciper value if a value is an array

//return true or false using Array.isArray() method which will return true or false based on input
return Array.isArray(value);
     
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //

//isObject({ a: 1, b: 2}); // true
//isObject([1, 2, 3]); // false
//isObject(null); // false
//isObject(new Date()); // false

//I: input value
//O: return true if the value is an Object intended as a collection, false otherwise
//C: use instance of operator
//E: decipher if a value is an Object

//check if the value is not null and its type is object
if(value !== null && typeof value === 'object') {
    //check if the value is not an array
    if(!Array.isArray(value)) {
        //check if value is not an instance of Date
        if(!(value instanceof Date)) {
            //true if its an object intended as a collection
            return true;
        }
    }
}    
    //otherwise return fasle
    return false;
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //

//I: value
//O: return true if is either an Array or is an Object intended as a collection, false if otherwise
//C: n/a
//E: n/a
    
//check if the value is not null and its type is object
if(value !== null && typeof value === 'object') {
    //return true for arrays and objects excluding Date
    return Array.isArray(value) || !(value instanceof Date);
}
//otherwise return false
return false;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
//I: value
//O: return the type of the value as a string
//C: n/a
//E: n/a

//use a switch statement to determine the typeof a value
switch (typeof value) {
    //check if value is a string
    case "string":
        return "string";
    //check if value is an object
    case "object":
    //use if statement
    ////check if value is an array using Array.isArray method
    if (Array.isArray(value)) {
        return "array";
    //check if value is null, if true return null
    } else if (value === null) {
        return "null";
    //check if value is a date using instance of date, if true return date
    } else if (value instanceof Date) {
        return "date";
    //if none of the above conditions are met return object
    } else {
        return "object";
    }
    //check if value is undefined
    case "undefined":
        return "undefined";
    //check if value is a number
    case "number":
        return "number";
    //check if value is a boolean
    case "boolean":
        return "boolean";
    //check if value is a function
    case "function":
        return "function";
    //for any other type return unknown
    default:
        return "unknown type";

}
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}