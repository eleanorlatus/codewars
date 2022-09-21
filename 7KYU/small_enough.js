function smallEnough(a, limit){
//  let result = a.filter(function(x){ return x <=limit});
  let result = a.filter(x=> x <=limit);
  if(result.length==a.length){
    return true
  }else{
    return false
  }
}

//better solution

function smallEnough2(a, limit){
  return Math.max(...a) <= limit
}
