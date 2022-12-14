function breakChocolate(n,m) {
 if(n >= 1 && m >= 1){
   return n*m-1
 }else{
    return 0
}
}

// OR

const breakChocolate = (n,m) => n*m==0 ? 0 : m*n-1