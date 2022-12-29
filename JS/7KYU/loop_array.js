function loopArr(arr, d, s) {
if(d=="left"){
  return arr.concat(arr.splice(0,s))
}else{
  let l = arr.length-s
  return arr.concat(arr.splice(0,l))
}
}

// OR

const loopArr = (arr, d, s) => d =="left" ? arr.concat(arr.splice(0,s)) : arr.concat(arr.splice(0,arr.length-s))
