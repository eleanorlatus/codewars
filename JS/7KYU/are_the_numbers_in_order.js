function inAscOrder(arr) {
  const sorted = arr.map((x)=> x).sort((a,b) => a - b)
  for(let i = 0 ; i < arr.length; i++){
     if(arr[i] != sorted[i]) return false
  }
  return true
}

// OR

function inAscOrder(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false; 
    }
  }
  return true;
}

// OR

const inAscOrder = arr => arr.join('') === arr.sort((a, b) => a - b).join('');
