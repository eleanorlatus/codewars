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

function numberJoy(n) {
    const sum = n.toString().split("").reduce((a,b)=> Number(a)+Number(b),0)
    const reversed = Number(sum.toString().split("").reverse().join(""))
  if(sum * reversed == n){
    return true
  }else{
    return false
  }
}