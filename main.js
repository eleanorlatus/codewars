//Implement a function which multiplies two numbers.

function multiply(n1,n2){
  return n1*n2
}

//You are given two interior angles (in degrees) of a triangle.
//Write a function to return the 3rd.

function otherAngle(a, b) {
  return 180-a-b
}

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return String(n).split("").reverse().map((num)=>{
  return Number(num)
})
  }

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

//You are going to be given a word. Your job is to return the middle character of the word.
//If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
let strlength = s.length
if(strlength%2!==0){
  return s.charAt(strlength/2)
}
  else{
    return s.charAt((strlength/2)-1) + s.charAt(strlength/2)
  }
}

//Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

function enough(cap, on, wait) {
  if((on+wait)<=cap){
    return 0
  }
  else{
    return ((cap-wait-on)*-1)
  }
}

//Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return number*-1
}

//remove the vowels from a string

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//our goal is to create a function that removes the first and last characters of a string.

function removeChar(str){
  return str.slice(1, str.length-1)
 };
 
 //Simple, remove the spaces from the string, then return the resultant string.

 function noSpace(x){
  return x.split(" ").join("")
  }

  //In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 
  function highAndLow(numbers){
    const arr = numbers.split(" ").sort((a,b) => a-b)
    return arr[arr.length-1] + ' ' + arr[0]
  }

  // Simple, given a string of words, return the length of the shortest word(s).

  function findShort(s){
    return s.split(" ").sort((a,b)=> a.length-b.length)[0].length
   }

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers

function sumTwoSmallestNumbers(numbers) {  
  const arr = numbers.sort((a,b)=>a-b)
  return arr[0] + arr[1]
 }