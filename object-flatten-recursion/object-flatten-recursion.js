let isObject = (obj) => {
   return typeof obj === "object" && obj != null && !Array.isArray(obj);
};

let flattenObject = (obj, parentKey, isNewlyCreated = true) => {
   //create a static variable within a function;
   flattenObject.resultObj = isNewlyCreated ? {} : flattenObject.resultObj;

   for (key in obj) {
      if (isObject(obj[key])) {
         flattenObject(obj[key], parentKey + "_" + key, false);
      } else {
         flattenObject.resultObj[parentKey + "_" + key] = obj[key];
      }
   }
   return flattenObject.resultObj;
};


//Implementation

let student = {
   name: "John Doe",
   grades: {
      math: [10, 15, 8],
      cs: [15, 15, 10],
      english: {
         writing: 15,
         speaking: 15,
      },
   },
};

let student2 = {
   name: "Jane Doe",
   grades: {
      math: [10, 10, 10],
      cs: [12, 12, 12],
      english: {
         writing: 10,
         speaking: 10,
      },
   },
};

console.log(flattenObject(student, "student"));
// {
//    student_name: 'John Doe',
//    student_grades_math: [ 10, 15, 8 ],
//    student_grades_cs: [ 15, 15, 10 ],
//    student_grades_english_writing: 15,
//    student_grades_english_speaking: 15
//  }

console.log(flattenObject(student2, "student2"));
// {
//    student2_name: 'Jane Doe',
//    student2_grades_math: [ 10, 10, 10 ],
//    student2_grades_cs: [ 12, 12, 12 ],
//    student2_grades_english_writing: 10,
//    student2_grades_english_speaking: 10
//  }