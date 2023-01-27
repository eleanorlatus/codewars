function wave(str){
 let result = []
 for(let i = 0 ; i < str.length; i++){
   let c = str.charAt(i).toUpperCase()
   if(c!= " "){
    result.push(str.substring(0,i) + c + str.substring(i+1))
 }
   }
  return result
}

// OR

function wave(str){
    let result = [];
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}
