var students = ['matthew', 'david', 'haley', 'marisa', 'micaela', 'osvaldo', 'rosamaria', 'alfredo', 'leonardo', 'gustavo', 'eric', 'kevin', 'montgomery', 'cobi', 'joshua', 'rigoberto'];

function randomStudent(){
    var numStudents = students.length;
    var randStudent = Math.ceil( Math.random() * numStudents ) - 1;
    alert( students[randStudent] );
}
randomStudent();
