function countSmileys(arr) {
  let count = 0;
for(let i = 0; i < arr.length; i++){
if((arr[i][0] == ":" || arr[i][0] == ";") && (arr[i][1] == "-" || arr[i][1] == "~") && (arr[i][2] == ")" || arr[i][2] == "D")){
  count++
}else if ((arr[i][0] == ":" || arr[i][0] == ";") && (arr[i][1] == ")" || arr[i][1] == "D")){
  count++
}
}
  return count
}

// OR

function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
