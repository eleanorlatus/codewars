function countPositivesSumNegatives(input) {
  let posCount = 0
  let negCount = 0
  if(!input || input.length===0){
    return []
  }else{
  input.forEach((x)=> x > 0 ? posCount++: negCount+=x)
  return [posCount,negCount]
  }
}
