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

//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

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
