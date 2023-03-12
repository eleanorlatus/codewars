class Ship {
    constructor(draft, crew){
      this.draft = draft;
      this.crew = crew;
    }
  isWorthIt(){
    const calculatedDraft = this.draft -(this.crew * 1.5)
    return calculatedDraft > 20
  }
  }