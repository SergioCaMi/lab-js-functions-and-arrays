// Iteration 1 | Find the Maximum
// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.
// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
if (a>b) { return a;}
return b
}



// Iteration 2 | Find the Longest Word
// Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

// The function should return null if an empty array is passed as an argument.

// You can use the following array to test your solution

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";
    for (let word of words) {if (word.length > longestWord.length){ longestWord = word} 
    } 
    if (words.length == 0) { return null}
    else {return longestWord}
}

findLongestWord(words)


// Iteration 2 | Find the Longest Word
// function findLongestWord() => OK
// should be defined as a function
// should return the longest word when called with an array of words
// should return null when called with an empty array
// should return the first word when called with a single-word array
// should return the first occuring longest word when there are multiple words with the same length


// Iteration 3 | Sum Numbers
// Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

// Implement the function named sumNumbers that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Later in the course, we will learn how to do this using the reduce array method, making your work significantly easier. For now, let's practice the "declarative" way of adding values using loops.

// You can use the following array to test your solution:

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sumT= 0;
    for (let number of numbers){
        sumT += number;
    }
    if (numbers.length == 0){
        return 0;
    } else {
        return sumT;
    }
}

// Iteration 4 | Numbers Average
// Calculating an average is a prevalent task. So let's practice it a bit.

// The logic behind this:

// Find the sum as we did in the first exercise (or how about reusing the function sumNumbers()?)
// Divide that sum by the number of elements in the array.

// Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers.

// You can use the following array to test your solution:


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    let sumT= 0;
    for (let number of numbers){
        sumT += number;
    }
    if (numbers.length == 0){
        return 0;
    } else {
        return sumT / numbers.length;
    }
}


// Iteration 5 | Find Element
// Let's create a simple array search.

// Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other. Return true if the word exists in the array; otherwise, return false.

// The function should return null if an empty array is passed as an argument.

// You can use the following array to test your solution:


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToSearch) {
    
    if (words2.length == 0) {
        return null;
    } else {
        return words2.includes(wordToSearch);
    }
}
console.log(doesWordExist(words2, "subset"));