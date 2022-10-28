function getMiddle(s)
{
let strlength = s.length
if(strlength%2!==0){
  return s.charAt(strlength/2)
}
  else{
    return s.charAt((strlength/2)-1) + s.charAt(strlength/2)
  }
}
