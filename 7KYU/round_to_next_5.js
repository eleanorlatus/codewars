function roundToNext5(n){
  if(n===0 || -4>n<0){
    return 0
  }else if(n%5===0){
    return n
  }else if(n>0){
    return n+(5-n%5)
  }else{
    return n-(n%5)
}
  }

//MUCH simpler

function roundToNext5(n){
return Math.ceil(n/5)*5
}
