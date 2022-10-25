function solution(str, ending){
  let length = str.length - ending.length
  let result = str.split("").slice(length).join("")
  if(result == ending){
    return true
  }else{
    return false
  }
}

//OR

function solution(str, ending){
return str.endsWith(ending)
}
