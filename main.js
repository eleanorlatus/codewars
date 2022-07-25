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


//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.

 function getSum(a,b){
  let sum = 0
  if(a<b){
    for(i=a;i<=b;i++){
      sum+= i
    }
    }
  else{
    for(i=b;i<=a;i++){
      sum+= i
    }
  }
  return sum
}

//n a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
  let px = p0
  let years = 1
  for(let i=0;i<p;i++){
    px = Math.floor(px*(1+(percent/100))+aug)
    if(px<p){
    years+=1
    }
  }
return years
  }

//   Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!

function friend(friends){
  let arr = []
    for(let i=0;i<friends.length;i++){
  if((friends[i].length)===4){
        arr.push(friends[i])
      }
  }
  return arr
  }

  // Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

  function longest(s1, s2) {
    const newArray = s1.split("").concat(s2.split(""))
    const remove = [...new Set(newArray)]
    return remove.sort().join("")
  }

  //return n cubed

  function rowSumOddNumbers(n) {
    return n * n *n
  }

  //Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

  function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")  
   }