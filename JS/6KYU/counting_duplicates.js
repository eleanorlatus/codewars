function duplicateCount(text){
  let arr = text.toLowerCase().split("")
  let filtered = arr.filter((x)=> arr.indexOf(x) != arr.lastIndexOf(x))
  return [...new Set(filtered)].length
}

// OR

function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
