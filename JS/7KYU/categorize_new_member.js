function openOrSenior(data){
  let result =[]
for(let i = 0; i < data.length; i ++){
  if(data[i][0] >= 55 && data[i][1]>7){
    result.push("Senior")
  }
  else{
    result.push("Open")
  }
}
return result
}

//OR

function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}
