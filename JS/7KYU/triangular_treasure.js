// Return the nth triangular number
function triangular( n ) {
  if(n <= 0) return 0
  else return n * (n+1)/2
}

// OR

function triangular( n ) {
  return  n > 0 ? n * (n+1)/2 : 0
}
