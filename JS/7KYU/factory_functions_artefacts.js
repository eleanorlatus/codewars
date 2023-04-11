function artefact(name, age, location, status){
    const obj = {name, age, location, status}
    return Object.freeze(obj)
}