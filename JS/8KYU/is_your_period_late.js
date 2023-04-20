function periodIsLate(last, today, cycleLength) {
    const diffMilis = Math.abs(last - today);
    const diffDays = Math.ceil(diffMilis / (1000 * 60 * 60 * 24));
    return diffDays > cycleLength
  }
   
  // OR
   
  function periodIsLate(last, today, cycleLength)
  {
    return (today-last)/86400000>cycleLength
  }