const students = [

{ id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },

{ id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },

{ id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },

{ id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },

{ id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },

{ id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },

{ id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },

{ id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },

{ id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },

{ id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid:true}

];


//1st question

students.forEach((el)=>console.log(el));
let a=students.map((el,ui)=>{
    return el.name;
});

console.log(a);


//2nd question
let b=students.map((el,ui)=>{
    return {name:el.name,course:el.course};
   
});
console.log(b);

//3rd question
// students.forEach(student => {
//   if (student.marks >= 60) {
//     student.status = "Pass";
//   } else {
//     student.status = "Fail";
//   }
// });
// console.log(students);


const St = students.map(student => {
    const newStudent = student; 
    newStudent.status = newStudent.marks >= 60 ? "Pass" : "Fail";
    return newStudent;
});
console.log(St);

//4th question
let c=students.map((el,ui)=>{
    return `${el.name} - ${el.course}`;
   
});
console.log(c);

//5th question
const st = students.map(student => {
    const newStudent = student; 
    newStudent.marks = newStudent.marks+5;
    return newStudent;
});
console.log(st);



//filter 
//1st question

const cs = students.filter(el => el.course == "Computer Science");
console.log(cs); 


//2nd question

const ab = students.filter(el => el.marks>=80);
console.log(ab);

// 3rd question

const fp = students.filter(el => el.feesPaid == false);
console.log(fp);

//4th question
const ag = students.filter(el => el.marks<=70 && el.marks>=20);
console.log(ag);

//5th questionn
const me = students.filter(el => el.course == "Mechanical" && el.marks<85);
console.log(me);



//reduce question
//1st question
const mar = students.reduce((accumulator, mark) => {
  return accumulator + mark.marks;
}, 0);
console.log(mar);


//2nd question
const mar1 = students.reduce((accumulator, mark) => {
  return accumulator + mark.marks;
}, 0);
let avg=mar1/students.length;
console.log(avg);


//3rd question
const cnt = students.reduce((accumulator, feespaid) => {
  if(feespaid.feesPaid==true){
    accumulator=accumulator+1;
  }
  return accumulator;
}, 0);
console.log(cnt);


//4th question
const hig = students.reduce((accumulator, higmar) => {
  if(higmar.marks>accumulator){
    accumulator=higmar.marks;
  }
  return accumulator;
}, 0);
console.log(hig);




//5th question
const r=students.reduce((a,s)=>{
    (a[s.course]=a[s.course] || []).push(s);
    return a;
},{});
console.log(r);




