const set1ToPosition = (position) => {
   return 1 << position // same as 2 ** position;
}

// sets 0 to bit
const resetBitByPosition = (num, position) => {
   const mask = ~set1ToPosition(position);
   return mask & num;
}

//sets 1 to bit
const setBitByPosition = (num, position) => {
   const mask = set1ToPosition(position);
   return mask | num;
}

const setBit = (num, position, reset = false) => {
   const mask = set1ToPosition(position);
   return reset ? (num & ~mask) : (num | mask);
}
