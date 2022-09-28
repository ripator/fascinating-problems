const split_by = (text, ...delimiters) => {
   let textArray = Array.from(text);

   if (!delimiters.length) {
      return [text];
   }
   if (delimiters.length === 1 && delimiters[0] === '') {
      return textArray;
   }

   if (delimiters.length) {
      let delimitersIndexesInText = [];

      textArray.forEach((char, index) => {
         if (delimiters.includes(char)) {
            delimitersIndexesInText.push(index);
         }
      });

      let arraySplitByDelimiters = [];

      delimitersIndexesInText.forEach((delimiterIndex, arrayIndex) => {
         if (delimitersIndexesInText[arrayIndex -1] + 1 !== delimiterIndex) {
            arraySplitByDelimiters
               .push(textArray
                  .slice(delimitersIndexesInText[arrayIndex -1] + 1, delimiterIndex)
                  .join(''));
         }
         if (delimiterIndex === delimitersIndexesInText[delimitersIndexesInText.length -1]) {
            arraySplitByDelimiters
            .push(textArray
               .slice(delimiterIndex + 1)
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
[
   'T', 'h', 'i', 's', ' ',
   'i', 's', ' ', 'a', '.',
   ',', ' ', 't', 'e', 's',
   't', '.', ' ', ',', 'H',
   'i', '!'
 ]
