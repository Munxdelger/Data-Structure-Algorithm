/**
 * @param {number} n
 * @return {string[]}
 
 412. Fizz Buzz
 
 Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
 
 */
var fizzBuzz = function(n) {
    
    let res = [];
    for (let i=1; i <= n; i++){
        if (i % 15 === 0){
            res.push("FizzBuzz");
        } else if (i % 5 === 0) {
            res.push("Buzz");
        } else if ( i % 3 === 0){
            res.push("Fizz");
        }else{
            res.push("" + i);
        }
    }
    return res;
};