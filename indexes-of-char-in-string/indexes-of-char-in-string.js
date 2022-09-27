const findIndexesOfCharInString = (text, char) => {
   const textArray = text.split('');
   let indexesArray = [];
   textArray.forEach((letter, index) => {
      if (letter === char) {
         indexesArray.push(index);
      }
   });
   return indexesArray;
}

console.log(findIndexesOfCharInString('text', 't')); // [0, 3]
console.log(findIndexesOfCharInString('text', 'b')); // []