const decimalToBinaryString = (value) => {
   if (typeof value !== 'number' || Number.isNaN(value)) {
      throw "Error: Value should be a number."
   }
   if (value >= 0) {
      let binaryValue = (value).toString(2);
      while (binaryValue.length < 32) {
         binaryValue = '0' + binaryValue;
      }
      return binaryValue;
   } else {
      return (value >>> 0).toString(2);
   }
}

const areStringFirstAndLastElementsEqual = (value) => {
   return value[0] === value[value.length - 1];
}

const hasBinaryStringSameFirstAndLastElems = (value) => {
   return areStringFirstAndLastElementsEqual(decimalToBinaryString(value));
}

console.log(decimalToBinaryString(-5)); // 11111111111111111111111111111011
console.log(hasBinaryStringSameFirstAndLastElems(-5)); // true
console.log(decimalToBinaryString(15)); // 00000000000000000000000000001111
console.log(hasBinaryStringSameFirstAndLastElems(15)); // false
