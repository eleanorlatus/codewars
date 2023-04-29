function past(h, m, s){
    const hours = h * 3600000
    const mins = m * 60000
    const secs = s * 1000
    
    return hours + mins + secs
  }

  // OR

  function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }