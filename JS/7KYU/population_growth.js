function nbYear(p0, percent, aug, p) {
  let px = p0
  let years = 1
  for(let i=0;i<p;i++){
    px = Math.floor(px*(1+(percent/100))+aug)
    if(px<p){
    years+=1
    }
  }
return years
  }
