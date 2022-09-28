const findDelimitersIndexesInText = (text, delimiters) => {
   let indexesArray = [];
   text.forEach((char, index) => {
      if (delimiters.includes(char)) {
         indexesArray.push(index);
      }
   });
   return indexesArray;
}

const split_by = (text, ...delimiters) => {
   let textArray = Array.from(text);

   if (!delimiters.length) {
      return [text];
   }
   if (delimiters.length === 1 && delimiters[0].length === 0) {
      return textArray;
   }

   if (delimiters.length) {
      let delimitersIndexesInText = findDelimitersIndexesInText(textArray, delimiters);
      let arraySplitByDelimiters = [];

      delimitersIndexesInText.forEach((delimiterIndex, arrayIndex) => {

         const startIndex = delimitersIndexesInText[arrayIndex -1] + 1;
         const endIndex = delimiterIndex;
         const arrayLastValue = delimitersIndexesInText[delimitersIndexesInText.length -1];

         if (startIndex !== endIndex) {
            arraySplitByDelimiters
               .push(textArray
                  .slice(startIndex, endIndex)
                  .join(''));
         }
         if (endIndex === arrayLastValue) {
            arraySplitByDelimiters
            .push(textArray
               .slice(endIndex + 1)
               .join(''));
         }
      });
      return arraySplitByDelimiters
   }
}

console.log(split_by('This is a., test. ,Hi!', ',')); // [ 'This is a.', ' test. ', 'Hi!' ]
console.log(split_by('This is a., test. ,Hi!', '.', ' ', ',')); // [ 'This', 'is', 'a', 'test', 'Hi!' ]
console.log(split_by('This is a., test. ,Hi!')); // [ 'This is a., test. ,Hi!' ]
console.log(split_by('This is a., test. ,Hi!', ''));
// [
//    'T', 'h', 'i', 's', ' ',
//    'i', 's', ' ', 'a', '.',
//    ',', ' ', 't', 'e', 's',
//    't', '.', ' ', ',', 'H',
//    'i', '!'
//  ]
