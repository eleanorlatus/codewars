function digitize(n) {
  return String(n).split("").reverse().map((num)=>{
  return Number(num)
})
  }
