function past(h, m, s){
    const hours = h * 3600000
    const mins = m * 60000
    const secs = s * 1000
    
    return hours + mins + secs
  }