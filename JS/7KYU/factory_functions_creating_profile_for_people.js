function person(firstName, lastName, age, gender, employed, occupation, married) {
  return{
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    employed: employed,
    occupation: occupation,
    married: married,
    sayName(){
      return `${firstName} ${lastName}`
    },
    introduce(){
      return `Hello, my name is ${firstName} ${lastName}.  I am ${age} years old.  I am a ${gender}.`
    }
    }
}
