function tribonacci(sig,n){
  let result = []
  for( let i = 0; i < n ; i++){
    result.push(i < 3 ? sig[i] : result[i-1] + result[i-2] + result[i-3])
  }
  return result
}

// OR

function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // sum last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n (in case n < 3)
}
