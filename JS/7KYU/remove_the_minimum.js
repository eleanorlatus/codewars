function removeSmallest(numbers) {
  let arr = numbers.slice(0)
  let min = Math.min(...numbers)
  let i = numbers.indexOf(min)
  arr.splice(i,1)
  return arr
}
