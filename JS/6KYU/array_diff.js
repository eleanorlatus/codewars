function arrayDiff(a, b) {
  let c = []
  for(let i = 0 ; i < a.length || i < b.length; i++){
    if(b.length > a.length){
      if(!a.includes(b[i])){
      c.push(b[i])
    }
    }else{
      if(!b.includes(a[i])){
      c.push(a[i])
    }
    }
  }if(a.length==0){
    return []
  }else{
    return c
  }
}

//OR

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
