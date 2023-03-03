function swap (string) {
    const vowels = ['a','e','i','o','u']
    return string.split("").map((x) => vowels.includes(x) ? x.toUpperCase() : x).join("")
    }

    //using regex

    function swap(st){
        return st.replace(/[aeiou]/g, v => v.toUpperCase() )
      }