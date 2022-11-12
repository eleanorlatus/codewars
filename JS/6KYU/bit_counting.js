var countBits = function(n) {
  let bin = n.toString(2)
  return bin.split("").filter((x)=> x== 1).length
};
