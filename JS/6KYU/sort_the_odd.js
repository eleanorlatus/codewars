function sortArray(array) {
  let oddNumbers = []
  let evenNumbers = []
  array.filter((x, i) => x % 2 != 0 ? oddNumbers.push(x) : evenNumbers[i] = x)
  oddNumbers = oddNumbers.sort((a,b) => a-b)
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(evenNumbers[j] == undefined)
        {
          evenNumbers[j] = oddNumbers[i]
          i++
        }
    }
  }
return evenNumbers
}

// OR

function sortArray(array) {
  var odd = array.filter(x => x % 2 !== 0).sort((a, b) => a - b);
  return array.map(x => x % 2 === 0 ? x : odd.shift());
}
