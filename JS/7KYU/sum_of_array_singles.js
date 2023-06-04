function repeats(arr){
    let single = 0
    arr.forEach((x,i) =>{
      if(arr.indexOf(x) === arr.lastIndexOf(x)) single += x
    })
    return single
};

// OR

function repeats(arr){
    return arr.filter((x) => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((a,b) => a + b, 0)
};