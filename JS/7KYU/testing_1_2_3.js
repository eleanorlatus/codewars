var number=function(array){
  return array.map((x,i) => x.replace(x,`${i+1}: ${x}`))
}
