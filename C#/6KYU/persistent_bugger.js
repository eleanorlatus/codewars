function persistence(num) {
    let arr = num.toString().split("")
   let i = 0
    while(arr.length > 1)
      {
        arr = arr.reduce((a,b)=>Number(a)*Number(b),1).toString().split("")
        i++
      }
   return i
 }