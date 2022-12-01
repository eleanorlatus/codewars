function elevator(l, r, c){
  if(l==c && r!=c){
    return "left"
  }else if((l-1==c || l+1==c) && r-1!=c && r!=c && r+1!=c){
    return "left"
  }
  else{
    return "right"
  }
}

|| OR

const elevator = (left, right, call) => Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'
