class BitVector {
   constructor() {
      this.tableArray = [];
      this.bitLength = 32;
   }

   #setBit (num, position, reset = false) {
      const mask = 1 << position;
      return reset ? (num & ~mask) : (num | mask);
   }

   #getBitModuleQuantity (position) {
      return Math.ceil(position / this.bitLength);
   }

   #getTableArrayIndex (bitModule) {
      return this.tableArray.length - bitModule;
   }

   #getSelectedBitIndex (bitModule, position) {
      return this.bitLength - (this.bitLength * bitModule - position) - 1
   }


   getBitByPositon (position) {
      const bitModuleQuantity = this.#getBitModuleQuantity(position);
      const selectedIndex = this.#getTableArrayIndex(bitModuleQuantity);
      const selectedBitIndex = this.#getSelectedBitIndex(bitModuleQuantity, position);


      return (this.tableArray[selectedIndex] & (1 << selectedBitIndex)) === 0 ? 0 : 1;
   }

   setBitPyPosition (position, value) {
      const bitModuleQuantity = this.#getBitModuleQuantity(position);
      
      while (this.tableArray.length < bitModuleQuantity) {
         this.tableArray.unshift(0);
      }

      const selectedIndex = this.#getTableArrayIndex(bitModuleQuantity);
      const selectedBitIndex = this.#getSelectedBitIndex(bitModuleQuantity, position);

      this.tableArray[selectedIndex] = this.#setBit(this.tableArray[selectedIndex], selectedBitIndex, !value);
   }

}

const bitVector = new BitVector();

bitVector.setBitPyPosition(40, 1);
console.log(bitVector.getBitByPositon(40)); // 1
bitVector.setBitPyPosition(40, 0);
console.log(bitVector.getBitByPositon(40)); // 0


bitVector.setBitPyPosition(105, 1);
console.log(bitVector.getBitByPositon(105)); // 1

