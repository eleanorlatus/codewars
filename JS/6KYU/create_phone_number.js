function createPhoneNumber(n){
  let p1 = [n[0],n[1],n[2]].join("")
  let p2 = [n[3],n[4],n[5]].join("")
  let p3 = [n[6],n[7],n[8],n[9]].join("")
  return `(${p1}) ` + p2 + "-" + p3
}


//OR

function createPhoneNumber(numbers){
let result = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    result = result.replace('x', numbers[i]);
  }
  
  return result;
}
