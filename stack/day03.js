let student1 = {
    name: "Aakash",
    marks: 75
};

let student2 = student1;   // reference 😄

student2.marks = 95;

console.log(student1.marks);  // 95 😄🔥
console.log(student2.marks);  // 95
