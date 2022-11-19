function digitalRoot(n) {
let sum = addDigits(n)
while(sum.length > 1){
 sum = addDigits(sum)
}
return Number(sum)
  }

function addDigits(num){
  return num.toString().split("").reduce((a,b)=> Number(a) + Number(b),0).toString()
}

// OR

function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}

// OR

function digital_root(n) {
  return (n - 1) % 9 + 1;
}
