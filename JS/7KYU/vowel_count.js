function getCount(str) {
  let arr = str.split("")
  let count = 0
  for(let i=0; i<arr.length; i++){
    if(arr[i].includes("a") || arr[i].includes("e") || arr[i].includes("i") || arr[i].includes("o") || arr[i].includes("u")){
    count++
    }
  }
  return count
  }
