function nbDig(n, d) {
  let arr = []
   for(let i =0; i<=n;i++){
     arr.push(i*i)
   }
  return arr.join("").split("").filter((x)=>x==d).length
}
