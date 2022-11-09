Function.prototype.bindCopy = function (...args) {
   let objectReference = this;
   let params = args.slice(1);
   return function (...args2) {
      objectReference.apply(args[0], [...params, ...args2]);
   }
};

let printInfo = function (age, profession) {
   console.log(this.name + " " + this.surname + ", " + age + ", " + profession);
};



const person = {
   name: 'John',
   surname: 'Doe',
};

let printPersonInfo = printInfo.bind(person, 41);
printPersonInfo('dentist'); // John Doe, 41, dentist

let printPersonInfo2 = printInfo.bindCopy(person, 35);
printPersonInfo2('teacher'); // John Doe, 35, teacher
