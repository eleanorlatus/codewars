function calculateYears(principal, interest, tax, desired) {
  let i = 0
  while(principal<desired){
    let int = principal * interest
    principal += int
    principal-= (int*tax)
    i++
  }
  return i
}
