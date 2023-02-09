function factorial(n)
{
  if (n > 12 || n < 0) {
    throw new RangeError("The argument must be between 0 and 12.");
  }
  let result = 1
for(let i = 1; i <= n; i++){
  result *= i
}
  return result
}

function factorial(n)
{
  if(n < 0 || n > 12) throw new RangeError();
  return n > 1 ? n * factorial(n - 1) : 1
}