function findOutlier(int){
    let odd = int.filter((x)=> x % 2 != 0)
    let even = int.filter((x)=> x % 2 == 0)
   return even.length == 1 ? Number(even) : Number(odd)

   // OR
   //return even.length == 1 ? even[0] : odd[0]
  }