function DNAStrand(dna){
    let result = []
    for(let i = 0 ; i < dna.length; i++){
      if(dna[i]=="A"){
        result.push("T")
      }else if(dna[i]=="T"){
       result.push("A")
      }else if(dna[i]=="G"){
        result.push("C")
      }else{
       result.push("G")
      }
    }
    return result.join("")
  }

  //OR

  var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}