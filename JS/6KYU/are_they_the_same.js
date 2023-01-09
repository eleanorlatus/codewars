function comp(array1, array2){
  if(array1 == null | array2 == null) return false
  let arr1 = array1.map((x)=> x*x).sort((a,b) => a - b)
  let arr2 = array2.sort((a,b) => a - b)
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] != arr2[i]) {
      return false
    }
  }return true
}

// OR

function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
