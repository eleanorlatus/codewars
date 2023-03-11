function computerToPhone(numbers){
  const arr = ['0','7','8','9','4','5','6','1','2','3']
  return numbers.split("").map((x)=>arr.indexOf(x)).join("")
}
