// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //

   //I: 2 integers
   //O: returns an array containing all integers between the 2 params. incl.
    // if the first arg is great than the second return them in reverse order
   //C: loop
   //E: 
    
   //create 2 arrays to store integers
   var range = [];
   var rangeReversed = [];

   //use if statment to determine if start is less than end
   if(start < end) {
    //use while loop to count from starting integer to ending integer
   var count = start;

   while(count <= end) {
    range.push(count);
    count++;
   }
   return range;
   }
   //use if statement to determine if start is grreater than end
   if(start > end) {
    //use while loop to count 
    var count = start;

    while(count >= end) {
        rangeReversed.push(count);
        count--;
    }
    return rangeReversed;
   }
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}