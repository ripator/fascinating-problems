const printVariables = {
   number: '%d',
   string: '%s',
};

const simpleCPrintf = (inputString, ...characters) => {
   characters.forEach((char) => {
      inputString = inputString.replace(printVariables[typeof char], char);
   });
   console.log(inputString);
}

simpleCPrintf("ASCII value = %d, Charachter = %s, number = %d, etc.", 'string', 15, 31);
// output --- ASCII value = 15, Charachter = string, number = 31, etc.
