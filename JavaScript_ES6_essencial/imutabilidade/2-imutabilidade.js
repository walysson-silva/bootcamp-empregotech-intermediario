const students = [
    {
        name: 'Grace',
        grade: 6
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 6
    },
];

function getApprovedStudent(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados: '); 
console.log(getApprovedStudent(students));

console.log('\nLista de alunos: ')
console.log(students);