function alternate(n, v1, v2){
    const result = []
    for(let i = 0; i <n; i++){
      if(i%2 == 0) result.push(v1)
      else result.push(v2)
  }
    return result
  }

  // OR

  function alternate(n, v1, v2){
    const result = []
    for(let i = 0; i <n; i++){
      i%2 == 0 ? result.push(v1) : result.push(v2)
  }
    return result
  }
