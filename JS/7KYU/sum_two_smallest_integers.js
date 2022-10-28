function sumTwoSmallestNumbers(numbers) {  
 const arr = numbers.sort((a,b)=>a-b)
 return arr[0] + arr[1]
}
