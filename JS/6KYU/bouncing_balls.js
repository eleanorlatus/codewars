function bouncingBall(h,  b,  w) {
  let i = 0
  if(h > 0 && b > 0 && b < 1 && w < h){
    while(h > w){
      h *= b
      i++
    }
  return (i*2)-1;
  }else{
    return -1;
  }
}
