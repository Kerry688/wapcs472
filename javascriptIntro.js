function myFunctionTest(expected, function2test) {
    let found = function2test();
    if (Array.isArray(expected)){
        expected = expected.toString();
        found = found.toString();
    }
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function myFunctionTest2(expected, function2test) {
    if (expected === function2test) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

function isVowel(char){
    return (char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U' || char == 'a' || char == 'e' || char == 'iI' || char == 'o' || char == 'u');
}

function sum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++)
        sum += array[i];
    return sum;
}

function multiply(array){
    let multiple = 1;
    for (let i = 0; i < array.length; i++)
        multiple *= array[i];
    return multiple;
}

function reverse(str){
    if (str === "")
        return "";
    else
        return reverse(str.substr(1)) + str.charAt(0);
}

function findLongestWord(array){
    let longest = array[0].length;
    for (let i = 0; i < array.length; i++){
        // console.log("i => "+ i+ " array length = "+array[i].length+" longest "+longest);
        if(array[i].length > longest)
            longest = array[i].length;
    }
    return longest;
}

function filterLongWords(array, i){
    let longestArray = [];
    for (let j = 0; j < array.length; j++){
        // console.log("i => "+ i+ " array length = "+array[i].length+" longest "+longest);
        if(array[j].length > i)
            longestArray.push(array[j]);
    }
    return longestArray;
}

console.log("************************************************** 9 ***********************************************");
const a = [1,3,5,3,3];
const multiplyBy10 = a.map(function(elem, i, array) {
                return elem * 10;
            });
console.log("Expected output of multiplyBy10 of [1,3,5,3,3] is  " + myFunctionTest2("10,30,50,30,30", multiplyBy10.toString()));

const elementsEqualTo3 = a.filter(function(elem, i, array) {
    return elem == 3;
});
console.log("Expected output of elementsEqualTo3 of [1,3,5,3,3] is 3,3,3 " + myFunctionTest2("3,3,3", elementsEqualTo3.toString()));
const productAllElements = a.reduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator * currentValue;});
console.log("Expected output of productAllElements of [1,3,5,3,3] is 135 " + myFunctionTest2(135, productAllElements));

console.log("************************************************** 8 ***********************************************");

console.log("Expected output of filterLongWords([\"one\",\"two\",\"three\", \"four\", \"five\", \"six\", \"seven\"], 3) is [\"three\", \"four\", \"five\", \"seven\"] " + myFunctionTest(["three", "four", "five", "seven"], function () {
    return filterLongWords(["one","two","three", "four", "five", "six", "seven"], 3);
}));
console.log("Expected output of findLongestWord([\"array of c string\", \"is fun to use\", \"make sure to properly\", \"tell the array size\"]) is [\"is fun to use\"] " + myFunctionTest("'is fun to use'", function () {
    return filterLongWords(["array of c string", "is fun to use", "make sure to properly", "tell the array size"], 15);
}));

console.log("************************************************** 7 ***********************************************");

console.log("Expected output of findLongestWord([\"array of c string\", \"is fun to use\", \"make sure to properly\", \"tell the array size\"]) is 5 " + myFunctionTest(5, function () {
    return findLongestWord(["array of c string", "is fun to use", "make sure to properly", "tell the array size"]);
}));

console.log("************************************************** 6 ***********************************************");
console.log("Expected output of reverse('jag testar') is ratset gaj " + myFunctionTest("ratset gaj", function () {
    return reverse('jag testar');
}));

console.log("Expected output of reverse('jag t**star') is ratset gaj " + myFunctionTest("ratset gaj", function () {
    return reverse('jag t**estar');
}));

console.log("************************************************** 5 ***********************************************");
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));

console.log("Expected output of sum([null, 0, 3, null]) is 3 " + myFunctionTest(3, function () {
    return sum([null, 0, 3, null]);
}));

console.log("********************** multiply ********************");
console.log("Expected output of multiply([1,2,3,4]) is 10 " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));

console.log("Expected output of multiply([null, 0, 3, null]) is 0 " + myFunctionTest(0, function () {
    return multiply([null, 0, 3, null]);
}));

console.log("************************************************** 4 ***********************************************");
console.log("Expected output of isVowel('O') is true  " + myFunctionTest(true, function () {
    return isVowel('A');
}));

console.log("Expected output of isVowel('B') is false " + myFunctionTest(false, function () {
    return isVowel('B');
}));

console.log("Expected output of isVowel('b') is false " + myFunctionTest(true, function () {
    return isVowel('b');
}));

console.log("Expected output of isVowel('o') is true " + myFunctionTest(true, function () {
    return isVowel('o');
}));

console.log("************************************************** 3 ***********************************************");

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, function () {
    return maxOfThree(5, 4, 44);
}));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, function () {
    return maxOfThree(55, 4, 44);
}));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, function () {
    return maxOfThree(55, 4, 44);
}));

console.log("************************************************** 3 ***********************************************");
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
        return max(20, 10);
    }
));
console.log("Expected output of max(20,10) is null  " + myFunctionTest(null, function () {
        return max(20, 10);
    }
));