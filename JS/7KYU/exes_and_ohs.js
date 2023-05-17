function XO(str) {
  let arr = str.split("")
  let xcount = 0
  let ocount = 0
  for(let i =0;i<arr.length;i++){
    if (arr[i] === "x" || arr[i] === "X"){
      xcount++
    }
    if(arr[i]==="o" || arr[i] === "O"){
      ocount++
    }
    }
    if(xcount===ocount){
      return true
    }
  else{
    return false
  }
}

// OR

function XO(str) {
   const x = str.split("").filter((x) => x.toLowerCase() == 'x')
   const o = str.split("").filter((x) => x.toLowerCase() == 'o')
   
   return x.length == o.length
}

// OR

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

// OR

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
