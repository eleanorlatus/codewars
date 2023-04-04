function replace(s){
  const vowel = 'AEIOUaeiou'
  return s.split("").map((x) => vowel.includes(x) ? "!" : x).join("")
}

//OR

function replace(s){
return s.replace(/[aeiou]/gi, "!")
}
