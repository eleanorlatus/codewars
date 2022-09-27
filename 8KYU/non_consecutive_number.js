function firstNonConsecutive (arr) {
  let count = 0
for(let i=1;i<arr.length;i++){
  if(arr[i]!==(arr[i-1]+1)){
    return arr[i]
    count+=1
  }
}
  if(count===0){
    return null
  }
}
