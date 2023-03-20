function to_nato(words) {
const string = words.toLowerCase().split(" ").join("")
const arr = string.split("")
let result = []
for(let i = 0; i < arr.length; i++){
  if(arr[i] == "," || arr[i] == "." || arr[i] == "!" || arr[i] == "?"){
    result.push(arr[i])
  }
  else{
    result.push(NATO[arr[i]])
  }
}
  return result.join(" ")
}

// OR

function to_nato(words) {
return words.toLowerCase().split("").filter((x) => x != " ").map((x) => NATO[x] || x).join(" ")
}
