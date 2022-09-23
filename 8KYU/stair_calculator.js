function stairsIn20(s){
  let total = s.flat().reduce((sum,current) => sum+current, 0)
  return total*=20
  //your code here
}
