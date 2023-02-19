var capitals = function (word) {
    const result = []
    for(let i = 0 ; i < word.length; i++){
      if(word[i] == word[i].toUpperCase()){
        result.push(word.indexOf(word[i]))
      }
    }
    return result
};

var capitals = function (word) {
    return word.split("").map((x,i) => x == x.toUpperCase() ? i : -1).filter((x)=> x >= 0)
    };