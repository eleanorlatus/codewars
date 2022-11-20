const sequenceSum = (b, e, s) => {
let sum = [b]
if(b>e){
    return 0
}else{
  while(b <= e){
  b+=s
  if(b<=e){
   sum.push(b)
  }
}
  return sum.reduce((a,b)=> a+b,0)
}
}

//OR

const sequenceSum = (b, e, s) => {
let sum = b
if(b>e){
    return 0
}else{
  while(b <= e){
  b+=s
  if(b<=e){
   sum+=b
  }
}
  return sum
}
}

// OR

const sequenceSum = (begin, end, step) => {
  var sum = 0;
  for(var i=begin;i<=end;i+=step)
  {
    sum += i;
  }
  return sum;
};
