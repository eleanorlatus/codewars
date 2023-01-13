function findMissingLetter(array)
{
   var i = array[0].charCodeAt();
   array.forEach( x =>  x.charCodeAt() == i ? i++ : i );
   return String.fromCharCode(i);
}

// OR

const findMissingLetter = (array) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const start = alphabet.indexOf(array[0]);
    return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
  };