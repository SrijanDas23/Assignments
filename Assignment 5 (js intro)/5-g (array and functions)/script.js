const students=[
    {name:'Stud1',age:18,grade:'A'},
    {name:'Stud2',age:20,grade:'B'},
    {name:'Stud3',age:21,grade:'A'},
    {name:'Stud4',age:24,grade:'D'},
]

function showFilteredStudents(){
    const above20=students.filter((student)=>student.age>18);
    console.log(above20);
}

function addStudent(){
    const name=prompt("Enter name");
    const age=Number(prompt("Enter age"));
    const grade=prompt("Enter grade");
    students.push({name,age,grade});
}