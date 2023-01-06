function findAverage(arr) {
  const l = arr.length
  return l > 0 ? arr.reduce((a,b)=> a + b, 0)/l : 0
}
