function high(x){
let arr = x.split(" ")
let result = []
let sum = 0;
  for(let i = 0 ; i < arr.length; i ++){
    for(let j =0 ; j < arr[i].length; j++)
      {
   sum += (arr[i].charCodeAt(j) - 96)
      }
    result.push(sum)
    sum = 0
  }
let highestIndex = result.indexOf(Math.max(...result))
return arr[highestIndex]
}
