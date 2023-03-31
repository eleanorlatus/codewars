function validate(n){
  const arr = n.toString().split("").reverse()
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    let x = Number(arr[i])
    if(i%2 != 0){
        x = x*2
      if(x > 9){
        sum += x.toString().split("").reduce((a,b) => Number(a) + Number(b))
      } else{
          sum += x
      }
    }else{
        sum += x
    }
  }
  if(sum % 10 == 0) return true
  else return false
}
