function isValidWalk(walk) {
  let n = walk.filter(x => x == "n").length
  let e = walk.filter(x => x == "e").length
  let s = walk.filter(x => x == "s").length
  let w = walk.filter(x => x == "w").length

  if(walk.length == 10 && (n==s) && (e==w)){
    return true
  }else{
    return false
  }
}

// OR

function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}
