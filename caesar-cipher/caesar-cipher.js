const englishAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const decimals = '0123456789';
const specialCharacters = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;

const caesarCipherEnglish = (value) => {
   const cipherStep = 2;
   const manipulatableString = String(value).toUpperCase();
   const manipulatableStringArray = manipulatableString.trim().split('');

   const cipheredText = manipulatableStringArray.map((char) => {
      const indexOfCharInAlphabet = englishAlphabet.indexOf(char);
      const indexOfCharInDecimals = decimals.indexOf(char);

      if (indexOfCharInAlphabet !== -1) {
         if (indexOfCharInAlphabet >= englishAlphabet.length - cipherStep) {
            return englishAlphabet[indexOfCharInAlphabet - (englishAlphabet.length - cipherStep)];
         }
         return englishAlphabet[indexOfCharInAlphabet + cipherStep];
      }

      if (indexOfCharInDecimals !== -1) {
         if (indexOfCharInDecimals >= decimals.length - cipherStep) {
            return Number(decimals[indexOfCharInDecimals - (decimals.length - cipherStep)]);
         }
         return Number(decimals[indexOfCharInDecimals + cipherStep]);
      }
      
      if (char === ' ' || char.match(specialCharacters)) {
         return char;
      }
   })
   
   return cipheredText.join('');
}

console.log(caesarCipherEnglish('Some text here, bla bla bla 129 !')); 
// UQOG VGZV JGTG, DNC DNC DNC 341 !
console.log(caesarCipherEnglish(87)); 
// 09
console.log(caesarCipherEnglish('Z'));
// B

