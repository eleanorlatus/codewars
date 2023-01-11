function findMissingLetter(array)
{
   var i = array[0].charCodeAt();
   array.forEach( x =>  x.charCodeAt() == i ? i++ : i );
   return String.fromCharCode(i);
}