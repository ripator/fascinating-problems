const fs = require('fs');

const generateCharsMap = (chars) => {
   const charsMap = new Map();

   charsMap.set('-1', '');

   chars.forEach((char, index) => {
      charsMap.set(`${index}`, char);
   });

   return charsMap;
}

const generateArrayWithGivenValue = (arrayLength, value) => {
   let array = [];
   for (let i = 0; i < arrayLength; i++) {
      array.push(value);
   }
   return array;
}

const decodeMapValues = (map, array) => {
   let mutatedArray = array.slice();
   for (let i = 0; i < mutatedArray.length; i++) {
      if (map.has(String(mutatedArray[i]))) {
         mutatedArray[i] = map.get(String(mutatedArray[i]));
      }
   }
   return mutatedArray.join('');
}

const incrementArrayValues = (array, lastKey) => {
   for (let i = array.length-1; i >= 0; i--) {
      if (array[i] != parseInt(lastKey)) {
         array[i]++;
         return; 
      } else {
         array[i] = 0;
      }
   }
}

const upto16AllPossibleStrings = () => {
   const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz';
   const decimals = '0123456789';
   const emptyValue = -1;
   const allCharsArray = decimals.concat(englishAlphabet).split('');
   
   const allCharsMap = generateCharsMap(allCharsArray);
   let array16Symbols = generateArrayWithGivenValue(16, emptyValue);
   const lastKeyInMap = [...allCharsMap.keys()].pop();

   for (let i = 0; i < Math.pow(allCharsArray.length, 16) - 1; i++) {
      incrementArrayValues(array16Symbols, lastKeyInMap);
      const decodedString = decodeMapValues(allCharsMap, array16Symbols);
      fs.appendFileSync('demo.txt', `${decodedString}\n`);
   }
}

upto16AllPossibleStrings();