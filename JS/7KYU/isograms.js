function isIsogram(str){
  return !/(.).*\1/.test(str.toLowerCase());
}

// OR

function isIsogram(str){
const arr = str.toLowerCase().split("")
return arr.filter((x,i) => arr.indexOf(x) != arr.lastIndexOf(x)).length > 0 ? false : true
}
