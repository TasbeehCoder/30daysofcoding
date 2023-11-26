// *Variables*
// Declare a variable, assign it a boolean, and alert the value
// let myName = true;
// alert(myName)

// Declare a variable, reassign it to your favorite color, and console log the value

// let color = 'black';


// color = 'Yellow'

// console.log(color)


// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

// function fourNumbers(n1, n2, n3, n4) {


//     return (n1 + n2 + n3) / n4;
// }
// console.log(fourNumbers(10, 10, 10, 3));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

// function twoNumber(num1, num2) {
//     // console.log(num1 ** num2)
//     console.log(Math.pow(num1, num2))
// }
// twoNumber(10, 2)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

// function booleanAndString(boolean, string) {
//     if (boolean === true) {
//         alert(string);
//     } else {
//         console.log(string);
//     }
// ternary operator can use instead of all above if els code
// if boolean is true left side of colon : and if its false right side of the colon
// boolean ? alert(string) : console.log(string)

// }

// -----Arrow Function ---------//
// we have name of the function booleanAndString we have parameter (boolean, string) we have arrow syntax => And we have ternay b ? alert(string) : console.log(string)

// const booleanAndString = (boolean, string) => b ? alert(string) : console.log(string)

//-----------end arrow function ----------/
// booleanAndString(true, "Alerted when true");
// booleanAndString(false, "Logged when false");


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number



function fizzBuzz(num) {

    for (let i = 1; i <= num; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }




    }

}