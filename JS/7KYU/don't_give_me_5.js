function dontGiveMeFive(start, end)
{
  let c = 0
  for(let i = start; i <= end; i++){
    if(!String(i).includes(5)){
      c++
    }
  }
  return c
}
