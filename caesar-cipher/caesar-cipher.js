const englishAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const decimals = '0123456789';
const specialCharacters = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;

const encodeCaesarCipherEnglish = (value, offset) => {
   const manipulatableString = String(value).toUpperCase();
   const manipulatableStringArray = manipulatableString.trim().split('');

   const cipheredText = manipulatableStringArray.map((char) => {
      const indexOfCharInAlphabet = englishAlphabet.indexOf(char);
      const indexOfCharInDecimals = decimals.indexOf(char);

      if (indexOfCharInAlphabet !== -1) {
         if (indexOfCharInAlphabet + offset >= englishAlphabet.length) {
            return englishAlphabet[indexOfCharInAlphabet - (englishAlphabet.length - offset)];
         }
         return englishAlphabet[indexOfCharInAlphabet + offset];
      }

      if (indexOfCharInDecimals !== -1) {
         if (indexOfCharInDecimals + offset >= decimals.length) {
            return Number(decimals[indexOfCharInDecimals - (decimals.length - offset)]);
         }
         return Number(decimals[indexOfCharInDecimals + offset]);
      }
      
      if (char === ' ' || char.match(specialCharacters)) {
         return char;
      }
   })
   
   return cipheredText.join('');
}

console.log(encodeCaesarCipherEnglish('Some text here, bla bla bla 129 !', 2)); 
// UQOG VGZV JGTG, DNC DNC DNC 341 !
console.log(encodeCaesarCipherEnglish(87, 1)); //98
console.log(encodeCaesarCipherEnglish('Z', 3)); // C

