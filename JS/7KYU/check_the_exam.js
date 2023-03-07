function checkExam(arr1, arr2) {
    let score = 0
    arr2.forEach((x,i)=> {
      if(x == arr1[i] && x != "") score+=4
      if(x != arr1[i] && x != "") score-=1
    })
    return score > 0 ? score : 0
    }