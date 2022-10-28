function squareSum(numbers){
let arr = numbers.map(x =>x*x)
let sum = 0
arr.forEach((x)=>sum+=x)
  return sum
}
