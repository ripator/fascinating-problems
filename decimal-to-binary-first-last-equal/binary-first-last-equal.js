const areBinaryFirstLastBitsEqual = (value) => {
   const lastBit = (value >>> 31);
   const firstBit = ((value << 31) >>> 31);
   return Boolean(lastBit & firstBit);
}

console.log(areBinaryFirstLastBitsEqual(15)); // false --- 00000000000000000000000000001111
console.log(areBinaryFirstLastBitsEqual(-5)); // true --- 11111111111111111111111111111011