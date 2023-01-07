function squareSum(numbers){
let arr = numbers.map(x =>x*x)
let sum = 0
arr.forEach((x)=>sum+=x)
  return sum
}

//OR

function squareSum(n){
return n.map((x)=>x*x).reduce((a,b)=> a+b,0)
}
