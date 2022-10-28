function positiveSum(arr) {
  arr = arr.filter(function(x){ return x > -1 });
  const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
  return sum
  
}
