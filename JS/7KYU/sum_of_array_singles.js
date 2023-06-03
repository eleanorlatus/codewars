function repeats(arr){
    let single = 0
    arr.forEach((x,i) =>{
      if(arr.indexOf(x) === arr.lastIndexOf(x)) single += x
    })
    return single
};