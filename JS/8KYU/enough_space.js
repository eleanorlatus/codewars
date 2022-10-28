function enough(cap, on, wait) {
  if((on+wait)<=cap){
    return 0
  }
  else{
    return ((cap-wait-on)*-1)
  }
}
