var isAnagram = function(t, o) {
  t = t.toLowerCase().split("").sort()
  o = o.toLowerCase().split("").sort()
  let count = 0
  for(let i = 0; i <= t.length; i++){
    if(t[i] != o[i]){
    count++
  }
  }
  return count == 0 ? true : false
};

// OR

var isAnagram = function(t, o) {
  t = t.toLowerCase().split("").sort().join("")
  o = o.toLowerCase().split("").sort().join("")
 return t == o ? true : false
};
