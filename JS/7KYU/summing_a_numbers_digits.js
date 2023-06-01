function sumDigits(number) {
  return Math.abs(number).toString().split("").reduce((a,b) => Number(a) + Number(b), 0)
}
