function positiveSum(arr) {
  arr = arr.filter(function(x){ return x > -1 });
  const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
  return sum
  
}


// OR

function positiveSum(arr) {
  return arr.filter((x)=> x > 0).reduce((a,b)=> a+b,0)
}
