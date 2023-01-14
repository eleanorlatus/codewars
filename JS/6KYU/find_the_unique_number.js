function findUniq(arr) {
return Number(arr.filter((x) => arr.indexOf(x)==arr.lastIndexOf(x)))
}


// OR

function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}
