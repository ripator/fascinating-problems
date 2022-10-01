const isStringWithUniqueChars = (value) => {
   const a_position = 97;
   let table = 0;

   for(let i = 0; i < value.length; ++i) {
      let position = value.charCodeAt(i) - a_position;

      if (table & (1 << position)){
         return false;
      } else {
         console.log(table/toString(2));
         table |= (1 << position);
      }
   }
   return true;
}

console.log(isStringWithUniqueChars('table')); //true
console.log(isStringWithUniqueChars('test')); //false