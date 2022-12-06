function numberJoy(n) {
    let digitSum = 0
    let arr = n.toString().split("")
    for(let i =0; i < arr.length; i++){
      digitSum+=Number(arr[i])
    }
  if(digitSum * (Number(digitSum.toString().split("").reverse().join(""))) == n){
    return true
  }else{
    return false
  }
}