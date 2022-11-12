function order(words){
  let arr = words.split(" ")
  let ans= []
for(let i=0; i<arr.length ;i++){
      for(let j=0; j < arr[i].length; j++){
        let num = Number(arr[i][j])
        if(!isNaN(num)){
          ans[num-1] = arr[i]
        }
      }
    }
  return ans.join(" ")
}

//"is2 Thi1s T4est 3a"
