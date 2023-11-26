//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ['social network', 'startup', 'founder', 'Wall Street'];


for (let i = 0; i < movieTitles.length; i++) {
    document.querySelector('#movieHeading').innerText += movieTitles[i]

}
//Create an array of numbers. Loop through the array and three to each number and replace the old number.

// JavaScript Question Two Solution :
// Step 1: Create an array of numbers.
let arrNumbers = [10, 20, 30];

// Step 2: Loop through each element in the array.
// for (let i = 0; i < arrNumbers.length; i++) {
arrNumbers.forEach((item, i) => {
    // in foreach we select the parameter for element and index so item will grab elemnt and i will grab index of the each elemnt 
    // arrNumbers[0] += 3;
    arrNumbers[i] = item + 3;
})

// a. For each element, do the following:
//    i. Add three to the each number.

// arrNumbers[0] = arrNumbers[0] + 3
// arrNumbers[0] += 3;
// arrNumbers[i] += 3; // i is also zero so we can put i also 
//    ii. Alternatively, you can use the shorthand: numbersArray[i] += 3;

// }
// Result: The original array is modified with each number increased by three
console.log(arrNumbers)

//------------QUESTION-3------------//
//Find the average of all the numbers from question three

let sum = 0

for (let i = 0; i < arrNumbers.length; i++) {

    sum = sum + arrNumbers[i]
}
console.log(sum / arrNumbers.length)